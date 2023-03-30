import { appHome, dashboardHeader, homePage, loginPage,  registerPage, weatherCard } from "@/components";

import { E, lastSearchHandle } from "@/library";

export const handleRoute = () => {
  const routesEl = document.querySelector('#route') || E({ tag: 'div'});
  routesEl.innerHTML = ''
  switch (location.pathname) {
    case '/':
      return routesEl.appendChild(homePage())
    case '/register':
      return routesEl.appendChild(registerPage())
    case '/login':
      return routesEl.appendChild(loginPage())
    case '/dashboard':   
    // document.querySelector('#dashHead').append(lastSearchHandle())
      routesEl.prepend(appHome(...dashboardHeader()))
      // routesEl.append(moreDays())
      return 
    default:
      return console.log('asd');
  }
}
 