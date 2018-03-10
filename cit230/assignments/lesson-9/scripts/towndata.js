var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var towns = request.response;


//var towns = {};
var townName = towns[0].name;
document.getElementById("franklinData").innerHTML=townName;
}
