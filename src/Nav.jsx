import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-warning" to="/" onClick={handleNavClick}>
          GymDash
        </Link>

        {/* Toggle Button */}
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Home */}
            <li className="nav-item">
              <button className="btn btn-outline-warning me-2" onClick={() => { navigate("/userdashboard"); handleNavClick(); }}>
                Home
              </button>
            </li>

            {/* Dashboard Dropdown */}
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="dashboardDropdown" data-bs-toggle="dropdown">
                Dashboard
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dashboard" onClick={handleNavClick}>Overview</Link></li>
                <li><Link className="dropdown-item" to="/dashboard/reports" onClick={handleNavClick}>Reports</Link></li>
                <li><Link className="dropdown-item" to="/dashboard/stats" onClick={handleNavClick}>Statistics</Link></li>
              </ul>
            </li>

            {/* Workouts Dropdown */}
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="workoutsDropdown" data-bs-toggle="dropdown">
                Workouts
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Workouts" onClick={handleNavClick}>All Workouts</Link></li>
                <li><Link className="dropdown-item" to="/workouts/cardio" onClick={handleNavClick}>Cardio Workouts</Link></li>
                <li><Link className="dropdown-item" to="/workouts/strength" onClick={handleNavClick}>Strength Training</Link></li>
                <li><Link className="dropdown-item" to="/workouts/flexibility" onClick={handleNavClick}>Flexibility & Yoga</Link></li>
                <li><Link className="dropdown-item" to="/workouts/bulking" onClick={handleNavClick}>Bulking</Link></li>
                <li><Link className="dropdown-item" to="/workouts/weight-loss" onClick={handleNavClick}>Weight Loss</Link></li>
                <li><Link className="dropdown-item" to="/workouts/schedule" onClick={handleNavClick}>Schedule</Link></li>
                <li><Link className="dropdown-item" to="/workouts/custom" onClick={handleNavClick}>Custom Plans</Link></li>
              </ul>
            </li>

            {/* Nutrition Dropdown */}
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="nutritionDropdown" data-bs-toggle="dropdown">
                Nutrition
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Nutrition" onClick={handleNavClick}>Meal Plans</Link></li>
                <li><Link className="dropdown-item" to="/nutrition/supplements" onClick={handleNavClick}>Supplements</Link></li>
                <li><Link className="dropdown-item" to="/nutrition/tracking" onClick={handleNavClick}>Tracking</Link></li>
              </ul>
            </li>

            {/* Subscription Dropdown */}
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="subscriptionDropdown" data-bs-toggle="dropdown">
                Subscription
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Subscription" onClick={handleNavClick}>Overview</Link></li>
                <li><Link className="dropdown-item" to="/membership/monthly" onClick={handleNavClick}>Monthly Plans</Link></li>
                <li><Link className="dropdown-item" to="/membership/yearly" onClick={handleNavClick}>Yearly Plans</Link></li>
                <li><Link className="dropdown-item" to="/membership/custom" onClick={handleNavClick}>Custom Plans</Link></li>
              </ul>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <button className="btn btn-secondary dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown">
                <UserCircle size={20} className="me-1" /> Profile
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" onClick={() => { navigate("/myprofile"); handleNavClick(); }}>My Profile</button></li>
                <li><Link className="dropdown-item" to="/settings" onClick={handleNavClick}>Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={() => alert("Logging out...")}>Logout</button></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
