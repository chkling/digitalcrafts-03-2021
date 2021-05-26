import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddNames() {
	const dispatch = useDispatch();
	const contacts = useSelector((state) => state.contacts);
	return (
		<div>
			<h1>Add Names</h1>
			<p>{contacts}</p>
			<button onClick={() => dispatch({ type: "ADD_NAMES" })}>Add Names</button>
			{contacts.map((contact) => (
				<div>{contact.name}</div>
			))}
		</div>
	);
}
