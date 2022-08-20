import classes from "./Notification.module.css";
import { useDispatch } from "react-redux";
import { cartShownActions } from "../../store/layout/cartShownSlice";

const Notification = props => {
	const dispatch = useDispatch();

	let specialClasses = "";

	if (props.status === "error") {
		specialClasses = classes.error;
	}
	if (props.status === "success") {
		specialClasses = classes.success;
	}

	const cssClasses = `${classes.notification} ${specialClasses}`;

	return (
		<section className={cssClasses}>
			<h2>{props.title}</h2>
			<p>{props.message}</p>

			<div className={classes.buttonContainer}>
				<button className={classes.button}
					onClick={() =>
						dispatch(cartShownActions.hideNotification())
					}
				>
          &#10006;
				</button>
			</div>
		</section>
	);
};

export default Notification;
