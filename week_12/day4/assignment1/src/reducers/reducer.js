import { ADD, SUBTRACT } from "../action-types/action-types";

const initialState = {
	count: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return { ...state, count: state.count + 1 };
		case SUBTRACT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
