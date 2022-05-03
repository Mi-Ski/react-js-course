import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";

const MealItemForm = props => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = e => {
		e.preventDefault();
		
		const enteredAmount = +amountInputRef.current.value;
		if (
			!enteredAmount ||
			// enteredAmount.trim().length === 0 ||
			enteredAmount < 1 || 
			enteredAmount > 5
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmount);
	};

	const inputConfig = {
		type: "number",
		id: props.id + "df",
		min: 1,
		max: 5,
		step: 1,
		defaultValue: 1,
	};
	return (
		<form onSubmit={submitHandler}
			className={classes.form}
		>
			<Input ref={amountInputRef}
				label="Amount"
				input={inputConfig}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
