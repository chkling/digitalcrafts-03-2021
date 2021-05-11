import React, { Component } from "react";
import House from "./components/House";

export default class App extends Component {
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
		const { vehicles } = this.state;
		return (
			<div>
				<House vehicles={vehicles} />
			</div>
		);
	}
}
