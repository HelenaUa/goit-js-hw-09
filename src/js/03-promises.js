// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах,
// шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз,
// сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого промиса(position) и задержку 
// учитывая введенную пользователем первую задержку(delay) и шаг(step).

// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется 
// через delay времени.Значением промиса должен быть объект, в котором будут свойства position и delay со 
// значениями одноименных параметров.Используй начальный код функции для выбора того, что нужно сделать 
// с промисом - выполнить или отклонить.

const form = document.querySelector("form");

form.addEventListener("submit", onSubmit);


function onSubmit(event) {
  event.preventDefault();
  
  const formElements = event.target.elements;
  console.log(formElements);

  const arrayData = {
    delay: Number(formElements.delay.value),
    step: Number(formElements.step.value),
    amount: Number(formElements.amount.value),
  };
  console.log(arrayData);

  for (let i = 1; i <= arrayData.amount; i += 1) {
    createPromise(i, arrayData.delay).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    arrayData.delay += arrayData.step;
    // console.log("delay", arrayData.delay);
    form.reset();
  }
};


function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    // console.log('shouldResolve',shouldResolve);
    setTimeout(() => { 
       if (shouldResolve) {
         res({ position, delay }); // Fulfill 
  } else {
    rej({position, delay}) // Reject
  }
    })

    }, delay)
    // console.log(promise);
  return promise;
};



