var requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/conditions/q/MN/Franklin.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var franklinWeather = request.response;

    //franklin response.version.termsofservice
    document.getElementById("frankWeather").innerHTML = franklinWeather.current_observation.weather;

    document.getElementById("frankTemp").innerHTML = franklinWeather.current_observation.temperature_string;
    document.getElementById("frankWind").innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById("frankIcon").innerHTML = franklinWeather.current_observation.icon_url;
}



