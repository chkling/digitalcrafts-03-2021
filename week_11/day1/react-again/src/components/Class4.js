import React, { Component } from "react";

export default class Class4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 15,
		};
	}
	render() {
		return (
			<div>
				<p style={{ fontSize: this.state.size }}>Bigger or smaller?</p>
				<button
					onClick={() =>
						this.setState({
							size: this.state.size - 3,
						})
					}
				>
					{" "}
					Smaller
				</button>
				<button
					onClick={() =>
						this.setState({
							size: this.state.size + 3,
						})
					}
				>
					{" "}
					Bigger
				</button>
			</div>
		);
	}
}
