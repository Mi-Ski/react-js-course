import { useState, useEffect } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = props => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		isValid: enteredNameIsValid
	} = useInput(value => value.trim() !== "");

	const [formIsValid, setFormIsValid] = useState(false);

	const enteredEmailIsValid = enteredEmail.match(/\S+@\S+\.\S+/);

	const emailInputIsInvalid =
    enteredEmailTouched && !enteredEmailIsValid;

	useEffect(() => {
		if (enteredNameIsValid && enteredEmailIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [enteredNameIsValid, enteredEmailIsValid]);


	const emailChangeHandler = e => {
		setEnteredEmail(e.target.value);
		console.log(enteredEmailIsValid);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const inputSubmitHandler = e => {
		e.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		setEnteredName("");
		setEnteredEmail("");
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	};

	const formInputNameClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	const formInputEmailClasses = emailInputIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={inputSubmitHandler}>
			<div className={formInputNameClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text"
					id="name"
					onChange={nameChangeHandler}
					value={enteredName}
					onBlur={nameBlurHandler}
				/>
				{nameInputIsInvalid && (
					<p style={{ color: "red" }}>Name must not be empty.</p>
				)}
			</div>
			<div className={formInputEmailClasses}>
				<label htmlFor="email">Your Email</label>
				<input type="email"
					id="email"
					onChange={emailChangeHandler}
					value={enteredEmail}
					onBlur={emailInputBlurHandler}
				/>
				{emailInputIsInvalid && (
					<p style={{ color: "red" }}>Email isn't valid.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
