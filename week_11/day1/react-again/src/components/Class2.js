import React, { Component } from "react";

export default class Class2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mood: "unsure",
		};
	}
	render() {
		return (
			<div>
				<p>I am feeling... {this.state.mood} </p>
				<button
					onClick={() =>
						this.setState({
							mood: "happy",
						})
					}
				>
					{" "}
					Good
				</button>
				<button
					onClick={() =>
						this.setState({
							mood: "sad",
						})
					}
				>
					{" "}
					Bad
				</button>
			</div>
		);
	}
}
