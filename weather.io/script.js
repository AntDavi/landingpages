const apiKey = "1cc362421b521c966558d66521e0f17f";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cc362421b521c966558d66521e0f17`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cros"
    });

    const respData = await resp.json();
    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = Ktoc(data.main.temp);

    const weather = document.createElement('div')
    weather.classList.add('weather')

    weather.innerHTML = `
        <h2>
        <img src="https://api.openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
        ${temp}ºC
        <img src="https://api.openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
        <h2>
        <small>${data.weather[0].main}</small>
    `;

    main.innerHTML=""
    main.appendChild(weather);
}

function Ktoc(K) {
    return Math.floor(K -273.15);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.ariaValueMax;

    if(city){
        getWeatherByLocation(city)
    }
});