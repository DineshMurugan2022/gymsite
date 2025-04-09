import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Userdashboard from "./Userdashboard";
import Subscription from "./Subscription";
import Pay from "./Pay";
import Nutrition from "./Nutrition";
import Workouts from "./Workouts";
import Myprofile from "./Myprofile";
import Admindashboard from "./Admindashboard";

import "./App.css"; // Import your CSS file here

// Wrapper to allow useLocation inside Router
function LayoutWrapper() {
  const location = useLocation();

  // List all routes that should HIDE Navbar & Footer
  const hideLayoutRoutes = ["/Admindashboard"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/Admindashboard" element={<Admindashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
