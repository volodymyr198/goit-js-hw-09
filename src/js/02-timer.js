import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  timeValues: document.querySelectorAll('.value'),
};

refs.btnStart.disabled = true;

let setTime = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
    }

    if (selectedDates[0] > new Date()) {
      refs.btnStart.disabled = false;
      setTime = selectedDates[0].getTime();
    }
  },
};
flatpickr('input#datetime-picker', options);

const onStartCounter = event => {
  refs.btnStart.disabled = true;

  intervalId = setInterval(() => {
    runTimer();
  }, 1000);
};
refs.btnStart.addEventListener('click', onStartCounter);

function runTimer() {
  const currentTime = Date.now();
  const deltaTime = setTime - currentTime;
  const convertTime = convertMs(deltaTime);

  stopTimer(deltaTime);

  console.log(convertTime);
  changeDisplay(convertTime);
}

function stopTimer(deltaTime) {
  if (deltaTime < 1000) {
    clearInterval(intervalId);
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function changeDisplay({ days, hours, minutes, seconds }) {
  refs.timeValues.forEach(value => {
    // refs.timeValues.value.textContent = days;
    //  refs.timeValues.textContent = minutes;
    console.log(value);
  });
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
