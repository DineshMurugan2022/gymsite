import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Subscription from "./Subscription";
import BMICalculator from "./BMICalculator";
import Workouts from "./Workouts";
import Nutrition from "./Nutrition";

const Userdashboard = () => {
  const [showBMI, setShowBMI] = useState(false);

  return (
    <div className="userdashboard-container text-white min-vh-100 d-flex flex-column align-items-center w-100">
      {/* Main Content Container */}
      <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center py-5 w-100 gap-4">
        {/* Left Section - BMI Calculator Toggle */}
        <div
          className="p-4 bg-dark bg-opacity-75 d-flex flex-column align-items-center rounded shadow-lg w-100"
          style={{ maxWidth: "350px" }}
        >
          <button
            className="btn btn-warning w-100 mb-3"
            onClick={() => setShowBMI(!showBMI)}
          >
            {showBMI ? "Close BMI Calculator" : "BMI Calculator"}
          </button>
          {showBMI && <BMICalculator />}
        </div>

        {/* Right Section - Hero Content */}
        <div className="text-center text-white p-4 p-lg-5 bg-dark bg-opacity-75 rounded shadow-lg w-100">
          <h1 className="display-5 fw-bold">
            Welcome to <span className="text-warning">Gym Bro</span>
          </h1>
          <p className="lead">
            Achieve your fitness goals with expert trainers & top-notch
            equipment.
          </p>
          <button className="btn btn-warning btn-lg mt-3">Join Now</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container text-center my-5 px-3">
        <h2 className="text-warning fw-bold mb-4">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-dark bg-opacity-75 rounded shadow-lg h-100">
              <h4>🏋️‍♂️ Modern Equipment</h4>
              <p>Train with the latest fitness machines and tools.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-dark bg-opacity-75 rounded shadow-lg h-100">
              <h4>👨‍🏫 Expert Trainers</h4>
              <p>Personalized coaching for better results.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-dark bg-opacity-75 rounded shadow-lg h-100">
              <h4>💪 Flexible Plans</h4>
              <p>Affordable membership options to suit your needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Workouts />
      <Subscription />
      <Nutrition />
    </div>
  );
};

export default Userdashboard;
