import { UPDATE_EMAIL } from "../action-types/email-action-types";

const initialState = "";

const email = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_EMAIL:
			return (state = state.target.value);
		default:
			return state;
	}
};

export default email;
