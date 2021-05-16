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

function displaySearchedCityTemp(response) {
  let location = response.data.name;
  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  let humidity = response.data.main.humidity;
  let windspeed = Math.round(response.data.wind.speed);
  document.querySelector("h1").innerHTML = location;
  document.querySelector("#min-temp").innerHTML = `${minTemp}`;
  document.querySelector("#max-temp").innerHTML = `${maxTemp}`;
  document.querySelector("#current-humidity").innerHTML = `${humidity}%`;
  document.querySelector("#current-wind").innerHTML = `${windspeed} km/h`;
}

let cityInput = document.querySelector("#city-search-form");
cityInput.addEventListener("submit", handleSubmit);

function displayCurrentDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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
    "December"
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  document.querySelector(
    "#date-today"
  ).innerHTML = `${day}, ${date}. ${month} ${year}`;
}
displayCurrentDate();

function showCelsiusTemp(event) {
  event.preventDefault();
  unitConversion("metric");
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  unitConversion("imperial");
}

function displayConvTemp(response) {
  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  document.querySelector("#min-temp").innerHTML = `${minTemp}`;
  document.querySelector("#max-temp").innerHTML = `${maxTemp}`;
}

function unitConversion(unit) {
  let input = document.getElementById("header").textContent;
  let apiKey = "e93661b3ab177c374da4a62247b4b062";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayConvTemp);
}

let celsiusTemp = document.querySelector("#celsius-link");
celsiusTemp.addEventListener("click", showCelsiusTemp);
let fahrenheitTemp = document.querySelector("#fahrenheit-link");
fahrenheitTemp.addEventListener("click", showFahrenheitTemp);

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
