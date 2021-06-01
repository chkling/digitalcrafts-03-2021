import React from "react";
import { useSelector } from "react-redux";

export default function UserDetails() {
	const userDetails = useSelector((state) => state.userDetails);
	console.log(userDetails);
	return (
		<div>
			<h1>User Details</h1>
			<p>{userDetails.username}</p>
			<p>{userDetails.email}</p>
		</div>
	);
}
