import React, { Component } from "react";
import "../components/cssFolder/waterComp.css";

import TitleBar from "./titleBar"
import BottomBar from "./bottomBar";

//model
import WaterModel from "./Model/modelInfo";

class Water extends Component {
  render() {
    return (
      <div className="waterWallpaper">
        <div className="container App">
          <TitleBar />
          <div className="row">
            <div className="col-md-12 informationPanel">
              <WaterModel img="https://images.vexels.com/media/users/3/129023/isolated/preview/176d8d973b85fc8a4c67ec02ba89f7e0-water-drop-tap-icon-by-vexels.png" main="AVAILABILITY" firstsub="IRIGATION" secondsub="CLEAN"> </WaterModel>
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

export default Water;
