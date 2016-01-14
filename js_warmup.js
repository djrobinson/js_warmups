console.log("Exercise 1 ...........................\n");

var rand = function() { return Math.floor((Math.random() * 100) + 0); }

var num1 = rand();
var num2 = rand();

function mean(x, y) {
  return ( x + y ) / 2
}

var mean1 = mean(num1, num2);

console.log(num1, num2);
console.log(mean1);


function variance(x, y) {
  dev1 = (x - mean1);
  dev2 = (y - mean1);
  return (Math.pow(dev1, 2) + Math.pow(dev2, 2)) / 2
}

console.log(variance(num1, num2));

function stddev(x, y) {
  return Math.sqrt(variance(x, y));
}


console.log(stddev(num1, num2));

console.log("\nExercise 2 ...........................\n");

var num3 = rand();

console.log(num3);

for ( var i = 0; i < num3; i = i + 2 ) {
  console.log(i);
}


console.log("\nExercise 3 ...........................\n");

var num4 = rand();

console.log(num4);

if ( num4 > 40 ) {
  for ( var i = 41; i < num4; i = i + 2) {
    console.log(i);
  } 
} else {
    for ( var i = 1; i < num4; i = i + 2) {
      console.log(i);
  }
}


console.log("\nExercise 4 ...........................\n");

var randNums = [];

for ( var i = 0; i < 20; i++) {
  randNums.push(rand());
}

console.log(randNums);

console.log(Math.max(...randNums));
console.log(Math.min(...randNums));


console.log("\nExercise 4 Take 2 .....................\n");

var min = 100;
var max = 0;

for (var i = 0; i < 20; i++) {
  var randomNum = rand();
  console.log(randomNum);
  if ( randomNum < min ) {
    min = randomNum;
  } else if ( randomNum > max ) {
    max = randomNum;
  }
}

console.log(min, max);