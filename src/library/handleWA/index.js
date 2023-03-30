import { handleRoute } from '@/library';
export const handleWA = () => {
  if (location.pathname === '/login' || location.pathname === '/register') {
    history.pushState(null, null, '/');
    document.getElementById('inOut').innerHTML = 'Log in';
    handleRoute();
  }
};
