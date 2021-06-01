import { ADD_USER } from "../action-types/userDetails-action-types";

export const addUser = (dispatch) => {
	return dispatch({
		type: ADD_USER,
	});
};
