import { useContext } from "react";
import Modal from "../UI/Modal"; 
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
	const cartCtx = useContext(CartContext);
	const [items] = cartCtx.items;
	const hasItems = items.length > 0;
	const totalAmount = cartCtx.totalAmount.toFixed(2);

	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = item => {
		cartCtx.addItem({...item, amount: 1});
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{items.map(el => {
				return <CartItem key={el.id}
					name={el.name}
					amount={el.amount}
					price={el.price}
					onAdd={cartItemAddHandler.bind(null, el)}
					onRemove={cartItemRemoveHandler.bind(null, el.id)}
				/>;
			})}
		</ul>
	);

	return <Modal onKeyDown={e => {console.log(e, "key pressed");}}
		onClose={props.onClose}
	>
		{cartItems}
		<div className={classes.total}>
			<span>Total Amont</span>
			<span>${totalAmount}</span>
		</div>
		<div className={classes.actions}>
			<button onClick={props.onClose}
				className={classes["button--alt"]}
			>Close</button>
			{hasItems && <button className={classes["button"]}>Order</button>}	
		</div>
	</Modal>;
};

export default Cart;
