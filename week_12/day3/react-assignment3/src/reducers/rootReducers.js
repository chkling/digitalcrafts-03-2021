const initialState = {
	contacts: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_NAMES":
			return { ...state, contacts: [{ name: "Joe" }, { name: "Mikael" }] };
		default:
			return state;
	}
}

export default rootReducer;
