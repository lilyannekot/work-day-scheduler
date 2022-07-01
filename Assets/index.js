// Shows today's date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function(){
    console.log('ready');
    // Allows clicking of save button
    $('.saveBtn').on('click', function(){
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attribution('id');

        localStorage.setItem(time, text);
    })

    function trackTime(){
        var currentTime = moment().hour();

        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attribution("id").split("hour")[1]);

            // Adding background colors to past, present, and future time blocks depending on current time
            if (blockTime < currentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if (blockTime === currentTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    }

    trackTime();
})