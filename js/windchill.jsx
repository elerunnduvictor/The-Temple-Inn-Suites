/*  Weather Code with API to use starting 3/9/2022  */

/*
Idaho (Inland Valley) Area  Weather Info for API

{
    "name": "Idaho",
    "state": "ID",
    "country": "US",
    "coord": {
        "lon": -116.203453,
        "lat": 43.613499
    }
*/

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5586437&appid=e681baa04b7db3d01b4b4bb6cfe8420a&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const temp = document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(1);

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        const winspeed = jsObject.wind.speed;
        const humid = jsObject.main.humidity;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#speed').textContent = winspeed;
        document.querySelector('#humidity').textContent = humid;
        let winchill = "";

        if (temp <= 50 && winspeed > 3) {
            winchill = windchill(temp, winspeed);
            winchill = `${winchill}&deg;F`;
        } else {
            winchill = "N/A";
        }

        document.querySelector("#windchill").innerHTML = winchill;

        function windchill(temp, winspeed) {
            windchill = (35.74 + 0.6215 * temp - 35.75 * Math.pow(winspeed, 0.16) + 0.4275 * temp * Math.pow(winspeed, 0.16));
            return windchill.toFixed(1);
        }
    });
//   let t = parseFloat(document.querySelector("#temp").textContent);
//   let w = parseFloat(document.querySelector("#speed").textContent);
//   let temp = t;//parseFloat(document.querySelector("#temp").textContent);
//   let winspeed = w;//parseFloat(document.querySelector("#speed").textContent);

/* This code will grab input from the user for the current temperature and the wind speed. It will then calculate the wind chill.*/

/* Use this code for input in the future. Might need testing first.*/
/*
    let temp = document.getElementById('tempinput').value;
    let winspeed = document.getElementById('windinput').value;

function tempinput(){
    winchill = windchill(temp,winspeed);
    document.getElementById('finaltemp').innerHTML = winchill;
}

function windchill(temp, winspeed){
    windchill = (35.74 + 0.6215 * temp - 35.75 * Math.pow(winspeed, 0.16) + 0.4275 * temp * Math.pow(winspeed, 0.16));
    return windchill.toFixed(2);
}*/

/*
Weather JS Code prior to 3/9/2022 - IF

var temp = 57;
var winspeed = 15;
var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(winspeed, 0.16)) + (0.4275 * temp * Math.pow(winspeed, 0.16));

var windchill = Math.round(windchill);
document.getElementById("windchill").innerHTML = windchill;
*/