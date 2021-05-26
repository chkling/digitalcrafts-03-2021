import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const username = useSelector((state) => state.userName);

	return (
		<div>
			<h1>Counter</h1>
			<p>{counter}</p>
			<p>{username}</p>
			<input
				type="text"
				onChange={(e) =>
					dispatch({ type: "CHANGE_NAME", value: e.target.value })
				}
			/>
			<button onClick={() => dispatch({ type: "ADD" })}>Add</button>
			<button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>
		</div>
	);
}
