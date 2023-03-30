import { E, handleLogin } from "@/library"

export const loginPage = () => {
  const loginPage = E({
    tag: 'div',
    id: "homediv",
    className: "bg-white mt-10 dark:bg-slate-800 px-5 py-10 rounded-[35px] flex flex-col items-center justify-center gap-20",
    child: [E({
      tag: 'h2',
      className:'font-bold text-3xl dark:text-white',
      child:'Log In'
    }),E({
      tag: 'form',
      id:'loginForm',
      className: "w-full",
      child: [E({
        tag: 'div',
        className: "mb-6",
        child: [E({
          tag: 'label',
          for: "email",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          child:'Your email'
        }),
          E({
            tag: 'input',
            type: "email",
            id: "email",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500",
            placeholder: "name@flowbite.com",
            // required:true
  
          })
        ]
  
      }),
        E({
          tag: 'div',
          className:"mb-6",
          child: [
            E({
              tag: 'label',
              for: "password",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              child:'Your password'
            }),
            E({
              tag:'input',
              type: "password",
              id: "password",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500",
              // required:true
            })
          ]
  
        }),
        E({
          tag: 'div',
          className: "flex items-start mb-6",
          child: [
            E({
              tag: 'div',
              className: "flex items-center h-5",
              child: E({
              tag: 'input',
              id: "remember",
              type: "checkbox",
              value: "",
              className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",
              required:true
              })          
            }),
            E({
              tag: 'label',
              for: "remember",
              className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
              child: 'Remember me'
            })
          ] 
        }),
        E({
          tag: 'button',
          id:'loginbtn',
          type: "submit",
          className: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
          child:'Log In'
        })
      ]
    })  ]
  })
  loginPage.querySelector('#loginbtn').addEventListener('click',handleLogin)
  return loginPage
}
 