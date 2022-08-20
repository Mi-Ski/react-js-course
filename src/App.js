import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Layout/Notification";
import { cartShownActions } from "./store/layout/cartShownSlice";

let initialLoad = true;

function App() {
	const dispatch = useDispatch();
	const cartShown = useSelector(state => state.cartShown.shown);
	const cart = useSelector(state => state.cartContent);

	const notificationState = useSelector(
		state => state.cartShown.notification
	);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				cartShownActions.showNotification({
					status: "pending",
					title: "Sending",
					message: "Sending cart data",
				})
			);

			const response = await fetch(
				"https://react-app-869e8-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			dispatch(
				cartShownActions.showNotification({
					status: "success",
					title: "Success",
					message: "Sent cart data",
				})
			);
		};

		if (initialLoad) {
			initialLoad = false;
			return;
		}

		sendCartData().catch(error => {
			dispatch(
				cartShownActions.showNotification({
					status: "error",
					title: "Error	",
					message: "Seding cart data failed",
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<Layout>
			{cartShown && <Cart />}
			{notificationState && <Notification {...notificationState} />}
			<Products />
		</Layout>
	);
}

export default App;
