import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	const switchAuthModeHandler = () => {
		setIsLogin(prevState => !prevState);
	};
	
	const submitHandler = event => {
		event.preventDefault();
		setIsLoading(true);

		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;

		if (isLogin) {
			return;
		}
		else {
			fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAepfBDUWyYX4DlHNyr0nU7E5iJ__e1cWo", {
				method: "POST",
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecureToken: true
				}),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(res => {
				if (res.ok) {
					// return res.json();	
					setIsLoading(false);
				}
				else {
					return res.json().then(data => {
						let errorMessage = data.error.message;
						if (errorMessage) {
							alert(errorMessage);
						}
					});
				}
			});
		}

	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input type='email'
						id='email'
						required
						ref={emailRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input type='password'
						id='password'
						required
						ref={passwordRef}
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
					{isLoading && <p className={classes.toggle}>Sending request...</p>}
					<button type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
