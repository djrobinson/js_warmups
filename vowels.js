var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function voweler(word){
  var index = createCatalog(word);
  if ( index[0] === undefined ) return false
  var currIndex = index[0];
  for ( var j = 1; j < index.length; j++){
    console.log(currIndex, index[j]);
    if ( index[j] !== currIndex ) {
      console.log("Different Vowels");
      return false;
    }
  }
  console.log("Same vowels");
  return true;
}



function createCatalog(word) {
  wordArr = word.toLowerCase().split('');
  var diffVow = 0;
  var index = [];
  for ( var i = 0; i < wordArr.length; i++){
    var newIndex = checkVowels(wordArr[i]);
    if ( newIndex !== undefined)
      index.push(newIndex);
  }
  return index;
}



function checkVowels(letter){
  for ( var i = 0; i < vowels.length; i++){
    if ( vowels[i] === letter ){
      return vowels.indexOf(letter);
    }
  }
}




var first = voweler('wood');
var second = voweler('oligopoly');

console.log('first ', first);
console.log('second ', second);




