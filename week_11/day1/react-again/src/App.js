import "./App.css";
import Class from "./components/Class.js";
import Class2 from "./components/Class2.js";
import Class3 from "./components/Class3.js";
import Class4 from "./components/Class4.js";
import Weather from "./components/Weather.js";
import React, { useState } from "react";

function getDate() {
	const date = Date.now();
	return date;
}
function App() {
	const greeting = "Hello everyone";
	const sun = "SUN";
	const rain = "RAIN";
	const [speeding, setSpeeding] = useState(false);
	const car = speeding ? "POLICE" : "RED CAR";

	return (
		<div
			className="App"
			style={{
				height: "925px",
				width: "900px",
				backgroundColor: "pink",
			}}
		>
			<h1>App.js</h1>

			<Class getDate={getDate} greeting={greeting} />
			<Weather
				sun={sun}
				cloudy={rain}
				car={car}
				speeding={speeding}
				setSpeeding={setSpeeding}
			/>
			<Class2 />
			<Class3 />
			<Class4 />
		</div>
	);
}

export default App;
