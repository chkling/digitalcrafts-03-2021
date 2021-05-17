import React, { Component } from "react";

export default class Weather extends Component {
	render() {
		return (
			<div
				style={{
					height: "300px",
					width: "500px",
					backgroundColor: "lightblue",
					margin: "20px",
				}}
			>
				<h1>Weather.js</h1>
				<p>{this.props.sun}</p>
				<p>{this.props.cloudy}</p>
				<p>{this.props.car}</p>
				<button onClick={() => this.props.setSpeeding(!this.props.speeding)}>
					{this.props.speeding
						? "Person is not speeding"
						: "Person is speeding"}
				</button>
			</div>
		);
	}
}
