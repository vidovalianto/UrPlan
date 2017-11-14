import React, { Component } from "react";
import "../components/cssFolder/economyComp.css";

import TitleBar from "./titleBar"
import BottomBar from "./bottomBar";

//model
import EconomyModel from "./Model/modelInfo";

class Economy extends Component {
  render() {
    return (
      <div className="economyWallpaper">
        <div className="container App">
          <TitleBar />
          <div className="row">
            <div className="col-md-12 informationPanel">
              <EconomyModel img="http://cdn.essay.ws/wp-content/uploads/2015/11/Ethiopian-Economy-part-2.jpg" main="Stock" firstsub="Local Money Value" secondsub="Average Salary" />
            </div>
          </div>
          <div className="row">
            <BottomBar id="EconomyInformation" />
          </div>

        </div>
      </div>
    );
  }
}

export default Economy;
