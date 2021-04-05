const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-button");

const validateZip = (num) => {
	myRegex = /[0-9]+/;
	return myRegex.test(num);
};

const getCurrentWeather = async () => {
	// const zipInput = document.querySelector("#zip-input").value;
	// console.log(zipInput);

	const data = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?zip=30324,us&appid=4d600fa78be64ecc6c21ac5bebf9356a&units=imperial`
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

	const root = document.querySelector(".root");
	console.log(formattedJson);

	// Location
	const location = document.querySelector("#place");
	location.innerHTML = formattedJson.name;

	// Temperature
	let weather = document.querySelector(".weather");
	let temp = Math.round(formattedJson.main["temp"]);
	let minTemp = Math.round(formattedJson.main["temp_min"]);
	let maxTemp = Math.round(formattedJson.main["temp_max"]);

	let displayTemp = document.createElement("li");
	displayTemp.innerHTML = "The current temperature is " + temp + ".";

	let secondarytemp = document.createElement("li");
	secondarytemp.innerHTML =
		"The low for today is " + minTemp + " with a high of " + maxTemp + ".";

	weather.append(displayTemp);
	weather.append(secondarytemp);

	// Conditions
	let condition = document.createElement("li");
	condition.innerText = formattedJson.weather[0]["description"];
	weather.append(condition);

	// Sunrise/set
	let sunTimes = document.createElement("li");
	sunTimes.innerText =
		"Sunrise: " +
		sunCalc(formattedJson.sys.sunrise) +
		" Sunset: " +
		sunCalc(formattedJson.sys.sunset);

	weather.append(sunTimes);
};

// submitBtn.addEventListener("click", (event) => getCurrentWeather());

getCurrentWeather();
