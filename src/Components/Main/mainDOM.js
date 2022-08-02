import hardHtml from "./main.html";
import "./main.css";
import { fetchCurrentWeather, fetchFutureWeather } from "./main";

export function createMain() {
  const main = document.createElement("main");
  main.innerHTML = hardHtml;
  setEventListeners(main);
  return main;
}

function changePlaceholder() {
  if (document.getElementById("city-input-name").checked) {
    document.getElementById("search-field").value = "";
    document.getElementById("search-field").placeholder = "Ex: London";
  } else {
    document.getElementById("search-field").value = "";
    document.getElementById("search-field").placeholder =
      "Ex: 51.509865, -0.118092";
  }
}

function setEventListeners(main) {
  main
    .querySelector("#city-input-name")
    .addEventListener("change", changePlaceholder);
  main
    .querySelector("#city-input-coordinates")
    .addEventListener("change", changePlaceholder);
  main
    .querySelector("#search-button")
    .addEventListener("click", populateCurrentWeather);
  main
    .querySelector("#search-field")
    .addEventListener("submit", populateCurrentWeather);
  main
    .querySelector("#search-button")
    .addEventListener("click", populateFutureWeather);
  main
    .querySelector("#search-field")
    .addEventListener("submit", populateFutureWeather);
}

async function populateCurrentWeather(e) {
  e.preventDefault();
  let option = true;
  if (document.getElementById("city-input-coordinates").checked) {
    option = false;
  }
  const search = document.getElementById("search-field").value;
  const data = await fetchCurrentWeather(option, search);
  const weather = capitalizeFirstLetter(data.weather["0"].description);
  document.getElementById(
    "current-weather-location"
  ).textContent = `Location found: ${data.name} / ${data.sys.country}`;
  document.getElementById(
    "current-weather-weather"
  ).textContent = `Weather: ${weather}`;
  document.getElementById(
    "current-weather-currentTemp"
  ).textContent = `Current Temp: ${data.main.temp} C°`;
  document.getElementById(
    "current-weather-feelsLike"
  ).textContent = `Feels like: ${data.main.feels_like} C°`;
  if (data["rain.3h"]) {
    document.getElementById(
      "current-weather-rain/snow"
    ).textContent = `Rain/Snow (last 3h): ${data["rain.3h"]}mm`;
  }
  if (data["snow.3h"]) {
    document.getElementById(
      "current-weather-rain/snow"
    ).textContent = `Rain/Snow (last 3h): ${data["snow.3h"]}mm`;
  }
  document.getElementById(
    "current-weather-humidity"
  ).textContent = `Air Humidity: ${data.main.humidity}%`;
  document.getElementById(
    "current-weather-windSpeed"
  ).textContent = `Wind speed: ${data.wind.speed}m/s`;
}

async function populateFutureWeather(e) {
    e.preventDefault();
    let option = true;
    if (document.getElementById("city-input-coordinates").checked) {
      option = false;
    }
    const search = document.getElementById("search-field").value;
    const data = await fetchFutureWeather(option, search);
    console.log(data);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
