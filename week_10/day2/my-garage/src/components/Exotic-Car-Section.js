import React, { Component } from "react";
import AmericanExCars from "./American-Ex-Cars";
import ForeignExCars from "./Foreign-Ex-Cars";

export default class ExoticCarSection extends Component {
	render() {
		return (
			<div>
				<h3>Exotic Car Section. Let's see which types.</h3>
				<AmericanExCars />
				<ForeignExCars />
			</div>
		);
	}
}
