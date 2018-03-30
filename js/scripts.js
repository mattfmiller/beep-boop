// Business Logic
function beepBoop(number) {
  var numberArray = number.toString().split("");
  console.log(numberArray);
  for (var i = 0; i < numberArray.length; i++) {
    if (number > 0 && number % 3 === 0) {
      return "I'm sorry, Dave, I'm afraid I can't do that."
    }
  }
  if (numberArray.includes("1")) {
    return "Boop!";
  } else if (numberArray.includes("0")) {
    return "Beep!";
  } else {
    return number;
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
