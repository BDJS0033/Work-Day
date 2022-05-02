//Setting up variable to showcase current date on heading
var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").append(currentDay);

//Setting up past, present, and furture
// var timeZone = $(".row textarea[type=text]");

//JQuery Attributes used for CSS/HTML elements for design without altering HTML.
// workDay.forEach(function(timeZone) {
//     // creates row
//     var timeZone = $("<form>")
//         .addClass("row");

//     $(".container").append(timeZone);

// });


 //Creating Schedule Data by inputting var/function for hour
//  var timeZone = $("<div>")
//  .addClass("col-lg-10 description p-0")
// var timeZone = $("<textarea>");
// timeZone.attr("id", hour.id);
// //compare time to current time - color codes
//  if (hour.time == moment().format("HH")) {
//     timeZone.addClass("present")
//  } else if (hour.time < moment().format("HH")) {
//     timeZone.addClass("past")
//  } else if (hour.time > moment().format("HH")) {
//     timeZone.addClass("future")
// };