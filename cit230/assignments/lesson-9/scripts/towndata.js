var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var towns = request.response;


    var franklin = towns.towns[0];


    var townName = franklin.name;
    document.getElementById("frankName").innerHTML = townName;

    var motto = franklin.motto;
    document.getElementById("frankMotto").innerHTML = motto;

    var yearFounded = franklin.yearFounded
    document.getElementById("frankYear").innerHTML = yearFounded;

    var currentPopulation = franklin.currentPopulation
    document.getElementById("frankPopulation").innerHTML = currentPopulation;

    var averageRainfall = franklin.averageRainfall
    document.getElementById("frankRain").innerHTML = averageRainfall;


    var greenville = towns.towns[1];

    var townName = greenville.name;
    document.getElementById("greenName").innerHTML = townName;

    var motto = greenville.motto;
    document.getElementById("greenMotto").innerHTML = motto;

    var yearFounded = greenville.yearFounded
    document.getElementById("greenYear").innerHTML = yearFounded;

    var currentPopulation = greenville.currentPopulation
    document.getElementById("greenPopulation").innerHTML = currentPopulation;

    var averageRainfall = greenville.averageRainfall
    document.getElementById("greenRain").innerHTML = averageRainfall;

    var townName = towns[3].name;
    document.getElementById("springfieldData").innerHTML += "townName";

    var moto = towns[3].moto
    document.getElementById("springfieldData").innerHTML += "moto";

    var yearFounded = towns[3].yearFounded
    document.getElementById("springfieldData").innerHTML += "yearFounded";

    var currentPopulation = towns[3].currentPopulation
    document.getElementById("springfieldData").innerHTML += "currentPopulation";

    var averageRainfall = towns[3].averageRainfall
    document.getElementById("springfieldData").innerHTML += "averageRainfall";
}
