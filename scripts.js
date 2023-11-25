const dateArea = document.getElementsByClassName("date");


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
const day = weekday[date.getDay()].toLocaleString();
console.log(day);
const todaysDate = date.getDate().toLocaleString();
console.log(todaysDate);
const month = months[date.getMonth()].toLocaleString();
console.log(month);
const year = date.getFullYear().toLocaleString().replace(/,/,'');
console.log(year);


const today = day + ', ' + todaysDate + ' ' + month + ' ' + year;
for (let i = 0; i < dateArea.length; i++) {
    dateArea[i].innerHTML = today;   
}




