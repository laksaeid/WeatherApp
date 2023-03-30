import { handleRoute, hideLoading, showLoading } from '@/library';
export const registerNewUser = async (user) => {
  showLoading()
  const res = await (await fetch('http://localhost:3000/users')).json()
  const validate = res.find(val => val.email === user.email)
  if (validate) {
    alert('User already exists')
    hideLoading()
    return
  }
  // showLoading()
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  hideLoading()
  history.pushState(null, null, 'login')
  handleRoute()
}
 