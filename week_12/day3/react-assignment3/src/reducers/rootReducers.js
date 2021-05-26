const initialState = {
	contacts: [],
	names: "",
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_NAMES":
			return;
		default:
			return state;
	}
}
