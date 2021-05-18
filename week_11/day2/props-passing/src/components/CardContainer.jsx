import React, { Component } from "react";
import Card from "./Card.jsx";

export default class CardContainer extends Component {
	render() {
		const { pokemonData } = this.props;
		console.log(pokemonData[0].pokemon);
		return (
			<div>
				<h1>Card Container</h1>
				{pokemonData[0].pokemon.map((singlePokemon, index) => {
					<Card key={singlePokemon.name} pokemon={singlePokemon} />;
				})}
			</div>
		);
	}
}
