import "./App.css";

function App() {
	return (
		<div className="App">
			<h1 className="shipping-form-header">Forms React</h1>
			<div className="shipping-form-container">
				<form className="shipping-form">
					<input
						autoComplete="off"
						type="text"
						placeholder="First Name"
						className="shipping-input-text"
					></input>
					<input autoComplete="off" type="text" placeholder="Last Name"></input>
					<input
						autoComplete="off"
						type="text"
						placeholder="Street Address"
						className="shipping-input-text-street"
					></input>
					<input
						autoComplete="off"
						type="text"
						placeholder="Apt, Suite"
						className="shipping-input-text-apt"
					></input>
					<input
						className="shipping-input-text"
						autoComplete="off"
						type="text"
						placeholder="City"
					></input>
					<input
						className="shipping-input-text"
						autoComplete="off"
						type="text"
						placeholder="State"
					></input>
					<input
						autoComplete="off"
						type="text"
						placeholder="Postal Code"
						className="shipping-input-text"
					></input>
					<input
						className="shipping-input-text"
						autoComplete="off"
						type="text"
						placeholder="Country"
					></input>
					<input
						autoComplete="off"
						type="text"
						placeholder="Phone Number"
						className="shipping-input-text"
					></input>
					<input
						className="shipping-input-button"
						type="submit"
						placeholder="Submit"
					></input>
				</form>
			</div>
		</div>
	);
}

export default App;
