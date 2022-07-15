import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalQuantity: 0,
	totalAmount: 0,
};

const cartContentSlice = createSlice({
	name: "cartContent",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const newItem = action.payload;
			// element in cart (if exists)
			const existingItem = state.items.find(item => item.itemId === newItem.id);

			if (!existingItem) {
				state.items.push({
					itemId: newItem.id,
					description: newItem.description,
					quantity: 1,
					price: newItem.price,
					totalPrice: newItem.price,
					title: newItem.title
				});

				state.totalQuantity += 1;
			} else {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;

				state.totalQuantity++;
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			console.log(id + " removing");

			const existingItem = state.items.find(el => el.itemId === id);
			state.totalQuantity--;

			if (existingItem) {
				if (existingItem.quantity === 1) {
					state.items = state.items.filter(el => el.itemId != id);
				} else {
					existingItem.quantity--;
					existingItem.totalPrice -= existingItem.price;
				}
			}
		},
	},
});

export const cartContentActions = cartContentSlice.actions;
export default cartContentSlice.reducer;
