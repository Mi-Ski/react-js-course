import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = props => {
	const itemsArr = useSelector(state => state.cartContent.items);
	console.log(itemsArr);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{itemsArr.map(el => (
					<CartItem key={el.itemId}
						item={{
							title: el.title,
							total: el.totalPrice,
							description: el.description,
							price: el.price,
							quantity: el.quantity,
							id: el.itemId,
							key: el.itemId
						}}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
