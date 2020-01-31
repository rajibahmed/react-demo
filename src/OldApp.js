import React, { useEffect, useState, useReducer } from "react";
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

const UserData = ({ user, children }) => {
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

const changePageAction = dispatch => () => dispatch({ type: CHANGE_PAGE });

function App() {
  const [stAte, dispatch] = useReducer(changePageReducer, initialState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let api = userApi + "?page=" + state.page;
    fetch(api)
      .then(res => res.json())
      .then(data => {
        const u = data.results[0];
        setUser(u);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      {user && <User user={user} />}
      <button onClick={changePageAction(dispatch)}>Change Page</button>
    </div>
  );
}

export default App;
