import React from "react";
import { emailUpdate } from "../actions/email-actions";
import { usernameUpdate } from "../actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/newUser-actions";

export default function Form() {
	const dispatch = useDispatch();
	const email = useSelector((state) => state.email);
	const username = useSelector((state) => state.username);
	return (
		<div>
			<h1>Form</h1>
			<form action="">
				<input
					onChange={(e) => {
						usernameUpdate(dispatch, e.target.value);
					}}
					type="text"
					placeholder="Enter Username"
				/>
				<input
					onChange={(e) => {
						emailUpdate(dispatch, e.target.value);
					}}
					type="text"
					placeholder="Enter Email Address"
				/>
				<button
					onClick={(e) => e.preventDefault(addUser(dispatch, username, email))}
				>
					Submit
				</button>
			</form>
		</div>
	);
}
