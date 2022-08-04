import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
	const dispatch = useDispatch();
	const counterData = useSelector(state => state.count.count);
	const counterShown = useSelector(state => state.count.counterShown);
	console.log(counterData);

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{counterShown && (
				<div className={classes.value}>{counterData}</div>
			)}
			<div className={classes.buttons}>
				<button className={classes.button}
					onClick={() => dispatch(counterActions.increment())}
				>
          Increment
				</button>
				<button className={classes.button}
					onClick={() => dispatch(counterActions.incrementBy(5))}
				>
          Increase by 5
				</button>
				<button className={classes.button}
					onClick={() => dispatch(counterActions.decrement())}
				>
          Decrement
				</button>
				<button className={classes.button}
					onClick={() => dispatch(counterActions.toggleCounter())}
				>
          Toggle counter
				</button>
			</div>
		</main>
	);
};

export default Counter;
