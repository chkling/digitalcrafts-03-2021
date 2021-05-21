import React, { useState } from "react";

export default function Counter(props) {
	const [count, setCount] = useState(10);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Add</button>
			<h1>
				{" "}
				{props.greet} needs {count} of Grandma's cookies.
			</h1>
			<button onClick={() => setCount(count - 1)}>Subtract</button>
		</div>
	);
}
