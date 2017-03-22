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
    $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' arial-label='close'>&times;</a>City Field cannot be empty<div>")
  }
}


function showResults(data) {
  return '<h3 style="font-weight:bold; font-size: 30px; padding-top:30px;" class="text-center" >Current Weather for '+data.name+', '+data.sys.country+' </h3>' +
         "<h3 style='padding-left:40px;'><strong>Weahter</strong>: "+data.weather[0].main+" </h3>" +
         "<h3 style='padding-left:40px;'><strong>Description:</strong>"+data.weather[0].description+" </h3>" +
         "<h3 style='padding-left:40px;'><strong>Temperature:</strong>"+data.main.temp+" &deg;F</h3>" +
         "<h3 style='padding-left:40px;'><strong>Pressure:</strong>"+data.main.pressure+" hpa</h3>" +
         "<h3 style='padding-left:40px;'><strong>Humidity:</strong>"+data.main.humidity+"%</h3>" +
         "<h3 style='padding-left:40px;'><strong>Min Temperature:</strong>"+data.main.temp_min+"&deg;F</h3>" +
         "<h3 style='padding-left:40px;'><strong>Max Temperature:</strong>"+data.main.temp_max+"&deg;F</h3>" +
         "<h3 style='padding-left:40px;'><strong>Wind Speed:</strong>"+data.wind.speed+"m/s</h3>" +
         "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction:</strong>"+data.wind.deg+"&deg;F</h3>";
}
