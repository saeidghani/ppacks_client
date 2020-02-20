import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';

import {store} from '../store/store';
import Layout from "../common/hoc/Layout";
import StyledToastContainer from "../common/styled/StyledToastContainer";

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {},
        }
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Head>
                    <title>Bag store</title>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}


export default withRedux(store)(MyApp);