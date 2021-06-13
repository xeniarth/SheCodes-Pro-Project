function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#city-search-input").value;
  search(input);
}

function search(input) {
  let apiKey = "e93661b3ab177c374da4a62247b4b062";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displaySearchedCityTemp);
}

search("Zurich");

function formatDate(timestamp) {
  let now = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  document.querySelector(
    "#date-today"
  ).innerHTML = `${day}, ${date}. ${month} ${year}`;
  document.querySelector(
    "#time-now"
  ).innerHTML = `Last updated: ${hours}:${minutes}`;

  document.querySelector("#day-f1").innerHTML = days[now.getDay() + 1];
  document.querySelector("#day-f2").innerHTML = days[now.getDay() + 2];
  document.querySelector("#day-f3").innerHTML = days[now.getDay() + 3];
  document.querySelector("#day-f4").innerHTML = days[now.getDay() + 4];
  document.querySelector("#day-f5").innerHTML = days[now.getDay() + 5];
}

function displayForecast(response) {
  let minTempF1 = Math.round(response.data.daily[0].temp.min);
  let maxTempF1 = Math.round(response.data.daily[0].temp.max);
  let humidityF1 = response.data.daily[0].humidity;
  let windspeedF1 = Math.round(response.data.daily[0].wind_speed);
  let iconF1 = response.data.daily[0].weather[0].icon;
  let descriptionF1 = response.data.daily[0].weather[0].description;
  document.querySelector("#temp-f1").innerHTML = `${minTempF1}°/${maxTempF1}°`;
  document.querySelector("#hum-f1").innerHTML = `${humidityF1}%`;
  document.querySelector("#wind-f1").innerHTML = `${windspeedF1} km/h`;
  document
    .querySelector("#icon-f1")
    .setAttribute("src", `http://openweathermap.org/img/wn/${iconF1}@2x.png`);
  document.querySelector("#icon-f1").setAttribute("alt", `${descriptionF1}`);

  let minTempF2 = Math.round(response.data.daily[1].temp.min);
  let maxTempF2 = Math.round(response.data.daily[1].temp.max);
  let humidityF2 = response.data.daily[1].humidity;
  let windspeedF2 = Math.round(response.data.daily[1].wind_speed);
  let iconF2 = response.data.daily[1].weather[0].icon;
  let descriptionF2 = response.data.daily[1].weather[0].description;
  document.querySelector("#temp-f2").innerHTML = `${minTempF2}°/${maxTempF2}°`;
  document.querySelector("#hum-f2").innerHTML = `${humidityF2}%`;
  document.querySelector("#wind-f2").innerHTML = `${windspeedF2} km/h`;
  document
    .querySelector("#icon-f2")
    .setAttribute("src", `http://openweathermap.org/img/wn/${iconF2}@2x.png`);
  document.querySelector("#icon-f2").setAttribute("alt", `${descriptionF2}`);

  let minTempF3 = Math.round(response.data.daily[2].temp.min);
  let maxTempF3 = Math.round(response.data.daily[2].temp.max);
  let humidityF3 = response.data.daily[2].humidity;
  let windspeedF3 = Math.round(response.data.daily[2].wind_speed);
  let iconF3 = response.data.daily[2].weather[0].icon;
  let descriptionF3 = response.data.daily[2].weather[0].description;
  document.querySelector("#temp-f3").innerHTML = `${minTempF3}°/${maxTempF3}°`;
  document.querySelector("#hum-f3").innerHTML = `${humidityF3}%`;
  document.querySelector("#wind-f3").innerHTML = `${windspeedF3} km/h`;
  document
    .querySelector("#icon-f3")
    .setAttribute("src", `http://openweathermap.org/img/wn/${iconF3}@2x.png`);
  document.querySelector("#icon-f3").setAttribute("alt", `${descriptionF3}`);

  let minTempF4 = Math.round(response.data.daily[3].temp.min);
  let maxTempF4 = Math.round(response.data.daily[3].temp.max);
  let humidityF4 = response.data.daily[3].humidity;
  let windspeedF4 = Math.round(response.data.daily[3].wind_speed);
  let iconF4 = response.data.daily[3].weather[0].icon;
  let descriptionF4 = response.data.daily[3].weather[0].description;
  document.querySelector("#temp-f4").innerHTML = `${minTempF4}°/${maxTempF4}°`;
  document.querySelector("#hum-f4").innerHTML = `${humidityF4}%`;
  document.querySelector("#wind-f4").innerHTML = `${windspeedF4} km/h`;
  document
    .querySelector("#icon-f4")
    .setAttribute("src", `http://openweathermap.org/img/wn/${iconF4}@2x.png`);
  document.querySelector("#icon-f4").setAttribute("alt", `${descriptionF4}`);

  let minTempF5 = Math.round(response.data.daily[4].temp.min);
  let maxTempF5 = Math.round(response.data.daily[4].temp.max);
  let humidityF5 = response.data.daily[4].humidity;
  let windspeedF5 = Math.round(response.data.daily[4].wind_speed);
  let iconF5 = response.data.daily[4].weather[0].icon;
  let descriptionF5 = response.data.daily[4].weather[0].description;
  document.querySelector("#temp-f5").innerHTML = `${minTempF5}°/${maxTempF5}°`;
  document.querySelector("#hum-f5").innerHTML = `${humidityF5}%`;
  document.querySelector("#wind-f5").innerHTML = `${windspeedF5} km/h`;
  document
    .querySelector("#icon-f5")
    .setAttribute("src", `http://openweathermap.org/img/wn/${iconF5}@2x.png`);
  document.querySelector("#icon-f5").setAttribute("alt", `${descriptionF5}`);
}

function getForecast(coordinates) {
  let apiKey = "e93661b3ab177c374da4a62247b4b062";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displaySearchedCityTemp(response) {
  let location = response.data.name;
  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  let humidity = response.data.main.humidity;
  let windspeed = Math.round(response.data.wind.speed);
  let date = formatDate(response.data.dt * 1000);
  let icon = response.data.weather[0].icon;
  let description = response.data.weather[0].description;
  document.querySelector("h1").innerHTML = location;
  document.querySelector("#min-temp").innerHTML = `${minTemp}`;
  document.querySelector("#max-temp").innerHTML = `${maxTemp}`;
  document.querySelector("#description").innerHTML = `${description}`;
  document.querySelector("#current-humidity").innerHTML = `${humidity}%`;
  document.querySelector("#current-wind").innerHTML = `${windspeed} km/h`;
  document.querySelector("#date-today");
  innerHTML = date;
  document
    .querySelector("#weather-icon")
    .setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
  document.querySelector("#weather-icon").setAttribute("alt", `${description}`);

  getForecast(response.data.coord);
}

let cityInput = document.querySelector("#city-search-form");
cityInput.addEventListener("submit", handleSubmit);

function locateCity(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "e93661b3ab177c374da4a62247b4b062";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displaySearchedCityTemp);
}

function callLocateCity(response) {
  navigator.geolocation.getCurrentPosition(locateCity);
}

let locationCheck = document.querySelector("#check-location");
locationCheck.addEventListener("click", callLocateCity);
