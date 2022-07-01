// Shows today's date
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

// $(document).ready(function(){
//     console.log('ready');

function plannerColors() {
    var currentTime = moment().hours();

    // Adding background colors to past, present, and future time blocks depending on current time
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime < currentTime) {
            $(this).addClass('past');
        } else if (blockTime === currentTime) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}

// Allows clicking of save button
$('.saveBtn').on('click', function(){
    var meeting = $(this).siblings('.description').val();
    var time = $(this).siblings('.time-block').text();

    // Saves calendar events to local storage
    localStorage.setItem(time, meeting);
})

// Get calendar events from local storage when page is refreshed
$('9AM .description').val(localStorage.getItem('9AM'));
$('10AM .description').val(localStorage.getItem('10AM'));
$('11AM .description').val(localStorage.getItem('11AM'));
$('12PM .description').val(localStorage.getItem('12PM'));
$('1PM .description').val(localStorage.getItem('1PM'));
$('2PM .description').val(localStorage.getItem('2PM'));
$('3PM .description').val(localStorage.getItem('3PM'));
$('4PM .description').val(localStorage.getItem('4PM'));
$('5PM .description').val(localStorage.getItem('5PM'));

plannerColors();

// })