import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (latestState, action) => {
	switch (action.type) {
		case 'USR_INPUT':
			return { value: action.value, isValid: action.value.includes('@') };
		case 'EMAIL_VALIDATE':
			return { ...latestState, isValid: action.value.includes('@') };
		default:
			return latestState;
	}
};

const passwordReducer = (latestState, action) => {
	switch (action.type) {
		case 'USR_INPUT':
			return { value: action.value, isValid: action.value.trim().length > 6 };
		case 'PASS_VALIDATE':
			return { ...latestState, isValid: action.value.trim().length > 6 };
		default:
			return latestState;
	}
};

const Login = (props) => {
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: false,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: false,
	});

	// email & password onchange functions
	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USR_INPUT', value: event.target.value });

		setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ value: event.target.value, type: 'USR_INPUT' });

		setFormIsValid(emailState.isValid && passwordState.isValid);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'EMAIL_VALIDATE', value: emailState.value });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ value: passwordState.value, type: 'PASS_VALIDATE' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						!emailState.isValid ? classes.invalid : ''
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
