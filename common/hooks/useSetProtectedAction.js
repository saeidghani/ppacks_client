import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthRedirectPath } from '../../store/actions';


const useSetProtectedAction = (path, onDispatch) => {
  const dispatch = useDispatch();
  const onSetAuthRedirectPath = path => dispatch(setAuthRedirectPath(path));
  const user = useSelector(state => state.auth.user);

  const handleSetClick = () => {
    if (!user) {
      onSetAuthRedirectPath(path);
      Router.push('/signInPage');
    } else {
      onDispatch();
    }
  };
  return handleSetClick;
};

export default useSetProtectedAction;