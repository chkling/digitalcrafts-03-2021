import React, { useState, useEffect } from "react";
import Jokes from "./Jokes";
let jokeCache = [];

export default function JokeContainer() {
	const [jokes, setJokes] = useState([]);

	// triggers everytime the component is updated or mounted - useEffect (()=>{})
	// the below keeps rendering over and over
	// useEffect(() => {
	// 	getDadJokes();
	// });

	// if count updates, run the function
	// triggers when component is mounted, then every time the value inside the array changes - useEffect (()=>{},["value"])
	// useEffect(() => {
	// 	getDadJokes();
	// }, [count]);

	// to trigger ONE TIME only, when component is mounted - useEffect (()=>{},[])
	useEffect(() => {
		getDadJokes();
	}, []);

	const getDadJokes = async () => {
		const response = await fetch("https://icanhazdadjoke.com", {
			headers: { Accept: "application/json" },
		});
		const parsedData = await response.json();
		setJokes([...jokes, parsedData.joke]);
		jokes.push(parsedData.joke);
	};

	return (
		<div>
			<h1>Joke Container</h1>
			<ul>
				{jokes.length === 0 ? (
					<p>No Jokes Yet</p>
				) : (
					jokes.map((jokeFromCache) => (
						<Jokes joke={jokeFromCache} setJoke={setJokes} />
					))
				)}
			</ul>
			<button
				onClick={() => {
					getDadJokes();
				}}
			>
				New Joke
			</button>
			<button
				onClick={() => {
					setJokes([]);
				}}
			>
				Clear Jokes
			</button>
		</div>
	);
}
