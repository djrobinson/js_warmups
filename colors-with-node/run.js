var songs = require('./main');
var colors = require('colors/safe');

songs.forEach(function(song){
  var printVal = song.title + " by " + song.artist + " [" + song.difficulty + "]";
  if (song.difficulty < 3 ){
    console.log(colors.green(printVal));
  } else if (song.difficulty >= 3 && song.difficulty < 4){
    console.log(colors.yellow(printVal));
  } else if (song.difficulty >= 4){
    console.log(colors.red(printVal));
  }
})