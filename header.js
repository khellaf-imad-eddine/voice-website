let fullTime = new Date();
let time = new Date().getHours();
let day = new Date().getDay();
let year = new Date().getFullYear();
let header = document.querySelector("header");

if (time > 3 && time < 8) {
    console.log("Good Morning ");
    document.querySelector(".greeting").innerHTML = "Good Morning";
    header.style.cssText = 'background: url(images/dawn.jpg);background-position:center; background-size: cover;background-repeat:no-repeat';

} else if (time >= 8 && time <= 12) {
    console.log("Good Morning ");
    document.querySelector(".greeting").innerHTML = "Good Morning";
    header.style.cssText = 'background: url(images/morning.jpg);background-position:center; background-size: cover;background-repeat:no-repeat';

} else if (time >= 12 && time <= 17) {
    console.log("Good Evening ");
    document.querySelector(".greeting").innerHTML = "Good Afternoon";
    header.style.cssText = 'background: url(images/afternoon.jpg);background-position:center; background-size: cover;background-repeat:no-repeat';
} else if (time >= 17 && time <= 19) {
    console.log("Good Evening ");
    document.querySelector(".greeting").innerHTML = "Good Evening";
    header.style.cssText = 'background: url(images/evening.jpg);background-position:center; background-size: cover;background-repeat:no-repeat';
} else {
    console.log("Good Evening ");
    document.querySelector(".greeting").innerHTML = "Good Night";
    header.style.cssText = 'background: url(images/night.jpg);background-position:center; background-size: cover;background-repeat:no-repeat;';
}

var days = [
    "SUNDAY",
    "MONDAY",
    "tusday",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
];

var months = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];


console.log(days[new Date().getDay()]);

document.querySelector(".today").innerHTML = days[day];
document.querySelector(".time").innerHTML = days[day] + " " + new Date().getDate() + " ," + months[fullTime.getMonth()] + ", " + year;