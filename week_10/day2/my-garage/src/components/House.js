import React, { Component } from "react";
import Garage from "./Garage";

export default class House extends Component {
	render() {
		return (
			<div>
				<h1>In the house. Let's go to the Garage.</h1>
				<Garage />
			</div>
		);
	}
}
