import React, { Component } from "react";
import "../components/cssFolder/geographicalComp.css";

import BottomBar from "./bottomBar";

//model
import GeographicalModel from "./Model/modelInfo";

class Geographical extends Component {
  render() {
    return (
      <div className="waterWallpaper">
        <div className="container App">
          <h1 className="display-1 title">
            <b>UrPlan</b>
          </h1>
          <div className="row">
            <div className="col-md-12 informationPanel">
              <GeographicalModel img="http://pngimg.com/uploads/mountain/mountain_PNG20.png" main="Land" firstsub="Mountain" secondsub="Fields" />
            </div>
          </div>
          <div className="row">
            <BottomBar id="waterInformation" />
          </div>

        </div>
      </div>
    );
  }
}

export default Geographical;
