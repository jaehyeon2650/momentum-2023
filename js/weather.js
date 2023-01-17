function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const APIKEY = "65b1b63c1850823075c17cbbe7300e66";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const location = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        location.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })
}
function fail() {
    alert("fail!! you can't get weather");
}
navigator.geolocation.getCurrentPosition(success, fail);