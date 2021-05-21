import {
	SignUpButton,
	SignUpFormInput,
	SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";
import React from "react";

export default function SignUpForm({ firstName, setFirstName, setNewUser }) {
	const onSubmit = (e) => {
		e.preventDefault();
		setNewUser = {
			firstName: firstName,
		};
	};

	return (
		<div>
			<h1>Create Account</h1>
			<SignUpFormDiv onSubmit={onSubmit}>
				<SignUpFormInput
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
					type="text"
					placeholder="First Name"
				/>
				<SignUpFormInput type="text" placeholder="Last Name" />
				<SignUpFormInput type="email" placeholder="Email" />
				<SignUpFormInput type="password" placeholder="Password" />
				<SignUpFormInput type="password" placeholder="Re-Type Password" />
				<SignUpButton>Sign Up</SignUpButton>
			</SignUpFormDiv>
		</div>
	);
}
