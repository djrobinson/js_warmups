
function genRandom(){
  var random = Math.floor(Math.random() * (100 - 0));
  return random;
}

var actual = genRandom();
console.log(actual);
var wrongGuess = 0;

function submitGuess(){

  var guess = document.getElementById("guess").value;
  
  var heat;
  if ( guess > actual){
    heat = "too high";
  } else {
    heat = "too low";
  }

  if ( parseInt(guess) === actual ){
    alert("You did it, Hombre!")
  } else if (wrongGuess === 0){
    wrongGuess += 1;
    alert("The force is not strong with you. Your guess is " + heat);
  } else if (wrongGuess === 1) {
    wrongGuess += 1;
    alert("You're still trying, eh? Your guess is " + heat)
  } else if (wrongGuess === 2){
    wrongGuess += 1;
    alert("Quit already. Your guess is " + heat)
  } else if (wrongGuess === 3){
    wrongGuess += 1;
    alert("Good Lord. Just stop. The right answer is " + actual + " for goodness sake.");
    window.location = "https://en.wikipedia.org/wiki/Failure";
  }

  console.log(actual, parseInt(guess));
}