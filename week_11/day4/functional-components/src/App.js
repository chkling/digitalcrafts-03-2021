import "./App.css";
import React, { useState } from "react";
// import ClassBased from "./components/ClassBased";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";
import { AppStyle } from "./components/styledComponents/AppStyles";

function App() {
	const [firstName, setFirstName] = useState("");
	return (
		<AppStyle className="App">
			{/* <ClassBased /> */}
			<SignUpForm firstName={firstName} setFirstName={setFirstName} />
			<UserDetails />
		</AppStyle>
	);
}

export default App;
