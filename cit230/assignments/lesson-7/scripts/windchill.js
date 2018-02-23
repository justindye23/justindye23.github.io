var t = 50;
var s = 10;
var f = getWindChillFactor(t,s);

document.getElementById('windSpeed').innerHTML = s;
document.getElementById("temp").innerHTML = t;
document.getElementById("wind").innerHTML = f;

console.log(f);


function getWindChillFactor(t,s)
{
    return 110;

    //f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
    //return f;

}

//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
