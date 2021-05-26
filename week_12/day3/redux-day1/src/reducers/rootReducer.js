const initialState = {
	counter: 0,
	userName: "",
	address: {},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD":
			return { counter: state.counter + 1 };
		case "SUBTRACT":
			return { counter: state.counter - 1 };
		default:
			return state;
	}
}

export default rootReducer;

// function gamerDrink(redbull = "orginal") {}
// // will assign default to original
// gamerDrink();
// // will assign to new value blueberry
// gamerDrink("blueberry");
