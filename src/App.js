import React, { useEffect, useState } from "react";
import "./App.css";

const userApi = "https://randomuser.me/api/";

const UserData = ({ user, children }) => {
  return (
    <>
      <h3> {user.name.first}</h3>
      <h3> {user.email}</h3>
      {children}
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(userApi)
      .then(res => res.json())
      .then(data => {
        const u = data.results[0];
        setUser(u);
      })
      .catch(err => console.log);
  }, []);

  return <div className="App">{user && <User user={user} />}</div>;
}

export default App;
