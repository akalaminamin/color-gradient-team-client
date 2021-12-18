import NavBar from "./components/layouts/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import Explore from "./components/gradients/Explore";
import Dashboard from "./components/dashboard/Dashboard";
import AddGradient from "./components/dashboard/AddGradient";
import Login from "./components/dashboard/Login";
import PrivateRoute from "./components/dashboard/PrivateRoute";
import Register from "./components/dashboard/Register";
import AuthProvider from "./contexts/AuthContext";
import PublickRoute from "./components/dashboard/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/add_gradient"
              element={
                <PrivateRoute>
                  <AddGradient />
                </PrivateRoute>
              }
            />
            <Route
              path="/Login"
              element={
                <PublickRoute>
                  <Login />
                </PublickRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublickRoute>
                  <Register />
                </PublickRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
