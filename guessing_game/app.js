
function genRandom(){
  var random = Math.floor(Math.random() * (100 - 0));
  return random;
}

var actual = genRandom();
console.log(actual);

function submitGuess(){

  var guess = document.getElementById("guess").value;

  if ( parseInt(guess) === actual ){
    alert("You did it, Hombre!")
  } else {
    alert("The force is not strong with you.")
  }
  console.log(actual, parseInt(guess));
}