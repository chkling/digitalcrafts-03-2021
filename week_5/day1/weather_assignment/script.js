const getCurrentWeather = async () => {
	const data = await fetch(
		"api.openweathermap.org/data/2.5/weather?q=London&appid=4d600fa78be64ecc6c21ac5bebf9356a"
	);
	const formattedJson = await data.json();
	console.log(formattedJson);
	// let weather = document.createElement();
};
