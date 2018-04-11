var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

../data/services
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

    var springfield = towns.towns[3];

    var townName = springfield.name;
    document.getElementById("springName").innerHTML = townName;

    var motto = springfield.motto
    document.getElementById("springMotto").innerHTML = motto;

    var yearFounded = springfield.yearFounded
    document.getElementById("springYear").innerHTML = yearFounded;

    var currentPopulation = springfield.currentPopulation
    document.getElementById("springPopulation").innerHTML = currentPopulation;

    var averageRainfall = springfield.averageRainfall
    document.getElementById("springRain").innerHTML = averageRainfall;
}
