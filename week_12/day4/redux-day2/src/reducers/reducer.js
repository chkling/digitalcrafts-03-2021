import {
	ADD,
	CHANGE_GOV_OFFICIAL,
	REMOVE_DOGE_LORD,
} from "../action-types/action-types";

const initialState = {
	fakeData: [{ username: "Dog", height: "3.0" }],
	governmentOfficials: ["Mayor", "VP", "Secretary of Treasury"],
	celebrities: [
		{
			name: "Elon Musk",
		},
		{
			name: "Sam Elliot",
		},
		{
			name: "Mark Zucky",
		},
	],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return { ...state, fakeData: [{ username: "Calvin", height: "6.0" }] };
		case CHANGE_GOV_OFFICIAL:
			return {
				...state,
				governmentOfficials: [...state.governmentOfficials, "Senator"],
			};
		case REMOVE_DOGE_LORD:
			const newCelebs = state.celebrities.filter(
				(celebrity) => celebrity.name !== "Elon Musk"
			);
			return { ...state, celebrities: newCelebs };
		default:
			return state;
	}
};
