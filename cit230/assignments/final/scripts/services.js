var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = '../data/services.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

..assignments/final/data/services
request.onload = function () {
    var services = request.response;


    var services = services.services[0];


    var services  = services.service;
    document.getElementById("frankName").innerHTML = service;

    var hours  = services.hours;
    document.getElementById("frankMotto").innerHTML = hours;

    var price = services.price;
    document.getElementById("frankYear").innerHTML = price;





    var services = services.services[1];

    var services  = services.service;
    document.getElementById("frankName").innerHTML = service;

    var hours  = services.hours;
    document.getElementById("frankMotto").innerHTML = hours;

    var price = services.price;
    document.getElementById("frankYear").innerHTML = price;



    var services = services.services[2];

    var services  = services.service;
    document.getElementById("frankName").innerHTML = service;

    var hours  = services.hours;
    document.getElementById("frankMotto").innerHTML = hours;

    var price = services.price;
    document.getElementById("frankYear").innerHTML = price;



}
