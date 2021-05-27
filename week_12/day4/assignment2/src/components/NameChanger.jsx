import React from "react";
import { changeName } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function NameChanger() {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.name);
	return (
		<div>
			<h1>Name Changer</h1>
			<p>{name}</p>
			<button onClick={() => changeName(dispatch)}>Change Name</button>
		</div>
	);
}
