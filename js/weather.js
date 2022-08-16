function getDayName(day) {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";
    }
}

function getDay(today, addition) {
    const day = today + addition;
    if (day > 6) {
        if (addition === 1) {
            return 0;
        } else {
            return 6 * 0 + (addition - 1);
        }
    } else {
        return day;
    }
}

function today() {
    const date = new Date();
    const today = date.getDay();
    const month = date.getMonth();
    const todaysDate = date.getDate();

    const inTwoDays = getDayName(getDay(today, 2));
    const inThreedays = getDayName(getDay(today, 3));
    let monthName;

    switch (month) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
    }

    return [todaysDate, monthName, inTwoDays, inThreedays];
}

const apiURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=5.0333&lon=7.9266&units=metric&appid=1da99388e86d2e97825559d74b18e860";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const [todaysDate, monthName, inTwoDays, inThreedays] = today();

        //today
        const todaysTemp = Math.round(jsObject.current.temp);
        const todaysHum = Math.round(jsObject.current.humidity);
        const desc = jsObject.current.weather[0].description;

        document.querySelector(".current-temp").textContent = `${todaysTemp}°c`;
        document.querySelector(".todays-hum").textContent = todaysHum;
        document.querySelector(".todays-desc").textContent = desc;
        document.querySelector(".current-date").textContent = `${todaysDate}th`;
        document.querySelector(".current-month").textContent = monthName;

        //Tomorrow
        const tomorrowsTemp = Math.round(jsObject.daily[0].temp.day);
        const tomorrowsHum = Math.round(jsObject.daily[0].humidity);
        const tomorrowsDesc = jsObject.daily[0].weather[0].description;

        document.querySelector(
            ".tomorrows-temp"
        ).textContent = `${tomorrowsTemp}°c`;
        document.querySelector(".tomorrows-hum").textContent = tomorrowsHum;
        document.querySelector(".tomorrows-desc").textContent = tomorrowsDesc;

        //In 2 days
        const inTwoDaysTemp = Math.round(jsObject.daily[1].temp.day);
        const inTwoDaysHum = Math.round(jsObject.daily[1].humidity);
        const inTwoDaysDesc = jsObject.daily[1].weather[0].description;

        document.querySelector(".in-two-days-name").textContent = inTwoDays;
        document.querySelector(
            ".in-two-days-temp"
        ).textContent = `${inTwoDaysTemp}°c`;
        document.querySelector(".in-two-days-hum").textContent = inTwoDaysHum;
        document.querySelector(".in-two-days-desc").textContent = inTwoDaysDesc;

        //In 3 Days
        const inThreeDaysTemp = Math.round(jsObject.daily[2].temp.day);
        const inThreeDaysHum = Math.round(jsObject.daily[2].humidity);
        const inThreeDaysDesc = jsObject.daily[2].weather[0].description;

        document.querySelector(".in-three-days-name").textContent = inThreedays;
        document.querySelector(
            ".in-three-days-temp"
        ).textContent = `${inThreeDaysTemp}°c`;
        document.querySelector(".in-three-days-hum").textContent = inThreeDaysHum;
        document.querySelector(".in-three-days-desc").textContent = inThreeDaysDesc;
    });