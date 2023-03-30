import { E } from '@/library';
const variant = {
  outline: 'border border-blue-500 text-purple-500 px-2 py-1 rounded-md',
  fill: 'text-black dark:text-white bg-purple-700 text-white px-3 py-1 rounded-md',
  icon: '',
};
export const btnMaker = (text, styleVariant, id = '', type = '',...child) => {
  return E({
    tag: 'button',
    className: `${variant[styleVariant]}`,
    id,
    type,
    innerHTML: text,
    child
  });
};
// const darkMode = E({
//   tag: 'button',
//   id: "theme-toggle",
//   className: 'bg-white mt-3 dark:bg-slate-800 mx-3 mb-3 rounded p-1 self-end',
//   innerHTML : svgs.darkMode
// })
// darkMode.addEventListener('click',handleDarkMode)
// return darkMode

// if(!Html.classList.contains('dark')) {
//   Html.className = 'dark'
//   document.querySelector('#theme-toggle').innerHTML=svgs.darkMode
// }else
// Html.className = 'light'
// document.querySelector('#theme-toggle').innerHTML=svgs.lightMode