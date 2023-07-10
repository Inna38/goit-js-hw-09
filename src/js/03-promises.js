const btn = document.querySelector('button[type="submit"]');
const form = document.querySelector(".form")
// const amount = document.querySelector('[name="amount"]')
// console.dir(amount);
let timerId = null;

form.addEventListener("input", createPromise)
btn.addEventListener("submit", createPromise)

const promise = new Promise((res, rej) => {
 timerId = setInterval(() => {
    createPromise()
  }, 1000);
  if (form[2].value) {
  clearInterval(timerId)
}
})

  function createPromise(position, delay)
{
  console.log("qqq");
console.dir(form[2].value);
}

// function createPromise(position, delay, ) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });