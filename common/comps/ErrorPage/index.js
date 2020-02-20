import React from 'react';
import { ErrorContainer } from './ErrorStyles';

export default function ErrorPage({ statusCode }) {
  const errMsg = statusCode ?
    (statusCode === 404 ? 'Sorry The requested page was not found' : 'Sorry something went wrong') :
    'Sorry An error occurred on client!!!';

  return (
    <ErrorContainer>
      <h1>{errMsg}</h1>
    </ErrorContainer>
  );
}