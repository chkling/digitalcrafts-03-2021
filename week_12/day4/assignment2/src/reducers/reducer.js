import { CHANGE } from "../action-types/action-types";

const initialState = {
	name: "Calvin",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE:
			return { ...state, name: "Joe" };
		default:
			return state;
	}
};
