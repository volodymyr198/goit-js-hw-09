import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('form'),
};

const onCreatePromises = event => {
  event.preventDefault();

  let delay = Number(refs.formEl[0].value);
  const step = Number(refs.formEl[1].value);
  const amount = Number(refs.formEl[2].value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay).then(onSucces).catch(onError);
    delay += step;
  }
};
refs.formEl.addEventListener('submit', onCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

function onSucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
