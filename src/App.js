import React from "react";
import { compose } from "ramda";
import { createStore } from "redux";
import { Provider, connect, useSelector } from "react-redux";
import * as most from "most";
import users from "./users";

import {
  select,
  createEpicMiddleware,
  createStateStreamEnhancer
} from "redux-most";

const User = ({ user }) => {
  return (
    <div>
      <h1>User Component</h1>
      <h3> {user.name.first}</h3>
      <h3> {user.email}</h3>
      <img src={user.picture.large} alt={user.email} />
    </div>
  );
};

const UserList = ({ users }) => users.map(user => <User user={user} />);

const withUsers = AppComponent => {
  const userList = users.results;
  //data loader component
  return <AppComponent users={userList} />;
};

function App({ users }) {
  return (
    <div className="App">
      <h1> Our amazing App </h1>
      <UserList users={users} />;
    </div>
  );
}

export default () => withUsers(App);
