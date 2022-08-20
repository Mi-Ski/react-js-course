
import { configureStore } from "@reduxjs/toolkit";
import cartShownSlice from "./layout/cartShownSlice";
import cartContentSlice from "./layout/cartContentSlice";


const store = configureStore({
	reducer: {
		cartShown: cartShownSlice,
		cartContent: cartContentSlice,
	}
});

export default store;