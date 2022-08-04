import { getAPiKey } from "../../api_key";

export async function fetchCurrentWeather(option, arg) {
  if (option) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${arg}&APPID=${getAPiKey()}&units=metric`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    return data;
  } else {
    const lat = arg.split(",")[0].trim();
    const lon = arg.split(",")[1].trim();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${getAPiKey()}&units=metric`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    return data;
  }
}
