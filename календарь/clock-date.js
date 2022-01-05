let realDay = document.getElementById("realDay");
let realMonth = document.getElementById("realMonth");
let realYears = document.getElementById("realYears");
let realHour = document.getElementById("realHour");
let realMinutes = document.getElementById("realMinutes");
let realSeconds = document.getElementById("realSeconds");
// Часы реального времени и дата
let time = new Date();
let thisYear = time.getFullYear();
let day = time.getDay() + 1;

if (thisYear < 2000)
    thisYear = thisYear + 1900;
if (day === 1) DayofWeek = "Воскресенье";
if (day === 2) DayofWeek = "Понедельник";
if (day === 3) DayofWeek = "Вторник";
if (day === 4) DayofWeek = "Среда";
if (day === 5) DayofWeek = "Четверг";
if (day === 6) DayofWeek = "Пятница";
if (day === 7) DayofWeek = "Суббота";

function getDoubleDigit(num)
{
    return String(num).length === 1 ? '0' + num : num;
}

setInterval(function () {
    let cd = new Date();
    realDay.innerText = getDoubleDigit(cd.getDate());
    realMonth.innerText = calendar.monthName[cd.getMonth()];
    realYears.innerText = cd.getFullYear();
    realHour.innerText = getDoubleDigit(cd.getHours());
    realMinutes.innerText = getDoubleDigit(cd.getMinutes());
    realSeconds.innerText = getDoubleDigit(cd.getSeconds());
}, 1000);

// Погода.
const inputWeather=document.querySelector('#inputWeather');
const weather = document.querySelector('#weather');

function getTemplatePosition(weatherArr){
    weatherArr.forEach(item=>{
        let template=`
    <li class="wItem">
      <img width=35 src="http://openweathermap.org/img/w/${item.icon}.png" alt="wLogo">
      City: <span id="city">${item.city}</span>
      Temperature: <span id="wTemp">${item.temp}</span>
      Description: <span id="wSpeed">${item.weather}</span>
    </li>
`
        weather.innerHTML='';
        weather.insertAdjacentHTML('beforeend',template)
    })

    return template;
}

async function findWeather(city){
    let token='22aabac47d547543311ceb48dd53dc6c';
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${token}&cnt=1&lang=ru&units=metric`;

    let response = await fetch(url);
    console.log(response);
    if (response.ok){
        let cityResponse = await response.json();
        let weatherList=cityResponse.list.map(item=>{
            let weatherDay={}
            weatherDay.icon=item.weather[0].icon;
            weatherDay.temp=item.main.temp;
            weatherDay.weather=item.weather[0].description;
            weatherDay.speed=item.wind.speed;
            weatherDay.city=cityResponse.city.name;
            return weatherDay;
        })
        getTemplatePosition(weatherList)
    }
}
let timerId=null
inputWeather.addEventListener('input',function(e){
    clearTimeout(timerId)
    timerId=setTimeout(function(){
        let city=e.target.value
        findWeather(city)
    },600)

})
