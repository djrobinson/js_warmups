$(document).ready(function(){
  var ip;
  var jsonFlickrFeed;

  $.ajax({
    url: "http://jsonip.com",
    method: "GET",
    success: function(data){
      // console.log(data);
      ip = data.ip;
      getLoc();
      $('#ipaddress').text(data.ip);
    }});

  function getLoc(){ $.ajax({
    url: "http://freegeoip.net/json/" + ip,
    method: "GET",
    success: function(data){
      $('#longitude').text(data.longitude);
      $('#latitude').text(data.latitude);
    }});
  }

  $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://www.flickr.com/services/feeds/photos_public.gne?tags=spring_flowers&format=json/auth?api_key=abf48fafeb9a7aed926ee46cccc35195",
        "method": "GET",
        "headers": {
          "cache-control": "no-cache",
          },
        success: function(data){
          console.log(data);
          jsonFlickrFeed = jsonFlickrFeed;
          console.log(jsonFlickrFeed);
        }

    });



  })

$('#submit').on('click', function(){
  var city = $('#city').val();
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=23eda5ada275f21ef9e1431db006b7df",
    method: "GET",
    success: function(data){
      // console.log(data);
      $('#weather').text(data.weather[0].description);
    }
  })
})
