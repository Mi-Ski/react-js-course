import { Route } from "react-router-dom";

const Welcome = () => {
	return (
		<div>
			<h1>The Welcome Page</h1>
			<Route path="/welcome"
				exact
			>
				<h1>Welcome to React</h1>
				<p>This is a simple React app</p>
			</Route>
			<Route path="/welcome/new-user">
				<h1>Welcome New User</h1>
				<p>Sign up and subscribe for $45 a month</p>
			</Route>
		</div>
	);
};

export default Welcome;
