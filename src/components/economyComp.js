import React, { Component } from "react";
import "../components/cssFolder/economyComp.css";

import BottomBar from "./bottomBar";

//model
import EconomyModel from "./Model/modelInfo";

class Economy extends Component {
  render() {
    return (
      <div className="container App">
        <h1 className="display-1 title">
          <b>UrPlan</b>
        </h1>
        <div className="row">
          <div className="col-md-12 informationPanel">
            <EconomyModel img="http://www.uiwater.com/images/default-source/utilities-basic/buisness-units/florida/waterdorp.png?sfvrsn=2" main="AVAILABILITY" firstsub="IRIGATION" secondsub="CLEAN"/>
          </div>
        </div>
        <div className="row">
          <BottomBar id="EconomyInformation" />
        </div>

      </div>
    );
  }
}

export default Economy;
