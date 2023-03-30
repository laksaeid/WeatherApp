import { handleRoute } from '@/library';
import Cookies from 'js-cookie';
export const inOutHandler = (e) => {
  if (e.target.innerHTML === 'Log in') {
    history.pushState(null, null, 'login');
    e.target.innerHTML = 'Sign Up';
  } else if (e.target.innerHTML === 'Sign Up') {
    history.pushState(null, null, 'register');
    e.target.innerHTML = 'Log in';
  } else {
    Cookies.remove('user');
    e.target.innerHTML = 'Log in';
    history.pushState(null, null, '/');
  }
  handleRoute();
};
