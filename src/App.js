import React from "react";
import "./App.css";

const userApi = "https://randomuser.me/api/";

const CHANGE_PAGE = "EVENT/CHANGE_PAGE";
const initialState = { page: 1 };

function changePageReducer(state, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { page: state.page + 1 };
    default:
      return state;
  }
}

const UserData = ({ user }) => {
  return (
    <>
      <h3> {user.name.first}</h3>
      <h3> {user.email}</h3>
      <img src={user.picture.large} alt={user.email} />
    </>
  );
};

const User = ({ user }) => {
  return (
    <div>
      <h1>User Component</h1>
      <UserData user={user} />
    </div>
  );
};

function App() {
  const user = null;
  return (
    <div className="App">
      {user && <User user={user} />}
      <button>Change Page</button>
    </div>
  );
}

export default App;
