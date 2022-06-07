import { useState } from "react";

const useInput = validateInputFunct => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	// bool is re-evaluated on every state update
	const valueIsValidBool = validateInputFunct(enteredValue);
	const hasError = !valueIsValidBool && isTouched;

	const valueChangeHandler = event => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = event => {
		setIsTouched(true);
	};

	// hook call returns 4 things: current value, hasError bool,
	// current value and touched bool satate setters
	return {
		value: enteredValue,
		isValid: valueIsValidBool,
		hasError,
		valueChangeHandler,
		inputBlurHandler
	};

};

export default useInput;