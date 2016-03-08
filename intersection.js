
var intersection = function(arr1, arr2){
  var resArr = [];
  arr1.map(function(el){
    arr2.map(function(elem){
      if ( elem === el ) {
        resArr.push(el);
      }
    })
  })
  console.log(resArr);
  return resArr;
}

intersection([1, 2, 3], [2, 3, 5]);