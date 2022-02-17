import React, { useState } from 'react';
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
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
