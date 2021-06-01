import { UPDATE_EMAIL } from "../action-types/email-action-types";

export const emailUpdate = (dispatch) => {
	return dispatch({
		type: UPDATE_EMAIL,
	});
};
