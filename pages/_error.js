import React from 'react';
import ErrorPage from "../common/comps/ErrorPage";

function Error({ statusCode }) {

    return (
        <div>
            <ErrorPage statusCode={statusCode} />
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
}

export default Error