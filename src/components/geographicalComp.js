import React, { Component } from "react";
import "../components/cssFolder/geographicalComp.css";

import TitleBar from "./titleBar"
import BottomBar from "./bottomBar";

//model
import GeographicalModel from "./Model/modelInfo";

class Geographical extends Component {
  render() {
    return (
      <div className="geographicalWallpaper">
        <div className="container App">
          <TitleBar />
          <div className="row">
            <div className="col-md-12 informationPanel">
              <GeographicalModel img="https://www.shareicon.net/download/2016/11/09/851573_global_512x512.png" main="Land" firstsub="Mountain" secondsub="Fields" />
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
