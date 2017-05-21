









$(document).ready(function() {
    
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var userLat = (position.coords.latitude);
    var userLon = (position.coords.longitude);
//end of geolocation code

        
        
var userLatLon = 
    "http://api.openweathermap.org/data/2.5/weather?lat=" + userLat + "&lon=" + userLon + "&APPID=70fa491fc35f6904d716e3250636eac4";    
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', userLatLon);
ourRequest.onload = function() {
    var rickData = JSON.parse(ourRequest.responseText);
   
    var rickTempLongF = 
        rickData.main.temp*(9/5)-459.67 + " is Your Local Temperature in ";
    var rickTempLongC = 
        rickData.main.temp-273 + " is Your Local Temperature in ";
    var rickTempF = rickTempLongF.substr(0,4);
    var rickTempC = rickTempLongC.substr(0,4);
    var rickSpeed = 
        rickData.wind.speed + " is Your Local Wind Speed in Knots";
    var rickHumidity = 
        rickData.main.humidity + " is Your Local Humidity in %" 
    var rickIcon = rickData.weather[0].icon;  
    var rickIconImg = 
        "http://openweathermap.org/img/w/" + rickIcon + ".png"
    //end of extrapolation



    $("#tempTarget").html(rickTempF);
    $("#speedTarget").html(rickSpeed);
    $("#humidityTarget").html(rickHumidity);
    $("#iconTarget").html(rickIconImg);    
            var link = "<img src='" + rickIconImg + "'>";
    $("#icon").html(link);
    $("#loadingTarget").html("Uplink Successful! Click Below to Toggle Between Fahrenheit and Celsius!");


    
    
    
    
    
    
    var testF = rickTempF + "F Degrees";
    var testC = rickTempC + "C Degrees";
    var testArr = [testF,testC];


    $('#myButton').click(function(){
        $('.showF').html(testArr[0]);
    });  
    
//    $('#myButton2').click(function(){
//        $('.showC').html(testArr[1]);
//    });   
////////////////////////////////////////////////////
var test = [];
    
$('#myButton').click(function() {
    test++;
    if (test % 2 === 1) {
        $('.showF').html(testArr[0]);
    } else {$('.showF').html(testArr[1])};


});
    

    
    
    console.log(rickData);
    
    
    
    
        
        
};
ourRequest.send();        
     });
  }   
    
 

    

    
    

    
    
    
    
    
    
    
    
    
    
    
    


    

       
}); //close $(document).ready         