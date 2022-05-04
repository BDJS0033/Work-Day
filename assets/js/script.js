// Variable to showcase current date on jumbotron
var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").append(currentDay);

//Variable to indicate past, present, and furture
var timeZone = $("textarea");

$(timeZone).each(function () {
    var workDay = moment().format("HH");
    var hourData = parseInt($(this).attr("id"));
//attributes for background color
//is greater than applies to past
//is equal to applies to present
//is less than applies to future
    if (hourData < workDay) {
        $(this).addClass("past");
    } else if (hourData === workDay) {
        $(this).addClass("present");
    } else if (hourData > workDay) {
        $(this).addClass("future");
    }
});

// Save textarea events to localStorage
$(".saveBtn").click(function (event) {
    event.preventDefault();

// get textarea values
var eventText = $(this).attr("hour");
var eventTime = $(this).prev().val();

localStorage.setItem(eventText, JSON.stringify(eventTime));

});

//return the value 
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#1").val(localStorage.getItem("1"));
$("#2").val(localStorage.getItem("2"));
$("#3").val(localStorage.getItem("3"));
$("#4").val(localStorage.getItem("4"));
$("#5").val(localStorage.getItem("5"));