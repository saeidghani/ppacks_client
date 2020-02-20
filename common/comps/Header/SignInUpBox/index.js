import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import {
  SignInUpBoxContainer,
  UserName,
  SignInButton,
  SignOutButton,
  SignUpButton
} from './SignInUpBoxStyles';
import { logout } from '../../../../store/actions';


export default function SignInUpBox() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const signOut = () => dispatch(logout());

  return (
    <SignInUpBoxContainer>
      <div>
        <UserName>
          {user && user.name}
        </UserName>
        {!user &&
        <SignInButton onClick={() => Router.push('/signInPage')}>
          Sign in
        </SignInButton>}
      </div>
      <div>
        {user &&
        <SignOutButton onClick={signOut}>
          Sign Out
        </SignOutButton>}
        {!user &&
        <SignUpButton onClick={() => Router.push('/signUpPage')}>
          Sign up
        </SignUpButton>
        }
      </div>
    </SignInUpBoxContainer>
  );
}

