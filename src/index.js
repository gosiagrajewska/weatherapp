function showCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = input.value;

  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = formatDate();
  city = input.value;

  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  //let city = "Sydney";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response) {
  let currentTemperature = response.data.temperature.current;
  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = `${Math.round(currentTemperature)}`;
}

function formatDate() {
  let now = new Date();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentWeekday = weekDays[now.getDay()];
  let currentMinutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  //return `${currentWeekday}, ${now.getHours()}:${now.getMinutes()}`;
  return `${currentWeekday}, ${now.getHours()}:${currentMinutes}`;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", showCity);
