let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let endDate = new Date(2023, 0, 1, 00, 00);
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
    document.querySelector('.Text');
  }
}
