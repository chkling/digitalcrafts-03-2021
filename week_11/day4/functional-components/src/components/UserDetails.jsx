import React from "react";

export default function UserDetails({ firstName }) {
	console.log(firstName);
	return (
		<div>
			<h1>User Detail</h1>
			<p>{firstName.firstName}</p>
		</div>
	);
}
