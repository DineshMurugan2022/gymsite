import React from "react";
import Sidebar from "./Sidebar";  
import Header from "./Header";
import "./App.css"; // Import your CSS file here

import StatsCard from './components/StatsCard';


import RecentMembers from "./components/RecentMembers";
import UpcomingClasses from "./components/UpcomingClasses";
import EarningsChart from "./components/EarningsChart";
import MembersProgressChart from "./components/MembersProgressChart";

import {
  FaUsers,
  FaCreditCard,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";

const Admindashboard = () => {
  return (
    <div className="admin-dashboard d-flex">
      <Sidebar />

      <div className="main-content flex-grow-1">
        <Header />

        <div className="dashboard-container container-fluid bg-light py-4 px-3">
          <div className="text-center mb-5">
            <h1 className="fw-bold display-6">Dashboard</h1>
            <p className="text-muted">
              Welcome back to your GYM BRO admin panel.
            </p>
          </div>

          <div className="row g-4 mb-4 justify-content-center">
            <div className="col-md-6 col-lg-3">
              <StatsCard
                title="Total Members"
                value="2,840"
                icon={<FaUsers />}
                change={{ value: 12, positive: true }}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <StatsCard
                title="Active Subscriptions"
                value="1,945"
                icon={<FaCreditCard />}
                change={{ value: 8, positive: true }}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <StatsCard
                title="Monthly Revenue"
                value="$48,250"
                icon={<FaChartLine />}
                change={{ value: 14, positive: true }}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <StatsCard
                title="Classes Today"
                value="24"
                icon={<FaCalendarAlt />}
                change={{ value: 4, positive: false }}
              />
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-lg-6">
              <EarningsChart />
            </div>
            <div className="col-lg-6">
              <UpcomingClasses />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <MembersProgressChart />
            </div>
            <div className="col-lg-4">
              <RecentMembers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
