import React, { Component } from "react";
import "../App.css";

export default class Form extends Component {
	state = {
		firstName: "Calvin",
		lastName: "Kling",
		streetAddress: "400 Lake Drive",
		apt: "1",
		city: "Maple Grove",
		state: "MN",
		country: "USA",
		postalCode: "55369",
		phone: "123-123-1234",
		loading: false,
	};

	handleInputFormValues = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		this.setState({
			loading: true,
		});
		const {
			firstName,
			lastName,
			streetAddress,
			apt,
			city,
			state,
			country,
			postalCode,
			phone,
		} = this.state;
		e.preventDefault();
		// const url = "http://etcetc";
		// const apiKey = "idjoafdsiofjadosfoiadsif";
		// const supabase = createClient;

		const formSubmission = {
			username: firstName + lastName,
			address:
				streetAddress +
				" " +
				apt +
				" " +
				city +
				" " +
				state +
				" " +
				postalCode +
				" " +
				country,
			phoneNumber: phone,
		};
		console.log({ formSubmission });
		// const formSubmissionData = {
		// 	restaurantName: firstName + lastName,
		// };
		// const { data, error } = await supabase
		// 	.from("restaurants")
		// 	.insert([formSubmissionData]);
		// if(data.length != 0) {
		//     setTimeout(this.setState({
		//         loading: false
		//     }), 4000);
		// }
		// line below - add to DB and structure DB the right way
		// const formSubmission = await fetch(url, { formSubmission });
		// console.log(Object.values(e.target));
	};

	render() {
		return (
			<div>
				<h1 className="shipping-form-header">Forms React</h1>
				<div className="shipping-form-container">
					<form className="shipping-form" onSubmit={this.handleSubmit}>
						<input
							name="firstName"
							type="text"
							placeholder="First Name"
							className="shipping-input-text"
							value={this.state.firstName}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="lastName"
							autoComplete="off"
							type="text"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="streetAddress"
							type="text"
							placeholder="Street Address"
							className="shipping-input-text-street"
							value={this.state.streetAddress}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="apt"
							type="text"
							placeholder="Apt, Suite"
							className="shipping-input-text-apt"
							value={this.state.apt}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="city"
							className="shipping-input-text"
							type="text"
							placeholder="City"
							value={this.state.city}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="state"
							className="shipping-input-text"
							type="text"
							placeholder="State"
							value={this.state.state}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="postalCode"
							type="text"
							placeholder="Postal Code"
							className="shipping-input-text"
							value={this.state.postalCode}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="country"
							className="shipping-input-text"
							type="text"
							placeholder="Country"
							value={this.state.country}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="phone"
							type="text"
							placeholder="Phone Number"
							className="shipping-input-text"
							value={this.state.phone}
							onChange={this.handleInputFormValues}
						></input>
						<input
							name="submit"
							className="shipping-input-button"
							type="submit"
							placeholder="Submit"
							disabled={this.state.loading}
							value={this.state.loading ? "Sending Data" : "Submit"}
						></input>
					</form>
				</div>
			</div>
		);
	}
}
