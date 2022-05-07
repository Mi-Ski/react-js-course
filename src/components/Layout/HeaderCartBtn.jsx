import { useState, useEffect, useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartBtn = props => {
	const [animationPlaying, setAnimationPlaying] = useState(false);
	const ctx = useContext(CartContext);
	const [items] = ctx.items;
	const numberOfItems = items.reduce( (whole, el) =>  whole + el.amount, 0); 
	

	const buttonClasses = `${classes.button} ${animationPlaying && classes.bump}`;
	useEffect(() => {
		if (ctx.items[0].length === 0) return;
		setAnimationPlaying(true);
		setTimeout(() => {
			setAnimationPlaying(false);
		}, 300);
	}, [numberOfItems]);

	return (
		<button onClick={props.onClick}
			className={buttonClasses}
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
