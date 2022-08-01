import hardHtml from "./main.html";
import "./main.css";

export function createMain(){
const main = document.createElement("main");
main.innerHTML = hardHtml;


return main;
}