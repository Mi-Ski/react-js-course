import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartBtn = props => {
	const ctx = useContext(CartContext);
	const [items] = ctx.items;
	const numberOfItems = items.reduce( (whole, el) =>  whole + el.amount, 0); 

	return (
		<button onClick={props.onClick}
			className={classes.button}
		>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfItems}</span>
		</button>
	);
};

export default HeaderCartBtn;
