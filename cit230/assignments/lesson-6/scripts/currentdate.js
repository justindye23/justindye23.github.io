var currentDate = new Date();

// get day of week

var dayOfWeek = new Array(7);
dayOfWeek[0] = "Sunday";
dayOfWeek[1] = "Monday";
dayOfWeek[2] = "Tuesday";
dayOfWeek[3] = "Wednesday";
dayOfWeek[4] = "Thursday";
dayOfWeek[5] = "Friday";
dayOfWeek[6] = "Saturday";

var dayOfWeekNumber = currentDate.getDay();

var dayOfWeekString = dayOfWeek[dayOfWeekNumber];

var dayOfMonth = currentDate.getDate();
//get month
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var monthString = month[currentDate.getMonth()];
//document.getElementById("demo").innerHTML = n;

// Current Year
var year = currentDate.getFullYear();

var currentDateString = dayOfWeekString + ", " + dayOfMonth + " " + monthString + " " +
year;

document.getElementById("currentdate").innerHTML = currentDateString;
