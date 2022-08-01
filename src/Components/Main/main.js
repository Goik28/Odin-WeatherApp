import { getAPiKey } from "../../api_key";

document.getElementById("get-weather").addEventListener("click", fetchWeather);

async function fetchWeather(option, arg) {
  if (option) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${arg}&APPID=${getAPiKey()}units=metric`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  } else {
    const lat = arg.split(",")[0].trim();
    const lon = arg.split(",")[1].trim();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${getAPiKey()}units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("City not found");
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
