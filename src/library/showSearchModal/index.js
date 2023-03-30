import { clearData, dashboardHeader, lastSearch } from "@/components";
import { E, getInfo } from "@/library";

export const showSearchModal = () => {
  if(!lastSearch.length>0)return
    document.querySelector('#lasts').innerHTML='';
    lastSearch.forEach(element => {
      const el = E({
        tag: 'div',
        className:'cursor-pointer w-full hover:bg-slate-600 px-10 py-1',
        child:element,
      })
      el.addEventListener('click', e => getInfo(e.target.innerHTML))
     document.querySelector('#lasts').append(el);
    });
    const clearLastSearch = E({
      tag: 'button',
      className:'flex items-center gap-1 justify-center w-full p-1 hover:bg-red-500',
      id: 'clearLocal',
      child:[E({tag:'ion-icon',name:'trash-bin-outline'}),'clear History']
    })
    document.querySelector('#lasts').append(clearLastSearch)
    clearLastSearch.addEventListener('click', () => {
      document.querySelector('#lasts').innerHTML=''
      clearData()
      localStorage.clear()
    })
   document.querySelector('#lasts').className='mt-10 flex flex-col bg-gray-200 dark:bg-slate-700 dark:text-white items-center rounded-xl absolute top-0 right-14 opacity-100 transition duration-500 overflow-hidden text-center text-sm'
}
 