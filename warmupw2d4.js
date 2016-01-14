function sumNum() {
  var rando = Math.floor(Math.random() * (9999 - 1000) + 1000);
  var randArray = rando.toString().split('');
  var runSum;

  console.log(randArray);

  function addIt(x) { 
    var y = parseInt(x);
    runSum = runSum +  y;
    console.log(runSum);
  }

  randArray.forEach(addIt);
  console.log(runSum);
  return runSum;
}

sumNum();




function sumNumDrop() {
  var rando = Math.floor(Math.random() * (9999 - 1000) + 1000);
  var randArray = rando.toString().split('');
  console.log(randArray);
  var runSum = 0;

  function addIt(x) { 
    var y = parseInt(x);
    runSum = runSum + y;
    return runSum;
  }

  randArray.forEach(addIt);
  console.log(runSum);

  var lessSum = runSum;
  console.log(lessSum);

  function removeIt(i) {
    var j = parseInt(i);
    lessSum = lessSum - j;
    console.log(lessSum);
  }
  
  randArray.forEach(removeIt);
}

sumNumDrop();
