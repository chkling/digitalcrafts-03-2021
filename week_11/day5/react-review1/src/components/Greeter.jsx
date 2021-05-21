import React, { useState } from "react";
import Counter from "./Counter";

export default function Greeter() {
	const [greet, setGreet] = useState("Cal");

	const handleChange = (e) => {
		setGreet(e.target.value);
	};

	return (
		<div>
			<h1>Welcome, {greet}!</h1>
			<input onChange={handleChange} type="text" />
			<Counter greet={greet} />
		</div>
	);
}
