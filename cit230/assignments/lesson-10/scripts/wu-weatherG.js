var requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/conditions/q/MN/Greenville.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var greenvilleWeather = request.response;

    document.getElementById("greenWeather").innerHTML = greenvilleWeather.current_observation.weather;

    document.getElementById("greenTemp").innerHTML = greenvilleWeather.current_observation.temperature_string;
    document.getElementById("greenWind").innerHTML = greenvilleWeather.current_observation.wind_mph;
    document.getElementById("greenIcon").src = greenvilleWeather.current_observation.icon_url;


    requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/forecast/q/MN/Greenville.json';

    request.open('GET', requestURL);
    request.send();

    request.onload = function () {
        var greenvilleForecast = request.response;

        greenvilleText = greenvilleForecast.forecast.txt_forecast.forecastday[0].fcttext;
        document.getElementById("greenForecast").innerHTML = greenvilleTextText;
    }

}

