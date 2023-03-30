import { E, getInfo,lastSearchHandle, showSearchModal } from "@/library"
import Cookies from "js-cookie"
import { weatherCard } from '@/components';
import { debounce } from 'lodash/function';


export let lastSearch = JSON.parse(localStorage.getItem('lastSearch')) || []
export const clearData = () => lastSearch=[]
export const dashboardHeader = (last) => {
  const dashboardHeader = [E({
    tag: 'div',
    id: 'dashHead',
      className: 'flex items-center gap-2 w-full relative',
      child: [
        E({
          tag: 'p', className: 'flex-1 dark:text-white  underline underline-offset-4 decoration-pink-500',
          child: ['hello ', E({
            tag: 'span', className: 'font-bold',
            child:Cookies.get('user')            
          })
          ]
        }),
        E({
          tag: 'ion-icon',
          id:'searchBtn',
          className:'bg-gray-300 cursor-pointer rounded-full p-1 text-2xl',
          name:'search-outline'
        }),
        E({
          tag: 'div',
          id:'searchBox',
          className: 'bg-gray-300 w-0 invisible px-0 py-1 rounded transition-all duration-1000',
          child:[E({
            tag: 'input',
            id: 'searchVal',
            autocomplete:'off',
            className:'w-full outline-none bg-transparent '
          }),E({
            tag: 'div',
            id:'lasts',
            className: 'mt-10 flex flex-col gap-1 bg-white items-center rounded-xl absolute top-0 right-14 invisible opacity-0',
          })]
        }),
        E({
          tag: 'ion-icon',
          className:'bg-gray-300 cursor-pointer rounded-full p-1 text-2xl',
          name:'globe-outline'
        }),
        
      ]
    })
  ]
  
  dashboardHeader[0].querySelector('#searchVal').addEventListener('focus',debounce(showSearchModal,1000) )
  // dashboardHeader[0].querySelector('#searchVal').addEventListener('blur', () => {
    // 
  // })
  dashboardHeader[0].querySelector('#searchBtn').addEventListener('click', async e => {
    const input = document.querySelector('#searchVal')
    if (input.value) {
      if (!lastSearch.includes(input.value)) lastSearch.push(input.value)
      if(lastSearch.length>6)lastSearch.shift()
      localStorage.setItem('lastSearch', JSON.stringify(lastSearch));  
    }
    if (!input.value) return
    getInfo(input.value)
    appHome.querySelector('#searchBox').className = 'bg-gray-300 w-0 invisible outline-none px-0 py-1 rounded transition-all duration-1000'
    document.querySelector('#lasts').className='mt-10 flex flex-col gap-1 bg-white items-center w-max rounded-xl absolute top-0 right-14 opacity-0 invisible transition duration-500'
    document.querySelector('#searchVal').value=''
  })
  
  return dashboardHeader
}
 
