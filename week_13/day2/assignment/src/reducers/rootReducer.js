import { combineReducers } from "redux";
import username from "./userReducer";
import email from "./emailReducer";
import userDetails from "./userDetailsReducer";

const rootReducer = combineReducers({
	username,
	email,
	userDetails,
});

export default rootReducer;
