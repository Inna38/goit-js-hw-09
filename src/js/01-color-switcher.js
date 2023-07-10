const start = document.querySelector('button[data-start]');
const stop = document.querySelector('[data-stop]');
let timerId = null;

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);

function onStartClick(e) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    
  start.setAttribute('disabled', 'disabled');
  stop.removeAttribute('disabled');
}

function onStopClick() {
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
