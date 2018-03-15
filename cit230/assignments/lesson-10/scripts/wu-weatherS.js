var requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/conditions/q/MN/springfield.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var springfieldWeather = request.response;

    document.getElementById("frankWeather").innerHTML = springfieldWeather.current_observation.weather;

    document.getElementById("frankTemp").innerHTML = springfieldWeather.current_observation.temperature_string;
    document.getElementById("frankWind").innerHTML = springfieldWeather.current_observation.wind_mph;
    document.getElementById("frankIcon").innerHTML = springfieldWeather.current_observation.icon_url;
}
