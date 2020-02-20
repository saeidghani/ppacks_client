import React, { useEffect } from 'react';
import  SignIn  from '../common/comps/SignIn';
import { useSelector } from 'react-redux';
import Router from 'next/router';

function SignInPage() {
  const user = useSelector(state => state.auth.user);
  const authRedirectPath = useSelector(state => state.auth.authRedirectPath);

  useEffect(() => {
    if(user){
      Router.push(authRedirectPath);
    }
  }, [user]);

  return (
    <div>
      {!user && <SignIn/>}
    </div>
  );
}

export default SignInPage;
