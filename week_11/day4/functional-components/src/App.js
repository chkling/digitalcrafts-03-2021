import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

function App() {
	const [firstName, setFirstName] = useState("");
	const [newUser, setNewUser] = useState("");

	const setNewUserDetails = (firstName) => {
		setNewUser(firstName);
	};

	return (
		<AppStyle className="App">
			{/* <ClassBased /> */}
			<SignUpForm
				firstName={firstName}
				setFirstName={setFirstName}
				setNewUserDetails={setNewUserDetails}
			/>
			<UserDetails firstName={newUser} />
		</AppStyle>
	);
}

export default App;
