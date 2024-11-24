import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Roles from "./components/Roles";
import Permissions from "./components/Permissions";

function App() {
  const [view, setView] = useState("dashboard");

  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li onClick={() => setView("dashboard")}>Dashboard</li>
          <li onClick={() => setView("users")}>Users</li>
          <li onClick={() => setView("roles")}>Roles</li>
          <li onClick={() => setView("permissions")}>Permissions</li>
        </ul>
      </nav>
      <main className="content">
        {view === "dashboard" && <Dashboard />}
        {view === "users" && <Users />}
        {view === "roles" && <Roles />}
        {view === "permissions" && <Permissions />}
      </main>
    </div>
  );
}

export default App;
