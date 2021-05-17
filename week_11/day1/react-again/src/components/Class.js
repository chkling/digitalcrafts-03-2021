import React, { Component } from "react";

export default class Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		// super allows us to have access to the constructor and modify/change the framework
		// state is a container that holds data and lets us have access to it

		// this refers to the entire class
		// this allows you to have access to individual elements, things, stuff on this class
		// this = the word used to access the unique elements of a class
		// this is unique to a class in JS
		// this is even more unique in that it refers to that specific class
		// state = {
		//     count: 0,
		// }
	}
	// setState, allows you to access the state object
	render() {
		console.log(this.props.getDate());
		return (
			<div
				style={{
					height: "300px",
					width: "500px",
					backgroundColor: "lightblue",
					margin: "20px",
				}}
			>
				<h1>Class.js</h1>
				<h3>
					Info from App.js:{" "}
					{this.props.greeting ? this.props.greeting : "nothing yet"}
				</h3>
				<p>This is the count {this.state.count}</p>
				<button
					onClick={() =>
						this.setState({
							count: this.state.count + 1,
						})
					}
				>
					Add
				</button>
				<button
					onClick={() =>
						this.setState({
							count: this.state.count - 1,
						})
					}
				>
					Subtract
				</button>
			</div>
		);
	}
}

// import React, { Component } from 'react'

// export class Highway extends Component {
//     constructor(props) {
//         super(props);
//         steel
//         concrete
//         plans
//         construction workers
//         manager
//         money

//     }

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default Class
