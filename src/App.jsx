import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartModalVisible, setCartModalVisible] = useState(false);

	window.addEventListener("keydown", event => {
		if (event.key === "Escape" && cartModalVisible) {
			hideModalHandler();
		}
	});

	const showModalHandler = () => {
		setCartModalVisible(true);
	};
	const hideModalHandler = () => {
		setCartModalVisible(false);
	};

	return (
		<CartProvider>
			{cartModalVisible && <Cart onClose={hideModalHandler} />}
			<Header onShowModal={showModalHandler}
				onHideModal={hideModalHandler}
			/>
			<main>
				<Meals />
			</main>
		</CartProvider>	
	);
}

export default App;
