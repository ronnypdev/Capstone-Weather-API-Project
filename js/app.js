$(function () {

  $("#submitCity").click(function() {

      return getWeahter();

  });

});


function getWeahter() {
  var city = $("#city").val();

  if (city != '') {

    $.ajax({
       url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&appid=ebd59d49fb2d486556929725dcc0deef",
       type: "Get",
       dataType: "jsonp",
       success: function(data) {

         var widget = showResults(data)

         $('#showWeather').html(widget);
           var city = $("#city").val('');


       }
    });

  } else {
    $("#error").html("<div>City Field cannot be empty<div>")
  }
}


function showResults(data) {
  return '<h3>Current Weather for '+data.name+', '+data.sys.country+' </h3>' +
         "<p>Temperature: "+data.main.temp+" &deg;F</p>" +
         "<p>Pressure: "+data.main.pressure+"</p>" +
         "<p>Humidity: "+data.main.humidity+"</p>" +
         "<p>Min Temperature: "+data.main.temp_min+"</p>" +
         "<p>Max Temperature: "+data.main.temp_max+"</p>";
}
