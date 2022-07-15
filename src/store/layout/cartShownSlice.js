import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shown: false,
	notification: null
};

const cartShownSlice = createSlice({
	name: "cartShown",
	initialState,
	reducers: {
		toggleCart: state => {
			state.shown = !state.shown;
		},
		showNotification: (state, action) => {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message
			};
		},
		hideNotification: state => {
			state.notification = null;
		}
	},
});

export const cartShownActions = cartShownSlice.actions;
export default cartShownSlice.reducer;
