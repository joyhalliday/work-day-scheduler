var today = moment();
$(currentDay).text(today.format("[Today is] dddd MMM Do, YYYY"));

var currentHour = new Date().getHours();

console.log(currentHour);

$("textarea").each(function() {
console.log($(this).attr("id"))
var textHour = parseInt($(this).attr("id").split("-")[1])
if(textHour<currentHour) {
    $(this).addClass("past")
} else if (textHour === currentHour) {
    $(this).addClass("present")
} else {
    $(this).addClass("future")
}

} )

$.parseJSON$(`text-${buttonId}`).text


//add event listeners to buttons on click
//when click use (this) to extract id
//$(`text-${buttonId}`).text
//save text to local storage
