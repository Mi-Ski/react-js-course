import classes from "./CartButton.module.css";
import { cartShownActions } from "../../store/layout/cartShownSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = props => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cartContent.totalQuantity);

	return (
		<button className={classes.button}
			onClick={() => dispatch(cartShownActions.toggleCart())}
		>
			<span>My Cart</span>
			<span className={classes.badge}>{items}</span>
		</button>
	);
};

export default CartButton;
