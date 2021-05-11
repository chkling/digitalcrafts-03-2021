import React, { Component } from "react";
import AmericanMotorcycles from "./American-Motorcycles";
import ForeignMotorcycles from "./Foreign-Motorcycles";

export default class MotorcycleSection extends Component {
	render() {
		return (
			<div>
				<h3>Motorcycle Section. Let's see which types.</h3>
				<AmericanMotorcycles />
				<ForeignMotorcycles />
			</div>
		);
	}
}
