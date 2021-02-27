// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');
  const date=document.querySelector(".date");
  const town=document.querySelector(".city");

  const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');

let cityStored;
let currentCity;

const picsM=[];
const picsD=[];
const picsE=[];
const picsN=[];

for(let i=0;i<6;i++){
  let ind=Math.floor((Math.random() * 20) + 1);
  picsM.push(ind);
  picsD.push(ind);
  picsE.push(ind);
  picsN.push(ind);
}
  let today = new Date(),
    hour_for_button = today.getHours();
    hour_for_background = today.getHours();

const showAmPm = true;
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    weekday=today.getDay(),
    day=today.getDate(),
    month=today.getMonth();

    if(hour_for_background<hour){
      setBgGreet();
      if(hour_for_background!==23)
      hour_for_background++;
      else hour_for_background=0;
    }
    month++;

    let weekdaySTR=setDay(weekday);
    let monthSTR=setMonth(month);
  const amPm = hour >= 24 ? ' ' : ' '

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm 
    ? amPm : ''
  }`;
date.innerHTML=weekdaySTR+", "+day+" "+monthSTR;
  setTimeout(showTime, 1000);
}

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town.textContent}&lang=en&appid=566ed324a8ac988e56f5238ad0d8118e&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  if(data.cod==="404"){
    weatherIcon.innerHTML="<img src='assets/images/exclamation_sign.png' height='50'>";
  temperature.textContent = `Error`;
  weatherDescription.textContent = `Wrong input`;
  }
else{
  weatherIcon.innerHTML="";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description+`, humidity ${data.main.humidity}%, wind speed ${data.wind.speed}m/s`;
}
 

  
}

async function getQuote() {  
  let quotes = await(await fetch('quotes.json')).json();
  let index = Math.floor((Math.random() * 36) + 1);
  blockquote.textContent = quotes[index].en;
  figcaption.textContent = quotes[index].author;
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setDay(weekday){
  let weekdaySTR; 
  switch(weekday){
    case 1:
      weekdaySTR="Monday";
      break;
    case 2:
      weekdaySTR="Tuesday";
      break;
    case 3:
      weekdaySTR="Wednesday";
      break;
    case 4:
      weekdaySTR="Thursday";
      break;
    case 5:
      weekdaySTR="Friday";
      break;
    case 6:
      weekdaySTR="Saturday";
      break;
    case 0:
      weekdaySTR="Sunday";
      break;
  }
  return weekdaySTR;
}

function setMonth(month){
  let monthSTR;
  switch(month){
    case 1:
      monthSTR="January";
      break;
    case 2:
      monthSTR="February";
      break;
    case 3:
      monthSTR="March";
      break;
    case 4:
      monthSTR="April";
      break;
    case 5:
      monthSTR="May";
      break;
    case 6:
      monthSTR="June";
      break;
    case 7:
      monthSTR="July";
      break;
    case 8:
      monthSTR="August";
      break;
    case 9:
      monthSTR="September";
      break;
    case 10:
      monthSTR="October";
      break;
    case 11:
      monthSTR="November";
      break;
    case 12:
      monthSTR="December";
      break;
  }
  return monthSTR;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    switch (hour){
      case 6:
        document.body.style.backgroundImage =
        `url('assets/images/morning/${picsM[0]}.jpg'),url(assets/images/overlay.png)`;
        break;
      case 7:
        document.body.style.backgroundImage =
        `url('assets/images/morning/${picsM[1]}.jpg')`;
      break;
      case 8:
        document.body.style.backgroundImage =
        `url('assets/images/morning/${picsM[2]}.jpg')`;
      break;
      case 9:
        document.body.style.backgroundImage =
        `url('assets/images/morning/${picsM[3]}.jpg'),url(assets/images/overlay.png)`;
      break;
      case 10:
        document.body.style.backgroundImage =
        `url('assets/images/morning/${picsM[4]}.jpg')`;
      break;
      case 11:
        document.body.style.backgroundImage =
        `url('assets/images/morning/${picsM[5]}.jpg')`;
      break;
    }
    greeting.textContent = 'Good Morning, ';
  } else if (hour >= 12 && hour < 18) {
    switch (hour){
      case 12:
        document.body.style.backgroundImage =
        `url('assets/images/day/${picsD[0]}.jpg')`;
      break;
      case 13:
        document.body.style.backgroundImage =
        `url('assets/images/day/${picsD[1]}.jpg')`;
      break;
      case 14:
        document.body.style.backgroundImage =
        `url('assets/images/day/${picsD[2]}.jpg')`;
      break;
      case 15:
        document.body.style.backgroundImage =
        `url('assets/images/day/${picsD[3]}.jpg')`;
      break;
      case 16:
        document.body.style.backgroundImage =
        `url('assets/images/day/${picsD[4]}.jpg')`;
      break;
      case 17:
        document.body.style.backgroundImage =
        `url('assets/images/day/${picsD[5]}.jpg')`;
      break;
    }
    document.body.style.color = 'white';
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour>=18&&hour<24){
    switch (hour){
      case 18:
        document.body.style.backgroundImage =
        `url('assets/images/evening/${picsE[0]}.jpg')`;
      break;
      case 19:
        document.body.style.backgroundImage =
        `url('assets/images/evening/${picsE[1]}.jpg')`;
      break;
      case 20:
        document.body.style.backgroundImage =
        `url('assets/images/evening/${picsE[2]}.jpg')`;
      break;
      case 21:
        document.body.style.backgroundImage =
        `url('assets/images/evening/${picsE[3]}.jpg')`;
      break;
      case 22:
        document.body.style.backgroundImage =
        `url('assets/images/evening/${picsE[4]}.jpg')`;
      break;
      case 23:
        document.body.style.backgroundImage =
        `url('assets/images/evening/${picsE[5]}.jpg')`;
      break;
    }
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
  else{
    switch (hour){
      case 0:
        document.body.style.backgroundImage =
        `url('assets/images/night/${picsN[0]}.jpg')`;
      break;
      case 1:
        document.body.style.backgroundImage =
        `url('assets/images/night/${picsN[1]}.jpg')`;
      break;
      case 2:
        document.body.style.backgroundImage =
        `url('assets/images/night/${picsN[2]}.jpg')`;
      break;
      case 3:
        document.body.style.backgroundImage =
        `url('assets/images/night/${picsN[3]}.jpg')`;
      break;
      case 4:
        document.body.style.backgroundImage =
        `url('assets/images/night/${picsN[4]}.jpg')`;
      break;
      case 5:
        document.body.style.backgroundImage =
        `url('assets/images/night/${picsN[5]}.jpg')`;
      break;
    }
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
   }
  if(e.type==='blur'){
    getName();
  }
}

function clearName(e){
  if(e.type==='click'){
    localStorage.setItem('name', localStorage.getItem('name'));
    name.innerHTML="";
  }
}

function setCity(e) {
  
  if (e.which == 13 || e.keyCode == 13) {
    if(!e.target.innerText.trim() || e.target.innerText === null || e.target.innerText === '' )
    {
      town.textContent = localStorage.getItem('city');
    }
else{
  localStorage.setItem('city', e.target.innerText);
}
    
    town.blur();
    checkCity();
    getWeather();
  }

}

function checkCity(){
  currentCity=localStorage.getItem('city');
  if(town.textContent == null || town.textContent ==""){
    localStorage.setItem('city', cityStored);
    alert("mt string");
    getCity();
  }
}

function clearCity(e){
  if(e.type==='click'){
    localStorage.setItem('city', localStorage.getItem('city'));
    town.innerHTML="";
  }
}
  
function getCity() {
  if (localStorage.getItem('city') === null) {
    town.textContent = '[Enter town]';
  } else {
    town.textContent = localStorage.getItem('city');
    getWeather();
  }
}

function clearFocus(e){
  if(e.type==='click'){
    localStorage.setItem('focus', localStorage.getItem('focus'));
    focus.innerHTML="";
  }
}
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }
  if(e.type==='blur'){
    getFocus();
  }
}

function change_background(){
  hour_for_button++;
  if(hour_for_button>=24)hour_for_button=0;

  switch(hour_for_button){
    case 0:
      document.body.style.backgroundImage =
      `url('assets/images/night/${picsN[0]}.jpg')`;
    break;
    case 1:
      document.body.style.backgroundImage =
      `url('assets/images/night/${picsN[1]}.jpg')`;
    break;
    case 2:
      document.body.style.backgroundImage =
      `url('assets/images/night/${picsN[2]}.jpg')`;
    break;
    case 3:
      document.body.style.backgroundImage =
      `url('assets/images/night/${picsN[3]}.jpg')`;
    break;
    case 4:
      document.body.style.backgroundImage =
      `url('assets/images/night/${picsN[4]}.jpg')`;
    break;
    case 5:
      document.body.style.backgroundImage =
      `url('assets/images/night/${picsN[5]}.jpg')`;
    break;
    case 6:
      document.body.style.backgroundImage =
      `url('assets/images/morning/${picsM[0]}.jpg')`;
      break;
    case 7:
      document.body.style.backgroundImage =
      `url('assets/images/morning/${picsM[1]}.jpg')`;
    break;
    case 8:
      document.body.style.backgroundImage =
      `url('assets/images/morning/${picsM[2]}.jpg')`;
    break;
    case 9:
      document.body.style.backgroundImage =
      `url('assets/images/morning/${picsM[3]}.jpg')`;
    break;
    case 10:
      document.body.style.backgroundImage =
      `url('assets/images/morning/${picsM[4]}.jpg')`;
    break;
    case 11:
      document.body.style.backgroundImage =
      `url('assets/images/morning/${picsM[5]}.jpg')`;
    break;
    case 12:
      document.body.style.backgroundImage =
      `url('assets/images/day/${picsD[0]}.jpg')`;
    break;
    case 13:
      document.body.style.backgroundImage =
      `url('assets/images/day/${picsD[1]}.jpg')`;
    break;
    case 14:
      document.body.style.backgroundImage =
      `url('assets/images/day/${picsD[2]}.jpg')`;
    break;
    case 15:
      document.body.style.backgroundImage =
      `url('assets/images/day/${picsD[3]}.jpg')`;
    break;
    case 16:
      document.body.style.backgroundImage =
      `url('assets/images/day/${picsD[4]}.jpg')`;
    break;
    case 17:
      document.body.style.backgroundImage =
      `url('assets/images/day/${picsD[5]}.jpg')`;
    break;
    case 18:
      document.body.style.backgroundImage =
      `url('assets/images/evening/${picsN[0]}.jpg')`;
    break;
    case 19:
      document.body.style.backgroundImage =
      `url('assets/images/evening/${picsN[1]}.jpg')`;
    break;
    case 20:
      document.body.style.backgroundImage =
      `url('assets/images/evening/${picsN[2]}.jpg')`;
    break;
    case 21:
      document.body.style.backgroundImage =
      `url('assets/images/evening/${picsN[3]}.jpg')`;
    break;
    case 22:
      document.body.style.backgroundImage =
      `url('assets/images/evening/${picsN[4]}.jpg')`;
    break;
    case 23:
      document.body.style.backgroundImage =
      `url('assets/images/evening/${picsN[5]}.jpg')`;
    break;
  }  
}

name.addEventListener('click', clearName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener("click", clearFocus);
town.addEventListener('click', clearCity);
town.addEventListener('keypress', setCity);
town.addEventListener('blur', getCity);

showTime();
setBgGreet();
getName();
getFocus();
getCity();
getQuote();
