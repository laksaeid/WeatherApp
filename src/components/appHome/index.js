import { E } from "@/library"
import { btnMaker } from '@/components';

export const appHome = (...child) => {
  const appHome = E({
    tag: 'div',
    id:'appHome',
    child
  })
  document.documentElement.addEventListener('click', (e) => {
    console.log(location.pathname);
    if (location.pathname !== '/dashboard') return
    if (e.target.matches('#searchBtn') || e.target.matches('#searchBox') || e.target.matches('#searchVal')) {
      
      appHome.querySelector('#searchBox').className='bg-gray-300 w-40 visible outline-none px-2 py-1 rounded transition-all duration-1000'
    } else {
      appHome.querySelector('#searchBox').className = 'bg-gray-300 w-0 invisible outline-none px-0 py-1 rounded transition-all duration-1000'
      document.querySelector('#lasts').className='mt-10 flex flex-col gap-1 bg-white items-center w-max rounded-xl absolute top-0 right-14 opacity-0 invisible transition duration-500'
      document.querySelector('#searchVal').value=''
    }
  })

  return appHome
}
//  <div class="focus:" ></div>