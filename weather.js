const weather = document.querySelector('.js-weather');

const apiKey = 'd47c381cc08159264af66abfc0d84803';

function geoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		longitude,
		latitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}
function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			const temperature = json.main.temp;
			const place = json.name;
			const nowWeather = json.weather[0].main;
			weather.innerText = `${temperature} ${place} ${nowWeather}`;
		});
}

function saveCoords(coordsObj) {
	localStorage.setItem('coords', JSON.stringify(coordsObj));
}

function geoFail() {
	console.log('faild');
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(geoSucces, geoFail);
}

function loadedCoords() {
	const loadedCoords = localStorage.getItem('coords');
	if (loadedCoords === null) {
		askForCoords();
	} else {
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {
	loadedCoords();
}
init();
