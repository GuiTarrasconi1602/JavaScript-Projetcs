// Capturar evento de submit do formulário
const start = document.querySelector('#start');
const parar = document.querySelector('#stop');
const clean = document.querySelector('#clean');
const time = document.querySelector('#relogio');
//relogio.innerHTML = '00:00:00'
let seconds = 0
let minutes = 0
let hours = 0
let timer;


start.addEventListener('click', function (e) {
  if (time.classList.contains('redFlag')) time.classList.remove('redFlag')
  clearInterval(timer);
  incrementaTempo();
})
parar.addEventListener('click', function (e) {
  clearInterval(timer);
  time.classList.add('redFlag')
})
clean.addEventListener('click', function (e) {
  if (time.classList.contains('redFlag')) time.classList.remove('redFlag')
  clearInterval(timer);
  seconds = 0
  minutes = 0
  hours = 0
  time.innerHTML = `00:00:00`
})


function incrementaTempo() {
   timer = setInterval(formataTimer, 1);
}

function cronometroTime(){
  let timerResult = []
  if(hours == 23 && minutes == 59 && seconds == 59) 
    return timerResult = [hours, minutes,seconds]
  else if(minutes == 59 && seconds == 59) {
    hours ++;
    minutes = 0;
    seconds = 0
    return timerResult = [hours, minutes,seconds]
  }else if(seconds == 59 && minutes != 59) {
    minutes ++;
    seconds = 0;
    return timerResult = [hours, minutes,seconds]
  }else if (seconds < 59) {
    seconds ++;
    return timerResult = [hours, minutes,seconds]
  }
}

function formataTimer () {
  let [hor, min, seg] = cronometroTime();
  let secFormatted = seg
  let minFormatted = min
  let hourFormatted = hor

  if (seg < 10) secFormatted = `0${seg}`
  if (min < 10) minFormatted = `0${min}`
  if (hor < 10) hourFormatted = `0${hor}`
  time.innerHTML = `${hourFormatted}:${minFormatted}:${secFormatted}`
}
