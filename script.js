var searchButton = document.getElementById("search-button");
var cityInput = document.querySelector("#city-input").value;
var currentWeatherList = document.getElementById("weather-list");

function clearCurrentWeather() {
  currentWeatherList.textContent = "";
}

function getInput(event) {
  event.preventDefault();
  var cityInput = document.getElementById("city-input").value;
  console.log(cityInput);
  clearCurrentWeather();
  getApi(cityInput);
  console.log(pic);
}

function getApi(city) {
  console.log(city);
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=efce59023ac17e5d9f64c63306a72223`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetch Response \n-------------");
      console.log(data);
      console.log(currentWeatherList);
      console.log(data.main.temp);

      var cityName = document.createElement("li");
      var temp = document.createElement("li");
      var wind = document.createElement("li");
      var humidity = document.createElement("li");

      cityName.textContent = data.name;
      temp.textContent = "Temperature: " + data.main.temp + " °F";
      wind.textContent = "Wind Speed: " + data.wind.speed + " mph";
      humidity.textContent = "Humidity: " + data.main.humidity + " %";

      currentWeatherList.appendChild(cityName);
      currentWeatherList.appendChild(temp);
      currentWeatherList.appendChild(wind);
      currentWeatherList.appendChild(humidity);

      cityLat.push(data.coord.lat);
      cityLon.push(data.coord.lon);
    });
}

let cityLat = [];

var cityLon = [];

let pic = cityLat.pop();

function getFiveDay(lat, lon) {
  var requestFiveDay = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=f58e0adad5d2bd441a1a32ca9f7c08a4`;

  fetch(requestFiveDay)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetch Response \n-------------");
      console.log(data);
    });
}

searchButton.addEventListener("click", getInput);
