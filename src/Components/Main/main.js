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
      console.error(error);
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
      console.error(error);
    }
  }
}

export async function fetchFutureWeather(option, arg) {
    if (option) {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${arg}&appid=${getAPiKey()}&units=metric&mode=daily`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    } else {
      const lat = arg.split(",")[0].trim();
      const lon = arg.split(",")[1].trim();
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon${lon}&appid=${getAPiKey()}&units=metric`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  }

