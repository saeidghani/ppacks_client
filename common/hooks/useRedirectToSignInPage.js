import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { setAuthRedirectPath } from '../../store/actions';
import {signInPage} from '../urls';

const useRedirectToSignInPage = (path) => {
  const dispatch = useDispatch();
  const onSetAuthRedirectPath = path => dispatch(setAuthRedirectPath(path));

  const redirectToSignInPage = () => {
    onSetAuthRedirectPath(path);
    Router.push(signInPage);
  };
  return redirectToSignInPage;
};

export default useRedirectToSignInPage;