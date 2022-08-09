import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { authActions } from "../store/index";

const Auth = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	return (
		<>
			<p>adf</p>
			<main className={classes.auth}>
				<section>
					<form>
						{!isLoggedIn && (
							<>
								<div className={classes.control}>
									<label htmlFor="email">Email</label>
									<input type="email"
										id="email"
									/>
								</div>
								<div className={classes.control}>
									<label htmlFor="password">Password</label>
									<input type="password"
										id="password"
									/>
								</div>
								<button onClick={() => dispatch(authActions.login())}>
                  Login
								</button>
							</>
						)}
						{isLoggedIn && (
							<button onClick={() => dispatch(authActions.logout())}>Log out</button>
						)}
					</form>
				</section>
			</main>
		</>
	);
};

export default Auth;
