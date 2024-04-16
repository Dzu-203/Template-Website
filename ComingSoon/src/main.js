const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const number = document.querySelectorAll('.number')

let day = 9
let hour = 30
let minute = 25
let second = 10


let timeming = setInterval(() => {
    second--
    if (second === 0){
        second = 60
        minute--
    }
    if (minute === 0){
        minute = 60
        hour--
    }
    if (hour === 0){
        hour = 60
        day--
    }
    if (day === 0){
        clearInterval()
    }
    days.innerHTML = day < 10 ? `0${day}` : day
    hours.innerHTML = hour < 10 ? `0${hour}` : hour
    minutes.innerHTML = minute < 10 ? `0${minute}` : minute
    seconds.innerHTML = second < 10 ? `0${second}` : second
},1000)