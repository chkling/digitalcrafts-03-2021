import React from "react";

export default function UserDetails(props) {
	console.log(props);
	return (
		<div>
			<h1>User Detail</h1>
			<p>{props.newUser.firstName}</p>
			<p>{props.newUser.lastName}</p>
			<p>{props.newUser.email}</p>
		</div>
	);
}
