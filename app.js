let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let endDate = new Date(2021, 0, 1, 00, 00);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let allTime = endTime - todayDate;
  let oneMinute = 60 * 1000;
  let oneHour = 60 * oneMinute;
  let oneDay = 24 * oneHour;

  let addZero = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayDate) {
    clearInterval(i);
    let text = document.querySelector('.main');
    text.classList.add('newyear');
    document.querySelector('.title__h1').innerHTML = 'Happy New Year!!!';
    document.querySelector('.title__h2').innerHTML = '2023';
  } else {
    let daysLeft = Math.floor(allTime / oneDay);
    let hoursLeft = Math.floor((allTime % oneDay) / oneHour);
    let minutesLeft = Math.floor((allTime % oneHour) / oneMinute);
    let secondsLeft = Math.floor((allTime % oneMinute) / 1000);
    day.textContent = addZero(daysLeft);
    hour.textContent = addZero(hoursLeft);
    minute.textContent = addZero(minutesLeft);
    second.textContent = addZero(secondsLeft);
  }
}
let i = setInterval(countdown, 1000);
countdown();
