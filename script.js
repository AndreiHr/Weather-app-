$(document).ready(function(){
    var lon; 
    var lat;
    var fTemp;
    var cTemp;
    var temp;
  
   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lon =position.coords.longitude;
    lat =position.coords.latitude;
    $("#data").html("latitude: " + lat + "<br>longitude: " + lon);

  var api = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
  
  $.getJSON(api, function(data){
    var city = data.name;
    var weather = data.weather[0].main;
    cTemp = data.main.temp;
    var windSpeed=data.wind.speed;
    var weatherIcon = data.weather[0].icon;
    fTemp= cTemp*9/5+32;
    temp = cTemp;
    
    $("h1").html(city);
    $(".temp").html(Math.floor(temp)+"&#8451;");
    $(".wth").attr("src", weatherIcon);
    $(".temp").click(function() {
      if(temp==cTemp)
      {temp=fTemp;
       $(".temp").html(Math.floor(temp) + "&#8457;");
      }
    else
    {temp=cTemp;
      $(".temp").html(Math.floor(temp) + "&#8451;");
    }
    });
    $("#how").html(weather);
    $("#wind").html("Wind speed: " + windSpeed+ "km/h");
  });
     });
} 
    
});