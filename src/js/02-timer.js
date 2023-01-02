// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.Такой таймер может использоваться
// в блогах и интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.
// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button[data-start]");
const timerDays = document.querySelector("span[data-days]");
const timerHours = document.querySelector("span[data-hours]");
const timerMinutes = document.querySelector("span[data-minutes]");
const timerSeconds = document.querySelector("span[data-seconds]");

let timeId = 0;
let deltaTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      clearInterval(timeId);
      
      const date1 = options.defaultDate.getTime();
      console.log(date1);
      const date2 = selectedDates[0].getTime();
      console.log(date2);
      deltaTime = date2 - date1;
      console.log(deltaTime);

      if (deltaTime > 0) {
          btnStart.disabled = false;
          const timeComponents = convertMs(deltaTime);
          addLeadingZero(timeComponents);
      } else {
       btnStart.disabled = true;
      window.alert("Please choose a date in the future");
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";   
      }
  },
};

const fp = flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

btnStart.addEventListener("click", onClick);
function onClick(event) {
    btnStart.disabled = true;
    timeId = setInterval(() => {
        if (deltaTime < 1000) {
            return;
        };
        deltaTime -= 1000;
        const timeComponents = convertMs(deltaTime);
        console.log(timeComponents);
        addLeadingZero(timeComponents);
    }, 1000);
};

function addLeadingZero(timeComponents) {
    timerDays.textContent = String(timeComponents.days).padStart(2, '0');
    timerHours.textContent = String(timeComponents.hours).padStart(2, '0');
    timerMinutes.textContent = String(timeComponents.minutes).padStart(2, '0');
    timerSeconds.textContent = String(timeComponents.seconds).padStart(2, '0');
};








