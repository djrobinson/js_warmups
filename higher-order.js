var letters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'
];

// functional + higherOrderFunctions
function getVowels(arr) {
  // loop through `letters`, passing each letter to `isVowel()`
  var vowelsArray = arr.filter(function(letter){
    console.log('return ' + isVowel(letter));
    return isVowel(letter)[0] === letter;
  });
  return vowelsArray;
}


//use filter on the example below
function isVowel(letter) {
  // return true if a letter is a vowel
  var vowels = ['a','e','i','o','u'];
  return vowels.filter(function(vowel){
    console.log("vowel: " + vowel, "letter: " + letter, "truthy: " + (vowel === letter));
    return (vowel === letter);
  });

  // for (var i = 0; i < vowels.length; i++) {
  //   if(vowels[i] === letter) {
  //     return true;
  //   }
  // }
  // return false;
}

console.log(getVowels(letters));
