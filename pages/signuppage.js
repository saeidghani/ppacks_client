import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import SignUp from '../common/comps/SignUp';

function SignUpPage() {
  const user = useSelector(state => state.auth.user);
  const authRedirectPath = useSelector(state => state.auth.authRedirectPath);

  useEffect(() => {
    if (user) Router.push(authRedirectPath);
  }, [user]);

  return (
    <div>
      <SignUp />
    </div>
  );
}

export default SignUpPage;
