// displays current time
// set items in local storage
// load saved items from storage
// get number of hours
// use moment.js
// loop time blocks
var timedisplayEl = document.querySelector("#currentDay")
setInterval(function()  {
    timedisplayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    
}, 1000); //Function to make time current at all times.

