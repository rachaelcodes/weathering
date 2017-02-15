function weather() {
var squid = "fdaa0b046596f318461f095989d513a2";
var url = "http://api.openweathermap.org/data/2.5/weather?";
navigator.geolocation.getCurrentPosition(success, error);
function success(position){
<<<<<<< HEAD
<<<<<<< HEAD
	 document.getElementById("location").innerHTML = "latitude: " + position.coords.latitude.toFixed(1) + "° <br />  longitude: " + position.coords.longitude.toFixed(1)+"°";
	$.getJSON(url + "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&APPID="+squid+"&units=metric", function(data){
		$('#temp').html((data.main.temp).toFixed(0) + '°C');
		console.log(data.weather[0].description);
		$('#minutely').html(data.weather[0].description);
		switch (data.weather[0].icon){
			case "04d":
			case "04n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/224755')";
			break;
			case "02d":
			case "03d":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/411046')";
			break;
			case "02n":
			case "03n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/470178')";
			break;
			case "01d":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/472766')";
			break;
			case "01n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/470191')";
			break;
			case "09d":
			case "09n":
			case "10d":
			case "10n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/403069')";
			break;
			case "13d":
			case "13n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/426534')";
			break;
			case "11d":
			case "11n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/541700')";
			break;
			case "50d":
			case "50n":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/1073')";
			break;
		}
=======
=======
>>>>>>> parent of 35d1643... Updated with styling
	//var latitute = position.coords.latitude;
	//var longitude = position.coords.longitude;
	 document.getElementById("location").innerHTML = "latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude;
	$.getJSON(url + key + "/" + position.coords.latitude + "," + position.coords.longitude + "?callback=?", function(data){
		$('#temp').html(((data.currently.temperature - 32)*5/9).toFixed(0) + 'C');
		$('#minutely').html(data.minutely.summary);
<<<<<<< HEAD
>>>>>>> parent of 35d1643... Updated with styling
=======
>>>>>>> parent of 35d1643... Updated with styling
	});
	}
	
	function error() {
	document.getElementById("location").innerHTML = "Unfortunately, we couldn't retrieve your location.";
	}
	}
weather();
