import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCounter, subtractFromCounter } from "../actions/counterActions";

export default function Counter() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);
	return (
		<div>
			<h1>Counter</h1>
			<p>{count}</p>
			<button onClick={() => addToCounter(dispatch)}>Add</button>
			<button onClick={() => subtractFromCounter(dispatch)}>Subtract</button>
		</div>
	);
}
