import { ADD_CONTACTS } from "../action-types/action-types";

const initialState = {
	contacts: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTACTS:
			return { ...state, contacts: [{ name: "Joe" }, { name: "Mikhael" }] };
		default:
			return state;
	}
};
