import "./index.css";
import { createFooter } from "./Components/Footer/footer";
import { createHeader } from "./Components/Header/header";
import { createMain } from "./Components/Main/mainDOM";

document.body.appendChild(createHeader());
document.body.appendChild(createMain());
document.body.appendChild(createFooter());
