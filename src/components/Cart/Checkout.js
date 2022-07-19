import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = val => val.trim() === "";
const isNotFiveLong = val => val.trim().length !== 5;

const Checkout = props => {
	const [formValidity, setFormValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const cityInputRef = useRef();
	const postalInputRef = useRef();

	const confirmHandler = event => {
		event.preventDefault();

		const nameValue = nameInputRef.current.value;
		const streetValue = streetInputRef.current.value;
		const cityValue = cityInputRef.current.value;
		const postalValue = postalInputRef.current.value;

		const enteredNameIsValid = !isEmpty(nameValue);
		const enteredStreetIsValid = !isEmpty(streetValue);
		const enteredCityIsValid = !isEmpty(cityValue);
		const enteredPostalIsValid = !isNotFiveLong(postalValue);

		setFormValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: enteredPostalIsValid,
		});

		const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

		if (!formIsValid) return;
		props.onConfirm({
			name: nameValue,
			city: cityValue,
			street: streetValue,
			postal: postalValue,
		});
	};

	const nameControlClasses = `${classes.control} ${
		!formValidity.name && classes.invalid
	}`;
	const streetControlClasses = `${classes.control} ${
		!formValidity.street && classes.invalid
	}`;
	const postalControlClasses = `${classes.control} ${
		!formValidity.postalCode && classes.invalid
	}`;
	const cityControlClasses = `${classes.control} ${
		!formValidity.city && classes.invalid
	}`;

	return (
		<form onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text"
					id="name"
					ref={nameInputRef}
				/>
				{!formValidity.name && <p>Please enter a valid name</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor="street">Street</label>
				<input type="text"
					id="street"
					ref={streetInputRef}
				/>
				{!formValidity.street && (
					<p>Please enter a valid street name</p>
				)}
			</div>
			<div className={postalControlClasses}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text"
					id="postal"
					ref={postalInputRef}
				/>
				{!formValidity.postalCode && (
					<p>Please enter a valid postal code</p>
				)}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor="city">City</label>
				<input type="text"
					id="city"
					ref={cityInputRef}
				/>
				{!formValidity.city && <p>Please enter a valid city name</p>}
			</div>
			<button type="button"
				onClick={props.onCancel}
			>
        Cancel
			</button>
			<button type="submit">Order</button>
		</form>
	);
};

export default Checkout;
