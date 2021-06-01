import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailUpdate } from "../actions/email-actions";
import { usernameUpdate } from "../actions/user-actions";

export default function Form(props) {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.username);
	const email = useSelector((state) => state.email);

	return (
		<div>
			<h1>Form</h1>
			{username}
			<form action="">
				<input
					onChange={(e) => {
						e.preventDefault();
						usernameUpdate(dispatch);
					}}
					// value={() => usernameUpdate(dispatch)}
					type="text"
					placeholder="Enter Username"
				/>
				{/* <input
					onChange={(e) => {
						e.usernameUpdate(dispatch);
					}}
					value={props.usernameUpdate(dispatch)}
					type="text"
					placeholder="Enter Password"
				/> */}
				<button onClick={() => usernameUpdate(dispatch)}>Submit</button>
			</form>
		</div>
	);
}
