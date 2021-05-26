const initialState = {
	name: "Calvin",
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "JOE":
			return { ...state, name: "Joe" };
		default:
			return state;
	}
}

export default rootReducer;
