import { useReducer } from "react";
import CartItem from "../components/Cart/CartItem";
import CartContext from "./cart-context";

const reducer = (oldState, action) => {
	switch (action.type) {
	case "ADD_ITEM": {
		const updatedTotalAmount =
        oldState.totalAmount +
        action.payload.addedItem.amount * action.payload.addedItem.price;

		const existingItemIndex = oldState.items.findIndex(
			el => el.id === action.payload.addedItem.id
		);

		const existingCartItem = oldState.items[existingItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.payload.addedItem.amount,
			};
			updatedItems = [...oldState.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = oldState.items.concat(action.payload.addedItem);
		}

		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}
	case "REMOVE_ITEM": {
		const existingItemIndex = oldState.items.findIndex(
			el => el.id === action.payload.removedItemId
		);
		const existingCartItem = oldState.items[existingItemIndex];
		const updatedTotalAmount = oldState.totalAmount - existingCartItem.price;
		let updatedItems;
		if (existingCartItem.amount === 1) {
			updatedItems = oldState.items.filter(el => el.id !== action.payload.removedItemId);
		} else if (existingCartItem.amount > 1) {
			const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
			updatedItems = [...oldState.items];
			updatedItems[existingItemIndex] = updatedItem;
		}
		return { totalAmount: updatedTotalAmount, items: updatedItems };
	}
	}

	return initialState;
};

const initialState = {
	items: [],
	totalAmount: 0,
};

const CartProvider = props => {
	const [cartState, dispatch] = useReducer(reducer, initialState);

	const addItemToCartHandler = item => {
		dispatch({ type: "ADD_ITEM", payload: { addedItem: item } });
	};
	const removeItemFromCartHandler = id => {
		dispatch({ type: "REMOVE_ITEM", payload: { removedItemId: id } });
	};

	const cartContext = {
		items: [cartState.items],
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
