import classes from "./StartingPageContent.module.css";
import {useContext} from "react";
import AuthContext from "../../store/auth-context";

const StartingPageContent = () => {
	const authCtx = useContext(AuthContext);
	const loggedIn = authCtx.isLoggedIn;

	return (
		<section className={classes.starting}>
			{!loggedIn && <h1>Log in to get started!</h1>}
			{loggedIn && <h1>Welcome on Board!</h1>}
		</section>
	);
};

export default StartingPageContent;
