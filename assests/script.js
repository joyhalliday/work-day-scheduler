const today = moment();
$(currentDay).text(today.format("[Today is] dddd MMM Do, YYYY"));

const currentHour = new Date().getHours();

console.log(currentHour);

$("textarea").each(function() {
console.log($(this).attr("id"))
const textHour = parseInt($(this).attr("id").split("-")[1])
if(textHour<currentHour) {
    $(this).addClass("past")
} else if (textHour === currentHour) {
    $(this).addClass("present")
} else {
    $(this).addClass("future")
}
} );

const buttonId = $(".saveBtn");

buttonId.on('click', function () {
   console.log("Save");
   localStorage.setItem(`text-${buttonId}`).text
});

