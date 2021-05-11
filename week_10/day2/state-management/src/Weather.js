import React, { Component } from "react";
import "./App.css";

export default class Weather extends Component {
	render() {
		console.log(this.props.rainingInHouston);
		return (
			<div>
				<p>
					The weather in Houston is{" "}
					{this.props.rainingInHouston ? "RAIN" : "SUN"}
				</p>
				<p>I want the bunny ears to show! {this.props.bunny}</p>
				<h1>Restaurants</h1>
				{this.props.restaurants.map((restaurant) => {
					return <p>{restaurant.name}</p>;
				})}
				<p>The amount of monitors I have is: {this.props.monitors}</p>
			</div>
		);
	}
}
