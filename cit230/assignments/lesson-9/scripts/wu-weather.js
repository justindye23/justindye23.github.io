var requestURL = 'https://api.wunderground.com/api/1214f7b6c790d58f/geolookup/conditions/q/MN/Franklin.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
}

//franklin response.version.termsofservice
document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;

var temperature_string = franklinWeather.estimated.temperature_string;
document.getElementById("temperature").innerHTML = temperature_string;

