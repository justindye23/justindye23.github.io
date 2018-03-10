var requestURL = 'http://api.wunderground.com/api/1214f7b6c790d58f/geolookup/conditions/q/MN/Franklin.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

franklin response.version.termsofservice
var weather = franklin.currentobservation.temperature_string;

document.getElementById("weather").innerHTML = weather;