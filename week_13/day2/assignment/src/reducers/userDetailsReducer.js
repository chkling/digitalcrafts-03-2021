import { ADD_USER } from "../action-types/userDetails-action-types";

const initialState = "";

const userDetails = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return (state = action.payload);
		default:
			return state;
	}
};

export default userDetails;
