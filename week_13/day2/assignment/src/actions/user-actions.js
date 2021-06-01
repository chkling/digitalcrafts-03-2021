import { UPDATE_USERNAME } from "../action-types/user-action-types";

export const usernameUpdate = (dispatch, payload) => {
	return dispatch({
		type: UPDATE_USERNAME,
		payload,
	});
};
