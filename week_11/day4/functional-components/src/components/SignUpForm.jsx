import {
	SignUpButton,
	SignUpFormInput,
	SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";

export default function SignUpForm(props) {
	return (
		<div>
			<h1>Create Account</h1>
			<SignUpFormDiv>
				<SignUpFormInput
					onChange={(e) => props.setFirstName(e.target.value)}
					value={props.firstName}
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
