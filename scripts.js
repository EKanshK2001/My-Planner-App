const dateArea = document.getElementsByClassName("date");
const addPlanBtn = document.getElementById("addPlanBtn");
const createPlanForm = document.getElementById("createPlanForm");
const plusIcon = document.getElementById("plus-icon");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
const day = weekday[date.getDay()].toLocaleString();
// console.log(day);
const todaysDate = date.getDate().toLocaleString();
// console.log(todaysDate);
const month = months[date.getMonth()].toLocaleString();
// console.log(month);
const year = date.getFullYear().toLocaleString().replace(/,/, '');
// console.log(year);


const today = day + ', ' + todaysDate + ' ' + month + ' ' + year;
for (let i = 0; i < dateArea.length; i++) {
    dateArea[i].innerHTML = today;
}


// function toggleForm() {
//     createPlanForm.classList.toggle("hide");
// }

function togglePlusIn() {
    plusIcon.style.color = '#e9ecef';
}

function togglePlusOut() {
    plusIcon.style.color = '#fd7e14';
}


























// media query to resize add plans plus button




// function mediaFunction(x) {
//     if (x) { // If media query matches
//         addPlanIcon.classList.add = "bx-lg";
//     }

// };


function myFunction(x) {
    if (x.matches) { // If media query matches
        addPlanIcon.classList.add = "bx-lg";
    } /* else {
        document.body.style.backgroundColor = "pink";
    } */
}

const x = window.matchMedia("(max-width: 1024px)")

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//   var x = window.matchMedia("(max-width: 475px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes


//   2xl max-width: 1536px
//   xl max-width: 1280px
//   lg max-width: 1024px
//   md max-width: 768px
//   xs max-width: 640px
//   2xs max-width: 475px

// window.innerWidth <= 1024