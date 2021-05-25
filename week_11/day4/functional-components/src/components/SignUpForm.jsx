import {
	SignUpButton,
	SignUpFormInput,
	SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";
import React from "react";

export default function SignUpForm({
	firstName,
	setFirstName,
	lastName,
	setLastName,
	email,
	setEmail,
	newUser,
	setNewUser,
}) {
	const onSubmit = (e) => {
		e.preventDefault();
		newUser = {
			firstName: firstName,
			lastName: lastName,
			email: email,
		};
		setNewUser(newUser);
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
				<SignUpFormInput
					onChange={(e) => setLastName(e.target.value)}
					value={lastName}
					type="text"
					placeholder="Last Name"
				/>
				<SignUpFormInput
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					placeholder="Email"
				/>
				<SignUpFormInput type="password" placeholder="Password" />
				<SignUpFormInput type="password" placeholder="Re-Type Password" />
				<SignUpButton>Sign Up</SignUpButton>
			</SignUpFormDiv>
		</div>
	);
}
