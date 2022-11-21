function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let id = 2;

btnStop.disabled = true;

const onPressStart = event => {
  setInterval(startBackgroundColor, 1000);

  btnStop.disabled = false;
  btnStart.disabled = true;
};
btnStart.addEventListener('click', onPressStart);

const onPressStop = event => {
  clearInterval(id);
  id += 1;
  btnStop.disabled = true;
  btnStart.disabled = false;
};
btnStop.addEventListener('click', onPressStop);

function startBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
