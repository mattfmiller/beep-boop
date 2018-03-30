// Business Logic
function beepBoop(number) {

}




//User Logic
$(function () {
  $("#form").submit(function(event) {
    var userInput = $("#user-input").val();
    var beepBoopOutput = beepBoop(userInput);
    $("#output").text(beepBoopOutput);
    $("#output").show();
    event.preventDefault();
  });
});
