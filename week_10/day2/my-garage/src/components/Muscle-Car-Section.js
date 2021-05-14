import React, { Component } from "react";
import AmericanCars from "./American-Cars";

export default class MuscleCarSection extends Component {
	render() {
		// console.log(this.props);
		// console.log(this.props[0}].vehicles[1].muscle[0]);
		return (
			<div>
				<h3>Muscle Car Section. Let's see which types.</h3>
				<AmericanCars />
				{/* <AmericanCars car={this.props.vehicles[2].muscle[0]} /> */}
			</div>
		);
	}
}
