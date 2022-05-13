import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (latestState, action) => {
	switch (action.type) {
	case "USR_INPUT":
		return { value: action.value, isValid: action.value.includes("@") };
	case "EMAIL_VALIDATE":
		return { ...latestState, isValid: action.value.includes("@") };
	default:
		return latestState;
	}
};

const passwordReducer = (latestState, action) => {
	switch (action.type) {
	case "USR_INPUT":
		return { value: action.value, isValid: action.value.trim().length > 6 };
	case "PASS_VALIDATE":
		return { ...latestState, isValid: action.value.trim().length > 6 };
	default:
		return latestState;
	}
};

const Login = props => {
	const ctx = useContext(AuthContext);
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: false,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: false,
	});

	// email & password onchange functions
	const emailChangeHandler = event => {
		dispatchEmail({ type: "USR_INPUT", value: event.target.value });
		setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const passwordChangeHandler = event => {
		console.log(event);
		dispatchPassword({ value: event.target.value, type: "USR_INPUT" });
		setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "EMAIL_VALIDATE", value: emailState.value });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ value: passwordState.value, type: "PASS_VALIDATE" });
	};

	const submitHandler = event => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogIn(emailState.value, passwordState.value);
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input isValid={emailState.isValid} 
					id="email"
					label="E-Mail"
					type="email"
					value={emailState.value}
					onChange={ emailChangeHandler}
					onBlur={ validateEmailHandler}
				/>
				<Input isValid={passwordState.isValid}
					id="password"
					label="Password"
					type="password"
					value={passwordState.value}
					onChange={ passwordChangeHandler}
					onBlur={ validatePasswordHandler}

				/>
				<div className={classes.actions}>
					<Button type="submit"
						className={classes.btn}
					>
            Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
