import React from "react";
import Sidebar from "../ToggleButton/ToggleButton";
// import SideDrawer from "../SideDrawer/SideDrawer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../Toolbar/logo/logo.png";

import "./Toolbar.css";

const Toolbar = props => {
  return (
    <div className="container-toolbar">
      <div className="toolbar-navigation">
        <div className="toolbar-logo">
          <a href="/home">
            <img src={logo} className="logoImage" />
          </a>
          {/* <Sidebar /> */}
        </div>
        <div className="spacer" />
        <div className="navigation-items">
          <ul>
            <li>
              <Link to="/home">Dashboard</Link>
            </li>
            <li>
              <Link to="/daily">Daily</Link>
            </li>
            <li>
              <Link to="/airtime">Airtime</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
