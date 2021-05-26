import React from "react";
import { useSelector } from "react-redux";

export default function NameChange() {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.name);
	return (
		<div>
			<h1>Name Changer</h1>
			<p>{name}</p>
			<button onClick={() => dispatch({ type: "JOE" })}>Change Name</button>
		</div>
	);
}
