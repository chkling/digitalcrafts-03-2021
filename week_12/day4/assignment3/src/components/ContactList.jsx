import React from "react";
import { addToContacts } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {
	const dispatch = useDispatch();
	const contacts = useSelector((state) => state.contacts);
	return (
		<div>
			<h1>Contact List</h1>
			{contacts.map((contact) => (
				<div>{contact.name}</div>
			))}
			<button onClick={() => addToContacts(dispatch)}>Add Names</button>
		</div>
	);
}
