import hardHtml from "./main.html";
import "./main.css";

export function createMain() {
  const main = document.createElement("main");
  main.innerHTML = hardHtml;
  main.querySelector("#city-input-name").addEventListener("change",changePlaceholder);
  main.querySelector("#city-input-coordinates").addEventListener("change",changePlaceholder);
  return main;
}

function changePlaceholder() {
    if (document.getElementById("city-input-name").checked) {
        document.getElementById("search-field").value = "";
        document.getElementById("search-field").placeholder = "Ex: London";
    } else {
        document.getElementById("search-field").value = "";
        document.getElementById("search-field").placeholder = "Ex: 51.509865, -0.118092";    
    }
    
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
