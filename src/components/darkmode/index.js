import { svgs } from "@/assets"
import { E } from "@/library"

export const darkMode = () => {
  const darkMode = E({
    tag: 'button',
    id:'darkmodebtn',
    className:'p-1.5 rounded-xl bg-white dark:bg-slate-800',
    innerHTML:svgs.darkMode
  })
  
  darkMode.addEventListener('click',handleDarkMode)
  return darkMode
}
 
const handleDarkMode = () => {
  if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
    document.querySelector('#darkmodebtn').innerHTML=svgs.darkMode

  } else {
    document.documentElement.classList.remove('dark')
    document.querySelector('#darkmodebtn').innerHTML=svgs.lightMode
  }
}