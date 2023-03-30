import { appHome, weatherCard } from "@/components"
import { hideLoading, showLoading } from "@/library"

export const getInfo = async (city) => {
  showLoading()
  try {
    
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a2276f108350e7dadd0ce13bc5f482d
    `)
    const res = await req.json()
    const {coord} = res
    getWeather(coord.lat,coord.lon)
  } catch {
    alert('city not found')
    hideLoading()
  }
}
async function getWeather(lat, lon) {
    
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a2276f108350e7dadd0ce13bc5f482d
    `)
    const res = await req.json()
  console.log(res);
  document.querySelector('#appHome').after(weatherCard(res));
  hideLoading()
 }