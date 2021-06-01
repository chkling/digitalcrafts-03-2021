import React from "react";
import { useDispatch, useState } from "react-redux";

export default function Form() {
	const dispatch = useDispatch();
	const username = useState(username);
	const email = useState(email);

	return (
		<div>
			<h1>Form</h1>
			<form action="">
				<input type="text" placeholder="Enter Username" />
				<input type="text" placeholder="Enter Password" />
				<button>Submit</button>
			</form>
		</div>
	);
}
