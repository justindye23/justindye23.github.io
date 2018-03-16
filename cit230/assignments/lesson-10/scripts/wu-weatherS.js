var requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/conditions/q/MN/Springfield.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var franklinWeather = request.response;

    document.getElementById("springWeather").innerHTML = franklinWeather.current_observation.weather;

    document.getElementById("springTemp").innerHTML = franklinWeather.current_observation.temperature_string;
    document.getElementById("springWind").innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById("springIcon").src = franklinWeather.current_observation.icon_url;


    requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/forecast/q/MN/Springfield.json';

    request.open('GET', requestURL);
    request.send();

    request.onload = function () {
        var springfieldForecast = request.response;

        springText = springfieldForecast.forecast.txt_forecast.forecastday[0].fcttext;
        document.getElementById("springForecast").innerHTML = springText;
    }

}

