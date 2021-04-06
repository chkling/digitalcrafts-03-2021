// const form = document.querySelector("form");

// const validateZip = (num) => {
// 	myRegex = /[0-9]+/;
// 	return myRegex.test(num);
// };

const getCurrentWeather = async () => {
	const zipInput = document.querySelector("#zip-input").value;
	const data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput},us&appid=4d600fa78be64ecc6c21ac5bebf9356a&units=imperial`
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
		"am" +
		"   Sunset: " +
		sunCalc(formattedJson.sys.sunset) +
		"pm";

	weather.append(sunTimes);
};

const submitBtn = document.querySelector("#submit-button");
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	getCurrentWeather();
});
