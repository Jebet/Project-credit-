import React from "react";
import { Container, Segment } from "semantic-ui-react";
import AreaChart from "./Charts/AreaChart";
import DoughnutChart from "..//Dashboard/Charts/DoughnutChart";
import OhlcChart from "./Charts/OhlcChart";
import PieChart from "./Charts/PieChart";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="ui grid cont">
        <div className="title">Dashboard Information:</div>

        <div class="ui centered grid">
          <div class="six wide tablet eight wide computer column">
            <AreaChart />
          </div>
          <div class="six wide tablet eight wide computer column">
            <DoughnutChart />
          </div>
          <div class="six wide tablet eight wide computer column">
            <OhlcChart />
          </div>
          <div class="six wide tablet eight wide computer column">
            <PieChart />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
