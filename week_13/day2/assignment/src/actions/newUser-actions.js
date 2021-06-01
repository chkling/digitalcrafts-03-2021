import { ADD_USER } from "../action-types/userDetails-action-types";

export const addUser = (dispatch, username, email) => {
	return dispatch({
		type: ADD_USER,
		payload: { username, email },
	});
};
