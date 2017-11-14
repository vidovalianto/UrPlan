import React, { Component } from "react";
import "../components/cssFolder/waterComp.css";

import BottomBar from "./bottomBar";

//model
import WaterModel from "./Model/modelInfo";

class Water extends Component {
  render() {
    return (
      <div className="container App">
        <h1 className="display-1 title">
          <b>UrPlan</b>
        </h1>
        <div className="row">
          <div className="col-md-12 informationPanel">
            <WaterModel img="http://www.uiwater.com/images/default-source/utilities-basic/buisness-units/florida/waterdorp.png?sfvrsn=2" main="AVAILABILITY" firstsub="IRIGATION" secondsub="CLEAN"> </WaterModel>
          </div>
          </div>
        <div className="row">
          <BottomBar id="waterInformation" />
        </div>

      </div>
    );
  }
}

export default Water;
