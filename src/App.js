import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

import AuthContext, {
	AuthContextProvider,
} from "./store/auth-context";

function App() {
	const authCtx = useContext(AuthContext);
	return (
		<AuthContextProvider>
			<Layout>
				<Switch>
					<Route path="/"
						exact
					>
						<HomePage />
					</Route>
					{!authCtx.isLoggedIn && (
						<Route path="/auth">
							<AuthPage />
						</Route>
					)}
					<Route path="/profile">
						{authCtx.isLoggedIn ? (
							<UserProfile />
						) : (
							<Redirect to="/auth" />
						)}
					</Route>
					<Route path={"*"}>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Layout>
		</AuthContextProvider>
	);
}

export default App;
