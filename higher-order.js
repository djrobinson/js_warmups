var letters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'
];

// functional + higherOrderFunctions
function getVowels(arr) {
  // loop through `letters`, passing each letter to `isVowel()`
  var vowelsArray = arr.filter(function(letter){
    return isVowel(letter);
  });
  return vowelsArray;
}

//Using for loop
function isVowel(letter) {
  // return true if a letter is a vowel
  var vowels = ['a','e','i','o','u'];
  for (var i = 0; i < vowels.length; i++) {
    if(vowels[i] === letter) {
      return true;
    }
  }
  return false;
}

//using filter:
// function isVowel(letter) {
//   // return true if any vowel matches the letter by check array length
//   var vowels = ['a','e','i','o','u'];
//   return !!vowels.filter(function(vowel){
//     return (vowel === letter);
//   }).length;
// }

//using some:
// function isVowel(letter) {
//   var vowels = ['a','e','i','o','u'];
//   return vowels.some(function(vowel){
//     return (vowel === letter);
//   })
// }

console.log(getVowels(letters));
