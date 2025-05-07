import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Home from "../views/home";
import Register from "../views/auth/register";
import Login from "../views/auth/login";
import Dashboard from "../views/admin/dashboard";
import UsersIndex from "../views/admin/users";

export default function AppRoutes() {
  // get value from auth context
  const auth = useContext(AuthContext);

  // use optional chaining to avoid error
  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/users" */}
      <Route
        path="/admin/users"
        element={
          isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}
