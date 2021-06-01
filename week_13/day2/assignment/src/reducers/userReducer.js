import { UPDATE_USERNAME } from "../action-types/user-action-types";

const initialState = "";

const username = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USERNAME:
			return (state = "Calvin");
		default:
			return state;
	}
};

export default username;
