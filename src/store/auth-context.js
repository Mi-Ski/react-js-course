import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogIn: (email,password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

		if (storedUserLoggedInInformation === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const logInHandler = () => {
		localStorage.setItem("isLoggedIn", 1)
		setIsLoggedIn(true);
	};
	const logOutHandler = () => {
		localStorage.removeItem("isLoggedIn")
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogIn: logInHandler,
				onLogOut: logOutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
