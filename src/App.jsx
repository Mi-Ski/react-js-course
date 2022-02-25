import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=> {
  const localStorageLoggedIn = localStorage.getItem('logged-in');
  if(localStorageLoggedIn === '1') {
    setIsLoggedIn(true);
  }}, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('logged-in', '1');
  };

  const logoutHandler = () => {
    localStorage.removeItem('logged-in');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
