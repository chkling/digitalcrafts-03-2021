const initialState = {
	counter: 0,
	userName: "Cal",
	address: {},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD":
			return { ...state, counter: state.counter + 1 };
		case "SUBTRACT":
			return { ...state, counter: state.counter - 1 };
		case "CHANGE_NAME":
			return { ...state, userName: action.value };
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
