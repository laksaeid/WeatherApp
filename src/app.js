import { E, handleRoute, handleWA, inOutHandler } from "@/library"
import { Container, mainContainer } from "@/layout"
import { appHome, btnMaker, darkMode, header, homePage, loading, registerPage } from "@/components"

export const App = () => {
  const app = E({
    tag: 'div',
    className: 'font-sans h-screen bg-gradient-to-b from-purple-500 to-purple-900',
    child: [header(darkMode(), E({ tag: 'p',
      className: 'dark:text-white cursor-pointer font-bold tracking-widest',
    id:'weatherApp'
    , child: 'Weather App'}), btnMaker('Log in', 'fill', 'inOut')), mainContainer(handleRoute()), loading()],
  })
  app.querySelector('#weatherApp').addEventListener('click',handleWA)
  app.querySelector('#inOut').addEventListener('click',inOutHandler)
  return Container(app)
}
 
