import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeFakeDataToCalvin,
	changeGovOfficial,
	removeElon,
} from "../actions/greetingActions";

export default function Greeting() {
	const dispatch = useDispatch();
	const fakeData = useSelector((state) => state.fakeData);
	const governmentOfficials = useSelector((state) => state.governmentOfficials);
	const celebrities = useSelector((state) => state.celebrities);
	return (
		<div>
			<h1>Hello Redux</h1>
			<div>
				{fakeData.map((data) => (
					<p>{data.username}</p>
				))}
			</div>
			<button onClick={() => changeFakeDataToCalvin(dispatch)}>
				Change Name
			</button>
			<div>
				{governmentOfficials.map((data) => (
					<p>{data}</p>
				))}
			</div>
			<button onClick={() => changeGovOfficial(dispatch)}>Add Senator</button>
			<div>
				{celebrities.map((celebrity) => (
					<p>{celebrity.name}</p>
				))}
			</div>
			<button onClick={() => removeElon(dispatch)}>Remove Doge Lord</button>
		</div>
	);
}
