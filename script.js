$(document).ready(function() {

    
    
    // Get geolocation
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(function(position) {
            var localLat = (position.coords.latitude);
            var localLon = (position.coords.longitude);

            var localLatLon = "http://api.openweathermap.org/data/2.5/weather?lat=" + localLat + "&lon=" + localLon + "&APPID=70fa491fc35f6904d716e3250636eac4";    
            var weatherRequest = new XMLHttpRequest();
            weatherRequest.open('GET', localLatLon);
            weatherRequest.onload = function() {

                var localData = JSON.parse(weatherRequest.responseText);
                var localTempLongF = localData.main.temp*(9/5)-459.67 + " is Your Local Temperature in ";
                var localTempLongC = localData.main.temp-273 + " is Your Local Temperature in ";
                var localTempF = localTempLongF.substr(0,4);
                var localTempC = localTempLongC.substr(0,4);
                var localSpeed = localData.wind.speed + " is Your Local Wind Speed in Knots";
                var localHumidity = localData.main.humidity + " is Your Local Humidity in %" 
                var localIcon = localData.weather[0].icon;  
                var localIconImg = "http://openweathermap.org/img/w/" + localIcon + ".png"
                var link = "<img src='" + localIconImg + "'>";
                var localF = localTempF + "F Degrees";
                var localC = localTempC + "C Degrees";
                var localArr = [localF,localC];
                var local = [];
                $("#tempTarget").html(localTempF);
                $("#speedTarget").html(localSpeed);
                $("#humidityTarget").html(localHumidity);
                $("#iconTarget").html(localIconImg);    
                $("#icon").html(link);
                $("#loadingTarget").html("Uplink Successful! Click Below to Toggle Between Fahrenheit and Celsius!");

                // If button is clicked, reveal temp in F
                $('#myButton').click(function(){

                    $('.showF').html(localArr[0]);

                });
                
                // If button click count is odd, show F; if click count is even, show C
                $('#myButton').click(function() {

                    local++;
                    if (local % 2 === 1) {
                        $('.showF').html(localArr[0]);
                    } else {$('.showF').html(localArr[1])};

                });

            }; // End weatherRequest
            
            
            
            // Fire AJAX
            weatherRequest.send(); 
            
            
        }); // End getCurrentPosition function
        
        
    } // End if(navigator.geolocation)

    
    
       
}); //close $(document).ready         