function weather() {
//set the location div to a variable 
//var location = document.getElementById("location");
//set the API key and the url(https://api.forecast.io/forecast/) equal to variables.
var key = "33a63504ed3994c34d5cdffcad78483b";
var url = "https://api.forecast.io/forecast/";
//write the geolocation.getCurrentPosition method with the parameters (success, error)
navigator.geolocation.getCurrentPosition(success, error);
function success(position){
	//var latitute = position.coords.latitude;
	//var longitude = position.coords.longitude;
	 document.getElementById("location").innerHTML = "latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude;
	$.getJSON(url + key + "/" + position.coords.latitude + "," + position.coords.longitude + "?callback=?", function(data){
		$('#temp').html(((data.currently.temperature - 32)*5/9).toFixed(0) + 'C');
		$('#minutely').html(data.minutely.summary);
	});
	}
	
	function error() {
	document.getElementById("location").innerHTML = "Unfortunately, we couldn't retrieve your location.";
	}
	//document.getElementById("location").innerHTML = "Locating...";
	}
weather();

//write the success function consisting of the following:
//set the position.coords.latitude and position.coords.longitude to their own variables
//use the location div’s variable to display the latitude and longitude for the location
//START FROM HERE TOMORROW use the $.getJSON jQuery method to make a request to the weather API url 
//set the temp and daily div values to the data.currently.temperature and data.minutely.summary (docs on weather API request)
//write an error function to tell the user that the location could not be retrieved
//set the location div’s value to “Locating…”
//call the weather() function