// Business Logic
function beepBoop(number) {
  if (number === 0) {
    return "Beep!";
  } else if (number === 1) {
    return "Boop!"
  } else if (number === 3) {
    return "I'm sorry, Dave, I'm afraid I can't do that."
  }
}




//User Logic
$(function () {
  $("#form").submit(function(event) {
    var userInput = parseInt($("#user-input").val());
    var beepBoopOutput = beepBoop(userInput);
    $("#output p").text(beepBoopOutput);
    $("#output").show();
    event.preventDefault();
  });
});
