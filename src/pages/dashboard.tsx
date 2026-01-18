import React from "react";
import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <div>dashboard</div>
      <nav className="flex gap-4 mt-4 mb-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
          to="/dashboard"
          end
        >
          Dashboard
        </NavLink>
      </nav>
    </main>
  );
};

export default Dashboard;
