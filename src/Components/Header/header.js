import "./header.css";
import dayIcon from "../Icons/wi_clear-day.svg";
import nightIcon from "../Icons/wi_clear-night.svg";

export function createHeader() {
  const header = document.createElement("header");
  const mainWeather = new Image();
  mainWeather.src = setThemeImage();
  header.appendChild(mainWeather);
  return header;
}

function setThemeImage() {
  const day = new Date();
  const currentHour = day.getHours();
  if (6 <= currentHour <= 18) {
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
