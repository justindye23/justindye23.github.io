var t = 50;
var s = 10;
var f = getWindChillFactor(t,s);

document.getElementById("windSpeed").innerHTML = s;
document.getElementById("temp").innerHTML = t;
document.getElementById("windChillFactor").innerHTML = f;

console.log(f);


function getWindChillFactor(t,s)
{

    var f = 35.74 + 0.6215 * t - 35.75 s * Math.pow(Math.pow, .16) + 0.4275 t  s * Math.pow(Math.pow, .16)
    return f;

}


