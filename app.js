function weather() {
var squid = "f5c4a4278d8952688d71af38154d7d88";
var url = "https://api.forecast.io/forecast/";
navigator.geolocation.getCurrentPosition(success, error);
function success(position){
	 document.getElementById("location").innerHTML = "latitude: " + position.coords.latitude.toFixed(1) + "° <br />  longitude: " + position.coords.longitude.toFixed(1)+"°";
	$.getJSON(url + squid + "/" + position.coords.latitude + "," + position.coords.longitude + "?callback=?", function(data){
		$('#temp').html(((data.currently.temperature - 32)*5/9).toFixed(0) + '°C');
		$('#minutely').html(data.minutely.summary);
		switch (data.currently.icon){
			case "cloudy":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/224755')";
			break;
			case "partly-cloudy-day":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/411046')";
			break;
			case "partly-cloudy-night":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/470178')";
			break;
			case "clear-day":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/472766')";
			break;
			case "clear-night":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/470191')";
			break;
			case "rain":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/403069')";
			break;
			case "snow":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/426534')";
			break;
			case "sleet":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/349213')";
			break;
			case "wind":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/195950')";
			break;
			case "fog":
			document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/1073')";
			break;
		}
	});
	}
	
	function error() {
	document.getElementById("location").innerHTML = "Unfortunately, we couldn't retrieve your location.";
	}
	}
weather();