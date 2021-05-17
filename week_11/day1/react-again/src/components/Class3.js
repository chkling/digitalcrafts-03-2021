import React, { Component } from "react";

export default class Class3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "black",
		};
	}
	render() {
		return (
			<div style={{ color: this.state.color }}>
				<p>Rainbow Check</p>
				<button
					onClick={() =>
						this.setState({
							color: "red",
						})
					}
				>
					R
				</button>
				<button
					onClick={() =>
						this.setState({
							color: "orange",
						})
					}
				>
					O
				</button>
				<button
					onClick={() =>
						this.setState({
							color: "yellow",
						})
					}
				>
					Y
				</button>
				<button
					onClick={() =>
						this.setState({
							color: "green",
						})
					}
				>
					G
				</button>
				<button
					onClick={() =>
						this.setState({
							color: "blue",
						})
					}
				>
					B
				</button>
				<button
					onClick={() =>
						this.setState({
							color: "indigo",
						})
					}
				>
					I
				</button>
				<button
					onClick={() =>
						this.setState({
							color: "violet",
						})
					}
				>
					V
				</button>
			</div>
		);
	}
}
