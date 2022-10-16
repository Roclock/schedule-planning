// displays current time
// set items in local storage
// load saved items from storage
// get number of hours
// use moment.js
// loop time blocks
var timedisplayEl = document.querySelector("#currentDay")
setInterval(function()  {
    timedisplayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    
}, 1000); //use of moment.js function to make time current at all times in header.

function trackHours() {
 var currentMoment = moment().hour();
 $('.time-block').each(function () {
    var timeHour = parseInt($(this).attr(id).split("hour")[1]);
    console.log(timeHour,currentMoment)
    //Check if we've moved past this hour, set up if else statement underneath for classes of Past, Current, or Future.
 })
}
