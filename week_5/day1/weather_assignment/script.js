const getCurrentWeather = async () => {
	const data = await fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=Decatur&appid=4d600fa78be64ecc6c21ac5bebf9356a&units=imperial"
	);
	const formattedJson = await data.json();

	const sunCalc = (num) => {
		let sunTime = num;
		let date = new Date(sunTime * 1000);
		let hours = date.getHours();
		let minutes = "0" + date.getMinutes();
		let newTime = hours + ":" + minutes.substr(-2);
		return newTime;
	};

	let root = document.querySelector(".root");
	console.log(formattedJson);

	// Location
	let location = document.createElement("h2");
	location.innerHTML = "Today's forecast for " + formattedJson.name + ".";
	root.append(location);

	// Temperature
	let temp = Math.round(formattedJson.main["temp"]);
	let minTemp = Math.round(formattedJson.main["temp_min"]);
	let maxTemp = Math.round(formattedJson.main["temp_max"]);

	let displayTemp = document.createElement("h2");
	displayTemp.innerHTML = "The current temperature is " + temp + ".";

	let secondarytemp = document.createElement("h3");
	secondarytemp.innerHTML =
		"The low for today is " + minTemp + " with a high of " + maxTemp + ".";

	root.append(displayTemp);
	root.append(secondarytemp);

	// Conditions
	let condition = document.createElement("h3");
	condition.innerText = formattedJson.weather[0]["description"];
	root.append(condition);

	// Sunrise/set
	let sunTimes = document.createElement("h3");
	sunTimes.innerText =
		"Sunrise: " +
		sunCalc(formattedJson.sys.sunrise) +
		" Sunset: " +
		sunCalc(formattedJson.sys.sunset);

	root.append(sunTimes);
};
getCurrentWeather();
