import React, { Fragment, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { checkAuthState, checkCartState } from '../../store/actions';

function StateChecker({ children }) {
  const dispatch = useDispatch();
  const onCheckAuthState = useCallback(() => dispatch(checkAuthState()));
  const onCheckCartState = useCallback(() => dispatch(checkCartState()));

  useEffect(() => {
    onCheckAuthState();
    onCheckCartState();
  }, []);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default StateChecker;

