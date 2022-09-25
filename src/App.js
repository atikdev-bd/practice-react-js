import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Component/Users";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h1>This is all user not here</h1>
      {users.map((user) => (
        <Users key={user.id} users={user}></Users>
      ))}
    </div>
  );
}

export default App;
