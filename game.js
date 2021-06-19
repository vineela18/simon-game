var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];

var useClickedPattern = [];

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  useClickedPattern.push(userChosenColour);
})

function nextSequence(){
  var randomNumber = Math.floor(4*Math.random());

  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds"+randomChosenColour+".mp3");
  audio.play();

}
