import { E, handleRoute } from "@/library"

export const homePage = () => {
  const homePage = E({
    tag: 'div',
    id: "homediv",
    className: "bg-white mt-10 dark:bg-slate-800 my-auto px-5 py-10 rounded-[35px] flex flex-col items-center justify-center",
    child: E({
        
    tag: 'div',
    className:'flex flex-col dark:bg-slate-800 items-center gap-3 bg-white dark:text-white',
    child: [
      E({
      tag: 'h2',
      className: "font-bold mb-3 text-center",
      child:'Expore global map of wind, weather, and ocean conditions'
      }) 
      ,
      E({
        tag:'p',
        className: "mb-10 text-center opacity-60",
        child:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro voluptatum, molestiae odit voluptatem nobis deleniti vitae velit veniam dolor excepturi!'
      }),
      E({
        tag: 'button',
        id: "startbtn",
        className: "bg-purple-700 dark:bg-purple-900 mb-3 text-white px-24 py-5 rounded-full",
        child:'Get started'
      }),
      E({
        tag: 'p',
        innerHTML: 'Already have an account? ',
        child: E({
          tag: 'a',
          id:'loginLink',
          className: " text-purple-700 cursor-pointer",
          child:' Log in'
          
        })  
      })

    ]
    })
  })
  homePage.querySelector('#startbtn').addEventListener('click', () => {
    history.pushState(null, null, 'register')
    handleRoute()
    })
  homePage.querySelector('#loginLink').addEventListener('click', () => {
    document.getElementById('inOut').innerHTML = 'Sign Up'
    history.pushState(null, null, 'login')
    handleRoute()
    })
  return homePage
}
 