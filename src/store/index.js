import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
	count: 0,
	counterShown: true,
};

const counterSlice = createSlice({
	name: "count",
	initialState: initialCounterState,
	reducers: {
		decrement: state => {
			state.count -= 1;
		},
		increment: state => {
			state.count += 1;
		},
		incrementBy: (state, action) => {
			state.count += action.payload;
		},
		toggleCounter: state => {
			state.counterShown = !state.counterShown;
		}
	}
});

const initialAuthState = {
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login: state => {
			state.isLoggedIn = true;
		},
		logout: state => {
			state.isLoggedIn = false;
		}
	}
});

const store = configureStore({
	reducer: {
		count: counterSlice.reducer,
		auth: authSlice.reducer
	},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
