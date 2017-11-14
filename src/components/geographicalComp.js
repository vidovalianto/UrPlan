import React, { Component } from "react";
import "../components/cssFolder/geographicalComp.css";

import BottomBar from "./bottomBar";

//model
import geographicalModel from "./Model/modelInfo";

class GeographicalModel extends Component {
  render() {
    return (
      <div className="container App">
        <h1 className="display-1 title">
          <b>UrPlan</b>
        </h1>
        <div className="row">
          <div className="col-md-12 informationPanel">
            <geographicalModel img="http://www.uiwater.com/images/default-source/utilities-basic/buisness-units/florida/waterdorp.png?sfvrsn=2" main="AVAILABILITY" firstsub="IRIGATION" secondsub="CLEAN" />
          </div>
        </div>
        <div className="row">
          <BottomBar id="geographicalInformation" />
        </div>

      </div>
    );
  }
}

export default GeographicalModel;
