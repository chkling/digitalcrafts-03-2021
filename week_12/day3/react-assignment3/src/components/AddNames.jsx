import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddNames() {
	const dispatch = useDispatch();
	const contacts = useSelector((state) => state.contacts);
	return (
		<div>
			<h1>Add Names</h1>
			{contacts.map((contact) => (
				<div>{contact.name}</div>
			))}
			<button onClick={() => dispatch({ type: "ADD_NAMES" })}>Add Names</button>
		</div>
	);
}
