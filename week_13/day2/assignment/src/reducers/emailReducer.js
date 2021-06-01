import { UPDATE_EMAIL } from "../action-types/email-action-types";

const initialState = "";

const username = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_EMAIL:
			return (state = "calvin@kling");
		default:
			return state;
	}
};

export default username;
