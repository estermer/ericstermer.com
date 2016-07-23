$(document).ready(function() {
  
  var getDate = function() {
    var date = Date();
    date = date.split(" ");
    date = date.splice(0,4);
    date = date.join(" ");
    
    return date;
  };
  
  var calculateFahrenheit = function(kelvin) {
    return Math.round(1.8*(kelvin - 273.15)+32);
  };
  
  var calculateCelsius = function(kelvin) {
    return Math.round(kelvin - 273.15);
  };
  
  var toggleTemp = function(unit, temp) {
    if(unit === "<sup>o</sup>F"){
      $("#temp").html(calculateCelsius(temp));
      $("#unit").html("<sup>o</sup>C");
    } else if (unit === "<sup>o</sup>C"){
      $("#temp").html(calculateFahrenheit(temp));
      $("#unit").html("<sup>o</sup>F");
    }
  };

  var getIcon = function(id) {
    var icon;

    if (200 <= id && id <= 232) {
      icon = $("#icon").html("U");
    } else if (300 <= id && id <= 321) {
      icon = $("#icon").html("W");
    } else if (500 <= id && id <= 531) {
      icon = $("#icon").html("X");
    } else if (600 <= id && id <= 622) {
      icon = $("#icon").html("o");
    } else if (id === 800) {
      icon = $("#icon").html("A");
    } else if (801 <= id && id <= 804) {
      icon = $("#icon").html("C");
    }

    return icon;
  };
  
  $("#date").html(getDate());
  
  
/********************get API information functions************************/
  var weatherAppAPIKey = "&APPID=6bd030d1601219a763291a3570be666c";
  var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  var ipURL = "http://ip-api.com/json";
  
  $.getJSON(ipURL, function(jsonIP) {
    var city = jsonIP.city;
    
    //getting weather data from local city
    $.getJSON(weatherURL + city + weatherAppAPIKey, function(jsonWeather) {
      var tempNow = jsonWeather.main.temp;
      var weatherStatus = jsonWeather.weather[0].main;
      var weatherIcon = jsonWeather.weather[0].id;
      var tempUnit = $("#unit").html();
      
      /*****************UPDATE HTML with Weather********************/
      getIcon(weatherIcon);
      $("#city").html(jsonWeather.name);      
      $("#temp").html(calculateFahrenheit(tempNow));  
      $("#status").html(weatherStatus);
      $("#unit").click(function() {toggleTemp(tempUnit, tempNow)});

    });
    
  });
  /*******************************************************************/
  

  
  
  
  
  
}); //doc Ready