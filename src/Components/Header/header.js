import "./header.css";
import dayIcon from "../Icons/wi_clear-day.svg";
import nightIcon from "../Icons/wi_clear-night.svg";
import dayCloudyIcon from "../Icons/wi_partly-cloudy-day.svg";
import nightCloudyIcon from "../Icons/wi_partly-cloudy-night.svg";
import dayRainIcon from "../Icons/wi_partly-cloudy-day-rain.svg";
import nightRainIcon from "../Icons/wi_partly-cloudy-night-rain.svg";
import dayThunderIcon from "../Icons/wi_thunderstorms-day-rain.svg";
import nightThunderIcon from "../Icons/wi_thunderstorms-night-rain.svg";
import fogIcon from "../Icons/wi_fog.svg";
import snowflakeIcon from "../Icons/wi_snowflake.svg";
import notAvailableIcon from "../Icons/wi_not-available.svg";

export function createHeader() {
  const header = document.createElement("header");
  const mainWeather = new Image();
  mainWeather.id = "theme-image";
  mainWeather.src = setThemeImage();
  header.appendChild(mainWeather);
  return header;
}

function setThemeImage() {
  const day = new Date();
  const currentHour = day.getHours();
  if (6 <= currentHour && currentHour <= 18) {
    setTheme(true);
    return dayIcon;
  } else {
    setTheme(false);
    return nightIcon;
  }
}

function setTheme(day) {
  if (day) {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  } else {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  }
}

export function changeImage(data) {
  switch (data.weather["0"].main) {
    case "Clear":
      if (document.body.classList.contains("day")) {
        document.getElementById("theme-image").src = dayIcon;
      } else {
        document.getElementById("theme-image").src = nightIcon;
      }
      break;
    case "Thunderstorm":
      if (document.body.classList.contains("day")) {
        document.getElementById("theme-image").src = dayThunderIcon;
      } else {
        document.getElementById("theme-image").src = nightThunderIcon;
      }
      break;
    case "Rain":
      if (document.body.classList.contains("day")) {
        document.getElementById("theme-image").src = dayRainIcon;
      } else {
        document.getElementById("theme-image").src = nightRainIcon;
      }
      break;
    case "Snow":
      document.getElementById("theme-image").src = snowflakeIcon;
      break;
    case "Clouds":
      if (document.body.classList.contains("day")) {
        document.getElementById("theme-image").src = dayCloudyIcon;
      } else {
        document.getElementById("theme-image").src = nightCloudyIcon;
      }
      break;
    case "Drizzle":
      document.getElementById("theme-image").src = fogIcon;
      break;
    case "Mist":
      document.getElementById("theme-image").src = fogIcon;
      break;
    case "Fog":
      document.getElementById("theme-image").src = fogIcon;
      break;
    default:
      document.getElementById("theme-image").src = notAvailableIcon;
      break;
  }
}
