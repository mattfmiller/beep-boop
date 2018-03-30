// Business Logic
function beepBoop(number, name) {
  //Creates array from 0-number
  var numbersRange = []
  for (var i = 0; i <= number; i++) {
    numbersRange.push(i);
  }
  //creates output array
  var outputArray = []
  for (var i = 0; i < numbersRange.length; i++) {
    if (numbersRange[i] > 0 && numbersRange[i] % 3 === 0) {
      outputArray.push("I'm sorry, " + name + ", I'm afraid I can't do that." + " ");
    } else if (numbersRange[i].toString().split("").includes("1")) {
      outputArray.push("Boop!" + " ");
    } else if (numbersRange[i].toString().split("").includes("0")) {
      outputArray.push("Beep!" + " ");
    } else {
      outputArray.push(numbersRange[i] + " ");
    }
  }
  return outputArray;
}





//User Logic
$(function () {
  $("#form").submit(function(event) {
    var userNumber = parseInt($("#user-number").val());
    var userName = $("#user-name").val();
    var beepBoopOutput = beepBoop(userNumber, userName);
    $("#output p").text(beepBoopOutput);
    $("#output").show();
    event.preventDefault();
  });
});
