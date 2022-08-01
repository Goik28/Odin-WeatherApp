document.getElementById("get-weather").addEventListener("click", fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  let cityName = document.getElementById("city-name").value;
  const resultDOM = document.getElementById("result");
  document.getElementById("get-weather").textContent = "searching...";
  document.getElementById("get-weather").disabled = true;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=units=metric`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request denied");
      }
    })
    .then((data) => {
      const weather = capitalizeFirstLetter(
        data["weather"]["0"]["description"]
      );
      resultDOM.textContent = `Location found: ${data["name"]} / ${data["sys"]["country"]}.\n
      Weather Description: ${weather}.\n
      Current Temp: ${data["main"]["temp"]} C°.\n
      Min Temp: ${data["main"]["temp_min"]} C°.\n
      Max Temp: ${data["main"]["temp_max"]} C°.\n
      Air Humidity: ${data["main"]["humidity"]}%`;
      document.getElementById("get-weather").textContent = "Search";
      document.getElementById("get-weather").disabled = false;    })
    .catch((err) => {
      resultDOM.textContent = err;
      document.getElementById("get-weather").textContent = "Search";
      document.getElementById("get-weather").disabled = false;
    });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}