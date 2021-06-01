import { UPDATE_USERNAME } from "../action-types/user-action-types";

export const usernameUpdate = (dispatch, inputValue) => {
	return dispatch({
		type: UPDATE_USERNAME,
		payload: inputValue,
	});
};
