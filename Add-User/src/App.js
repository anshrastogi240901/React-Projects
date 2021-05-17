import React, { Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(Name, Age) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random(), name: Name, age: Age }];
    });
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
