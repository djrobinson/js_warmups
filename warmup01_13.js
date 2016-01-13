var testStr = "racecar";
var testStr2 = "lion oil";

function palindromer(word) {
  word.toLowerCase();
  word.replace(" ", "");
  for (var i = 0; i < word.length/2; i++) {
    if ( word.charAt(i) === word.charAt((word.length - i - 1))) {

    } else {
      console.log("Not a palindrome!");
      return false;
    }
  return "This is a palindrome!";
  }
}