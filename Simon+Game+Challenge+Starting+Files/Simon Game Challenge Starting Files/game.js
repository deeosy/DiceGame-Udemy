const userClickedPattern = [];
const gamePattern = [];
const buttonColors = ["green", "red", "yellow", "blue"]
let level = 0;

// the method .one calls the function to run only on the 1st keydown it identifies
$(document).one("keydown", function(event) {
  nextSequence();
})

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);   // creates a random number between 0 to 4 not including 4
  const randomChosenColor = buttonColors[randomNumber];  // assigns the colors array to the generated random number
  // console.log(randomChosenColor)
  gamePattern.push(randomChosenColor);   // pushes the generated random color into the gamePattern array
  $(`.${randomChosenColor}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("h1#level-title").text(`Level ${level}`) 
}

$(".btn").click(function() {
  let userChosenColor = $(this).attr("id") // selects the id value of the button the user clicks on
  userClickedPattern.push(userChosenColor);  // pushes the id value the user choose to the array userClickedPattern
  // console.log(userClickedPattern)
  animatePress(userChosenColor);
  playSound(userChosenColor);
  let lastIndex = userClickedPattern[userClickedPattern.length-1];
  // console.log(lastIndex);
  checkAnswer(lastIndex);
})

// This plays a sound effect by picking the sound from the sound folder
function playSound(name) {
  const playSound = new Audio();
  playSound.src=`./sounds/${name}.mp3`
  playSound.play();
}

// this applies and removes the css class pressed cusing the buttons to flash with the help of setTimeout()
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(() => {
    $("#"+currentColor).removeClass("pressed")
  }, 100);
}

function checkAnswer(currentLevel) {
  if(userChosenColor.length-1 === gamePattern.length-1){
    console.log("sucess")
  } else{
    console.log("wrong")
  }
}

console.log(userClickedPattern)
console.log(gamePattern)