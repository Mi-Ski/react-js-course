import React, {useState} from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	token: "",
	login: () => {},
	logout: () => {
		token = "";
		isLoggedIn = false;
	},
});

const calcRemainingTime = expirationTime => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	const remainingDuration = adjExpirationTime - currentTime;
	return remainingDuration;
};

export const AuthContextProvider =  props => {
	const initialToken = localStorage.getItem("token");
	const [token, setToken] = useState(initialToken);
	const userIsLoggedIn = !!token;

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem("token");
	};
	
	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem("token", token);
		const remainingTime = calcRemainingTime(expirationTime);

		setTimeout(logoutHandler, remainingTime);
	};

	const contextValue = {
		isLoggedIn: userIsLoggedIn,
		token: token,
		login: loginHandler,
		logout: logoutHandler
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};


export default AuthContext;