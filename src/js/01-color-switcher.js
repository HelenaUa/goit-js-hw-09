// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body > на случайное 
// значение используя инлайн стиль.При нажатии на кнопку «Stop», изменение цвета фона должно
// останавливаться.
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.Сделай так, чтобы пока изменение 
// темы запушено, кнопка «Start» была не активна(disabled).
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector("body");
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
let timerId = null;

btnStart.addEventListener("click", onClickStart);
btnStop.addEventListener("click", onClickStop);

function onClickStart(event) {
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
        btnStart.disabled = true;
        btnStop.disabled = false;
    },1000);
};

function onClickStop(event) {
    clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;
};
