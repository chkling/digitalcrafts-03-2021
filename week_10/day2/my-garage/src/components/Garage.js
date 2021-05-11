import React, { Component } from "react";
import MuscleCarSection from "./Muscle-Car-Section";
import ExoticCarSection from "./Exotic-Car-Section";
import MotorcycleSection from "./Motorcycle-Section";

export default class Garage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicles: [
				{
					motorcycles: [
						{
							american: [
								{
									name: "Harley Davidson",
								},
								{
									name: "Another",
								},
							],
						},
						{
							foreign: [
								{
									name: "Yamaha",
								},
							],
						},
					],
					exotic: [
						{
							american: [
								{
									name: "Corvette",
								},
							],
						},
						{
							foreign: [
								{
									name: "Lamborghini",
								},
							],
						},
					],
					muscle: [
						{
							american: [
								{
									name: "Ford Mustang",
								},
							],
						},
						{
							foreign: [
								{
									name: "Valiant Charger",
								},
							],
						},
					],
				},
			],
		};
	}
	render() {
		console.log(this.state.vehicles);
		return (
			<div>
				<h2>In the garage. Let's check out our cars.</h2>
				<MuscleCarSection vehicles={this.state.vehicles} />
				<ExoticCarSection vehicles={this.state.vehicles} />
				<MotorcycleSection vehicles={this.state.vehicles} />
			</div>
		);
	}
}
