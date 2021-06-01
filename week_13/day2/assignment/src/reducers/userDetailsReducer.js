import { ADD_USER } from "../action-types/email-action-types";

const initialState = {};

const email = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return (state = state.target.value);
		default:
			return state;
	}
};

export default email;
