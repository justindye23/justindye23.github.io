var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var towns = request.response;


    var townName = towns[0].name;
    document.getElementById("townName").innerHTML = "townName";

    var moto = towns[0].moto
    document.getElementById("franklinData").innerHTML = "moto";

    var yearFounded = towns[0].yearFounded
    document.getElementById("franklinData").innerHTML = yearFounded;

    var currentPopulation = towns[0].currentPopulation
    document.getElementById("franklinData").innerHTML = currentPopulation;

    var averageRainfall = towns[0].averageRainfall
    document.getElementById("franklinData").innerHTML = averageRainfall;
}
