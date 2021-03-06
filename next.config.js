/* eslint-disable */
const css = require('@zeit/next-css');
const less = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

//Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8')
);

const nextConfig =  {webpack: (config, { isServer }) => {
        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback)
                    } else {
                        callback()
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.push(
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            );

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
        return config
    }};

module.exports = withPlugins([
    [less, {
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables,
            ignoreOrder: true,
        },
    }]
], nextConfig);


// [css, {
//     cssModules: true,
//     ignoreOrder: true,
//     cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[local]___[hash:base64:5]",
//     }
// }]
