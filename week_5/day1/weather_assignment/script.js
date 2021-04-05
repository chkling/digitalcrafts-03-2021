const getCurrentWeather = async () => {
	const data = await fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=Decatur&appid=4d600fa78be64ecc6c21ac5bebf9356a"
	);
	const formattedJson = await data.json();
	console.log(formattedJson);
	let weather = document.createElement("h2");
	weather.innerHTML = formattedJson.weather[0];
	let root = document.querySelector(".root");
	root.append(weather);
};
getCurrentWeather();
