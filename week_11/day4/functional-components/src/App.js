import "./App.css";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [newUser, setNewUser] = useState("");

	return (
		<AppStyle className="App">
			<SignUpForm
				firstName={firstName}
				setFirstName={setFirstName}
				lastName={lastName}
				setLastName={setLastName}
				newUser={newUser}
				setNewUser={setNewUser}
				email={email}
				setEmail={setEmail}
			/>
			<UserDetails newUser={newUser} />
		</AppStyle>
	);
}

export default App;
