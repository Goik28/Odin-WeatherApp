(()=>{"use strict";var e={919:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"footer {\n    font-weight: 700;    \n    display: flex;\n    justify-content: center;\n    margin-top: 15px;\n    margin-bottom: 5px;\n    padding-top: 5px;\n    border: solid black 0px;\n    border-top-width: 1px;\n    width: 700px;\n}\n\na:link,\na:visited{\n    color: black;\n}",""]);const c=i},869:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"header {\n  text-align: center;\n  overflow: hidden;\n  height: 300px;\n}\n\nimg {\n  height: 600px;\n  width: 500px;\n  object-fit: contain;\n  object-position: 0 -100px;\n}\n\n.night {\n  background: radial-gradient(\n    ellipse at bottom,\n    rgb(27, 39, 53) 0%,\n    rgb(9, 10, 15) 100%\n  );\n  color: rgb(128, 187, 255);\n}\n\n.day {\n  background: radial-gradient(\n    ellipse at bottom,\n    hsl(229, 100%, 88%) 0%,\n    rgb(99, 172, 255) 100%\n  );\n  color: rgb(27, 39, 53);\n}\n",""]);const c=i},817:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"main {\n  display: flex;\n  flex-direction: column;\n}\n\n.search-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n}\n\n.search-container:first-child {\n  font-size: 1.8rem;\n}\n\n.search-options {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 10px 0;\n}\n\n#city-input-name,\n#city-input-coordinates {\n  height: 20px;\n  width: 20px;\n}\n\n.search-order {\n  display: flex;\n}\n\n#search-field,\n#search-button {\n  flex: 1 1 auto;\n  font-size: 1.5rem;\n  border-radius: 10px;\n  border: 3px solid;\n  background-color: whitesmoke;\n}\n\n#search-field {\n  padding-left: 5px;\n  margin-right: 10px;\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.error-container {\n  padding-top: 20px;\n  display: none;\n  font-size: 1rem;\n  color: red;\n}\n\n#search-button {\n  margin-left: 10px;\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.current-weather-container {\n  display: none;\n  margin: 50px 0;\n  padding: 20px;\n  font-size: 1.5rem;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n}\n\n.show-container {\n  display: block;\n}\n\n.current-weather {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0px solid rgba(255, 255, 255, 0.5);\n  border-top-width: 3px;\n  border-bottom-width: 3px;\n}\n\n.current-weather-container > :first-child {\n  text-align: center;\n}\n\n#current-weather-separator {\n  flex: 0 0 0;\n  width: 1px;\n  border: 0px solid rgba(255, 255, 255, 0.5);\n  border-right-width: 3px;\n}\n\n.weather-credit {\n  font-size: 1.2rem;\n  text-align: center;\n}\n",""]);const c=i},424:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center; \n};",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=a(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),m=n.n(u),p=n(424),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var f=n(919),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var y=n(869),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),t()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const b=n.p+"d5ed43e0a8ffe33fed88.svg",w=n.p+"058a3abdcded4ab4a37f.svg",x=n.p+"002b838f06c090fd108d.svg",E=n.p+"aa8a57fbf72c0bd9a968.svg",I=n.p+"f3bbb5fa67bbb6ed9d05.svg",B=n.p+"683a5065f729d45808e3.svg",C=n.p+"dff3524ef91fbdc8e7f2.svg",S=n.p+"30c5a413ac72ca73538c.svg",L=n.p+"ad3393cfc431a5942b90.svg",k=n.p+"3aa5f6d3c7b9ed7837ce.svg",T=n.p+"b8b0bf1c3cdca0a96461.svg";function Z(e){e?(document.body.classList.add("day"),document.body.classList.remove("night")):(document.body.classList.add("night"),document.body.classList.remove("day"))}var A=n(817),j={};function $(){document.getElementById("city-input-name").checked?(document.getElementById("search-field").value="",document.getElementById("search-field").placeholder="Ex: London"):(document.getElementById("search-field").value="",document.getElementById("search-field").placeholder="Ex: 51.509865, -0.118092")}async function P(e){if(e.preventDefault(),document.getElementById("error-message").textContent="",document.getElementById("error-message").classList.remove("show-container"),document.getElementById("search-button").value="Searching...",document.getElementById("search-button").disabled=!0,!M())return void z();let t=!0;document.getElementById("city-input-coordinates").checked&&(t=!1);const n=document.getElementById("search-field").value;let r;try{r=await async function(e,t){if(e){const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=0bb5b9a7723d59e83a1a0a54dcbf4f70&units=metric`,{mode:"cors"});return await e.json()}{const e=t.split(",")[0].trim(),n=t.split(",")[1].trim(),r=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&APPID=0bb5b9a7723d59e83a1a0a54dcbf4f70&units=metric`,{mode:"cors"});return await r.json()}}(t,n)}catch(e){return q("Couldn't call OpenWeather API"),void z()}if("404"==r.cod)return q("City not found!"),void z();!function(e){document.querySelector(".current-weather-container").classList.add("show-container");const t=(n=e.weather[0].description).charAt(0).toUpperCase()+n.slice(1);var n;document.getElementById("current-weather-location").textContent=`Location found: ${e.name} / ${e.sys.country}`,document.getElementById("current-weather-weather").textContent=`Weather: ${t}`,document.getElementById("current-weather-currentTemp").textContent=`Current Temp: ${e.main.temp} C°`,document.getElementById("current-weather-feelsLike").textContent=`Feels like: ${e.main.feels_like} C°`,e.rain?document.getElementById("current-weather-rain/snow").textContent=`Rain/Snow (last 1h): ${e.rain["1h"]}mm`:e.snow?document.getElementById("current-weather-rain/snow").textContent=`Rain/Snow (last 1h): ${e.snow["1h"]}mm`:document.getElementById("current-weather-rain/snow").textContent="Rain/Snow (last 1h): none",document.getElementById("current-weather-humidity").textContent=`Air Humidity: ${e.main.humidity}%`,document.getElementById("current-weather-windSpeed").textContent=`Wind speed: ${e.wind.speed}m/s`,function(e){switch(e.weather[0].main){case"Clear":document.body.classList.contains("day")?document.getElementById("theme-image").src=b:document.getElementById("theme-image").src=w;break;case"Thunderstorm":document.body.classList.contains("day")?document.getElementById("theme-image").src=C:document.getElementById("theme-image").src=S;break;case"Rain":document.body.classList.contains("day")?document.getElementById("theme-image").src=I:document.getElementById("theme-image").src=B;break;case"Snow":document.getElementById("theme-image").src=k;break;case"Clouds":document.body.classList.contains("day")?document.getElementById("theme-image").src=x:document.getElementById("theme-image").src=E;break;case"Drizzle":case"Mist":case"Fog":document.getElementById("theme-image").src=L;break;default:document.getElementById("theme-image").src=T}}(e)}(r),z()}function M(){return 0==document.getElementById("search-field").value.length?(document.getElementById("error-message").textContent="This field cannot be empty!",document.getElementById("error-message").classList.add("show-container"),!1):(document.getElementById("error-message").textContent="",document.getElementById("error-message").classList.remove("show-container"),!0)}function q(e){document.getElementById("error-message").textContent=e,document.getElementById("error-message").classList.add("show-container")}function z(){document.getElementById("search-button").value="Search",document.getElementById("search-button").disabled=!1}j.styleTagTransform=m(),j.setAttributes=d(),j.insert=i().bind(null,"head"),j.domAPI=a(),j.insertStyleElement=l(),t()(A.Z,j),A.Z&&A.Z.locals&&A.Z.locals,document.body.appendChild(function(){const e=document.createElement("header"),t=new Image;return t.id="theme-image",t.src=function(){const e=(new Date).getHours();return 6<=e&&e<=18?(Z(!0),b):(Z(!1),w)}(),e.appendChild(t),e}()),document.body.appendChild(function(){const e=document.createElement("main");return e.innerHTML='<div class="search-container"> <div>Search for a city to know the current weather. Use:</div> <form class="search-form" action="" novalidate> <div class="search-options"> <div><input type="radio" name="city-input-type" id="city-input-name" value="Name" checked="checked"/> <label for="city-input-name">Name</label> </div> <div><input type="radio" name="city-input-type" id="city-input-coordinates" value="Coordinates"/> <label for="city-input-coordinates">Coordinates</label> </div> </div> <div class="search-order"> <input type="text" name="city-input" id="search-field" placeholder="Ex: London" required/> <input type="submit" value="Search" id="search-button"/> </div> </form> <div class="error-container" id="error-message"></div> </div> <div class="current-weather-container"> <div id="current-weather-location">Local found: </div> <div class="current-weather"> <div> <div id="current-weather-weather">Weather</div> <div id="current-weather-currentTemp">Current Temp</div> <div id="current-weather-feelsLike">Feels like</div> </div> <div id="current-weather-separator"></div> <div> <div id="current-weather-rain/snow">Rain/Snow (last 1h): none</div> <div id="current-weather-humidity">Humidity</div> <div id="current-weather-windSpeed">Wind speed</div> </div> </div> <div class="weather-credit">Weather data from <a href="https://openweathermap.org/">OpenWeather</a></div> </div>',function(e){e.querySelector("#city-input-name").addEventListener("change",$),e.querySelector("#city-input-coordinates").addEventListener("change",$),e.querySelector(".search-form").addEventListener("submit",P),e.querySelector("#search-field").addEventListener("input",M),e.querySelector("#search-field").addEventListener("focus",M)}(e),e}()),document.body.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("div");return t.innerHTML='Created by<a href="https://github.com/Goik28"> Goik28 </a>for the WeatherApp project on The Odin Project course',e.appendChild(t),e}())})()})();