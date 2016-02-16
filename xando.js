function xando(str){
  var strArr = str.split("");
  console.log(strArr);
  var X = [];
  var O = [];
  strArr.forEach(function(letter){
    if (letter.toUpperCase() === "X"){
      X.push(letter);
    } else if (letter.toUpperCase() === "O") {
      O.push(letter);
    }
  });
  console.log(X, O)
  if ( X.length % 2 === 0 && O.length % 2 === 0 ){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

xando("xoxoxoxoxoxoxoxo");