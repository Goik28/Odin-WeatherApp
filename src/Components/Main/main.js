import { getAPiKey } from "../../api_key";

export async function fetchCurrentWeather(option, arg) {
  if (option) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${arg}&APPID=${getAPiKey()}&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      window.alert("Couldn't call OpenWeather API");
    }
  } else {
    const lat = arg.split(",")[0].trim();
    const lon = arg.split(",")[1].trim();
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${getAPiKey()}&units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
        window.alert("Couldn't call OpenWeather API");
    }
  }
}