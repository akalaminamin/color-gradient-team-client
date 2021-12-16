import NavBar from "./components/layouts/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import Explore from "./components/gradients/Explore";
import Dashboard from "./components/dashboard/Dashboard";
import AddGradient from "./components/dashboard/AddGradient";
import Login from "./components/dashboard/Login";
import PrivateRoute from "./components/dashboard/PrivateRoute";

{
  /* <h1>In the name of Allah</h1> */
}

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/add_gradient" element={<AddGradient />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
