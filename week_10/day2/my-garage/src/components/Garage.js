import React, { Component } from "react";
import MuscleCarSection from "./Muscle-Car-Section";
import ExoticCarSection from "./Exotic-Car-Section";
import MotorcycleSection from "./Motorcycle-Section";

export default class Garage extends Component {
	render() {
		return (
			<div>
				<h2>In the garage. Let's check out our cars.</h2>
				<MuscleCarSection />
				<ExoticCarSection />
				<MotorcycleSection />
			</div>
		);
	}
}
