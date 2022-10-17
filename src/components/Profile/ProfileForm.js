import { useRef, useContext } from "react";
import {useHistory } from "react-router-dom";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
	const authCtx = useContext(AuthContext);
	const newPasswordRef = useRef();
	const history = useHistory();

	const submitHandler = event => {
		event.preventDefault();
		console.log(newPasswordRef.current.value);
		console.log(authCtx.token);

		fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAepfBDUWyYX4DlHNyr0nU7E5iJ__e1cWo", {
			method: "POST",
			body: JSON.stringify({
				idToken: authCtx.token,
				password: newPasswordRef.current.value,
				returnSecureToken: false 
			}),
			headers: {
				"Content-Type": "application/json"
			},
			// mode: "no-cors",
		}).then(response => {
			history.replace("/");
		});
	};

	return (
		<form className={classes.form}
			onSubmit={submitHandler}
		>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input type='password'
					id='new-password'
					ref={newPasswordRef}
					minLength='7'
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
