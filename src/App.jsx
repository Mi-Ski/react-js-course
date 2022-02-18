import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser.jsx';
import UsersList from './components/Users/UsersList.jsx';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age, key) => {
    setUsersList( (prev) => {
      return [...prev, {name: name, age: age, id: Math.random().toString() }];
    })
  }
  
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
