import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartContentActions } from "../../store/layout/cartContentSlice";

const CartItem = props => {
	const dispatch = useDispatch();

	const { title, quantity, total, price, id } = props.item;

	const removeItem = () => {
		dispatch(cartContentActions.removeItem(id));
	};

	const addItem = () => {
		dispatch(cartContentActions.addItem({id, title, price}));
	};

	console.log(id);
	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
				${total ? total.toFixed(2) : 0}{" "}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
          x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={() => removeItem()}>-</button>
					<button onClick={() => addItem()}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
