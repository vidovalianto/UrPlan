import React, { Component } from "react";
import "../components/cssFolder/populationComp.css";

import BottomBar from "./bottomBar";

//model
import PopulationModel from "./Model/modelInfo";

class Population extends Component {
  render() {
    return (
      <div className="container App">
        <h1 className="display-1 title">
          <b>UrPlan</b>
        </h1>
        <div className="row">
          <div className="col-md-12 informationPanel">
            <PopulationModel img="http://www.uiwater.com/images/default-source/utilities-basic/buisness-units/florida/waterdorp.png?sfvrsn=2" main="AVAILABILITY" firstsub="IRIGATION" secondsub="CLEAN" />
          </div>
        </div>
        <div className="row">
          <BottomBar id="populationInformation" />
        </div>

      </div>
    );
  }
}

export default Population;
