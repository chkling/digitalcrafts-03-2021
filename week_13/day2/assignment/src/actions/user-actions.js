import { UPDATE_USERNAME } from "../action-types/user-action-types";

export const usernameUpdate = (dispatch) => {
	return dispatch({
		type: UPDATE_USERNAME,
	});
};
