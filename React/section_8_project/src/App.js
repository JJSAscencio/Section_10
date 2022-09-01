import React, { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/Users/UserList';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler} />
      <UserList items={users} />
    </div>
  );
}

export default App;
