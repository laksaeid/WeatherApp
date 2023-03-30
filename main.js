import './src/styles/style.css'
import { App } from './src/app';
import Cookies from 'js-cookie';
import { handleRoute } from './src/library/handleRoute/index';
const root = document.getElementById('app');
root.append(App());
if (Cookies.get('user')) {
  document.getElementById('inOut').innerHTML = 'Log out'
  history.pushState(null, null, 'dashboard')
} else {
  history.pushState(null, null, '/')
}
handleRoute()
window.addEventListener('popstate', handleRoute)