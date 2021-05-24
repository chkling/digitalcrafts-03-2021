import React, { useState, useEffect } from "react";
import Jokes from "./Jokes";

export default function JokeContainer() {
	const [joke, setJoke] = useState("");
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("UseEffect was triggered");
	});

	// if count updates, run the function
	useEffect(() => {
		console.log("Click add or subtract");
	}, [count]);

	useEffect(() => {
		console.log("I triggered here.");
	}, []);

	return (
		<div>
			<h1>Joke Container</h1>
			<p>Count {count}</p>
			<button onClick={() => setCount(count + 1)}>Add</button>
			<button onClick={() => setCount(count - 1)}>Subtract</button>
			<Jokes />
		</div>
	);
}
