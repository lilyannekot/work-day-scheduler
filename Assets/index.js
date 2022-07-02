// Shows today's date
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

var meeting = $(this).siblings('.description').val();
var time = $(this).siblings('.time-block').attr('id');

// Allows clicking of save button and saves events to local storage
$('.saveBtn').on('click', function(){
    var meeting = $(this).siblings('.description').val();
    var time = $(this).siblings('.time-block').text();

    // Saves calendar events to local storage
    localStorage.setItem(time, meeting);
})

function plannerColors() {
    var currentTime = moment().hours();

    // Adding background colors to past, present, and future time blocks depending on current time
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).data('time'));
        console.log(blockTime)

        if (blockTime < currentTime) {
            $(this).addClass('past');
        } else if (blockTime === currentTime) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}

// Get calendar events from local storage when page is refreshed
function showMeetings() {
    $('textarea') = each.function()
    localStorage.getItem(time, meeting);
    }

plannerColors();
