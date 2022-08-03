import hardHtml from "./main.html";
import "./main.css";
import { fetchCurrentWeather } from "./main";
import { changeImage } from "../Header/header";

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
    .addEventListener("click", validateSearch);
  main
    .querySelector("#search-field")
    .addEventListener("submit", validateSearch);
}

async function validateSearch(e) {
  e.preventDefault();
  disableSearch();
  if (!document.getElementById("search-field").value) {
    window.alert("Search field is empty!");
    enableSearch();
    return;
  }
  let option = true;
  if (document.getElementById("city-input-coordinates").checked) {
    option = false;
  }
  const search = document.getElementById("search-field").value;
  const data = await fetchCurrentWeather(option, search);
  if (data.cod == "404") {
    window.alert("City not found!");
    enableSearch();
    return;
  }
  populateCurrentWeather(data);
  enableSearch();
}

function disableSearch() {
  document.getElementById("search-button").value = "Searching...";
  document.getElementById("search-button").disabled = true;
}

function enableSearch() {
  document.getElementById("search-button").value = "Search";
  document.getElementById("search-button").disabled = false;
}

function populateCurrentWeather(data) {
  document
    .querySelector(".current-weather-container")
    .classList.add("show-container");
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
  if (data.rain) {
    document.getElementById(
      "current-weather-rain/snow"
    ).textContent = `Rain/Snow (last 1h): ${data.rain["1h"]}mm`;
  } else if (data.snow) {
    document.getElementById(
      "current-weather-rain/snow"
    ).textContent = `Rain/Snow (last 1h): ${data.snow["1h"]}mm`;
  } else {
    document.getElementById(
      "current-weather-rain/snow"
    ).textContent = `Rain/Snow (last 1h): none`;
  }
  document.getElementById(
    "current-weather-humidity"
  ).textContent = `Air Humidity: ${data.main.humidity}%`;
  document.getElementById(
    "current-weather-windSpeed"
  ).textContent = `Wind speed: ${data.wind.speed}m/s`;
  changeImage(data);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
