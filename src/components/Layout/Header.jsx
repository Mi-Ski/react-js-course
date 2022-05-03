import mealsImage from "../../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

import classes from "./Header.module.css";

const Header = props => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartBtn onClick={ props.onShowModal} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage}
					alt="Image of some meals"
				/>
			</div>
		</>
	);
};

export default Header;
