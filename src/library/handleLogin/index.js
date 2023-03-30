import { handleRoute, hideLoading, showLoading } from '@/library';
import Cookies from 'js-cookie';
export const handleLogin =async (e) => {
  e.preventDefault();
  showLoading()
  const res = await (await fetch('http://localhost:3000/users')).json()
  hideLoading()
  const form = document.querySelector('#loginForm');
  // console.log(form.password.value, form.email.value);
  if (res.every(user => user.email !== form.email.value)) {
    alert('wrong email or password')
  } else {
    document.getElementById('inOut').innerHTML = 'Log out'
    history.pushState(null, null, 'dashboard')
    // console.log(user.email);
    Cookies.set('user', form.email.value, { expires: 7 }) 
    handleRoute()
    
  }
  // res.forEach(user => {
  //   if (user.email === form.email.value && user.password === form.password.value) {
  //   }
  // });
}
 