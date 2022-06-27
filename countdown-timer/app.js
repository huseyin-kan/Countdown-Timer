const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")




const newYear ="1 Jan 2023"

function countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    const totalSeconds = (newYearDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) %60
    daysEl.innerHTML = zeroPlus(days)
    hoursEl.innerHTML = zeroPlus(hours)
    minsEl.innerHTML = zeroPlus(minutes)
    secondsEl.innerHTML = zeroPlus(seconds)
}

function zeroPlus(time){
    return time < 10 ? `0${time}` : time
}

setInterval(countdown,1000)