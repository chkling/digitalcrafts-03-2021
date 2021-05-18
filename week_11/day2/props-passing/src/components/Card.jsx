import React, { Component } from "react";
import "./cardContainer.css";

export default class Card extends Component {
	state = {
		flip: false,
	};
	render() {
		const { hp, id, name, sprites } = this.props.pokemon;
		return (
			<div className="pokemon-card">
				<img src={this.state.flip ? sprites.back : sprites.front} alt="" />
				<h2>{name}</h2>
				<p>#{id}</p>
				<p>HP : {hp}</p>
				<button onClick={() => this.setState({ flip: !this.state.flip })}>
					Flip
				</button>{" "}
			</div>
		);
	}
}
