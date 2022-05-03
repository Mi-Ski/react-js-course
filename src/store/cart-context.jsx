import React from "react";

// autocompletion
const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: item => {},
	removeItem: id => {},
});

export default CartContext;