import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import ComponentTwo from "./components/ComponentTwo";

function App() {
	return (
		<div className="App">
			<Counter />
			<ComponentTwo />
		</div>
	);
}

export default App;

// installed both
// npm install --save redux
// npm install --save react-redux
// both at once - npm i --save redux@next react-redux@next
