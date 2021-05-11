import "./App.css";
import Weather from "./Weather";
import React, { Component } from "react";

export default class App extends Component {
	// create the constructor (props)
	// invoke super inside of the constructor, pass it props as an argument as well
	// define this.state={}
	constructor(props) {
		super(props);
		// state management

		// the process of components passing data to each other is called props

		// the process of a component managing its own data and preserving it in a holding space, temporarily
		// this is called state management
		this.state = {
			counter: 0,
			title: "State Management",
			rainingInHouston: true,
			bunny: "bunny ears",
			restaurants: [
				{
					name: "Uchi",
				},
				{
					name: "Jinya",
				},
			],
			monitors: 2,
		};
		// this.setState
	}
	// the name of the left is how you access the component on the right joe
	// recommends to name it the same
	render() {
		const { counter, title, rainingInHouston, bunny, restaurants, monitors } =
			this.state;
		return (
			<div>
				<h1>State Management</h1>
				<p>Title: {title} </p>
				<p>
					Is it raining in Houston?
					<Weather
						rainingInHouston={rainingInHouston}
						bunny={bunny}
						restaurants={restaurants}
						monitors={monitors}
					/>
				</p>
				<button
					onClick={() =>
						this.setState({
							rainingInHouston: !rainingInHouston,
						})
					}
				>
					{rainingInHouston ? "Beautiful Sunny Day" : "Ahh it's raining!"}{" "}
				</button>
				{/* <input type="text" onBlur={(e) => console.log(e.target.value)}></input> */}
				{/* <input type="text" onClick={(e) => console.log(e.target.value)}></input> */}
				<p>Counter: {counter} </p>
				<button
					onClick={() =>
						this.setState({
							counter: this.state.counter + 1,
						})
					}
				>
					Add
				</button>
				<button
					onClick={() =>
						this.setState({
							counter: this.state.counter - 1,
						})
					}
				>
					Subtract
				</button>
			</div>
		);
	}
}
