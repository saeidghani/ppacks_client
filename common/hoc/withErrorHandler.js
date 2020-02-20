import React, {Fragment} from 'react';
import axios from 'axios';

import {StyledModal} from '../styled/StyledModal';
import useErrorHandler from '../hooks/useErrorHandler';

const withErrorHandler = (WrappedComponent) => {
  return props => {
    const [error, clearError] = useErrorHandler(axios);
    return (
      <Fragment>
        <StyledModal
          closable={false}
          visible={error}
          onOk={clearError}
        >
          {error ? error.message : null}
        </StyledModal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
