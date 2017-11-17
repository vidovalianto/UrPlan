import React, { Component } from "react";
import "../components/cssFolder/populationComp.css";

import TitleBar from "./titleBar"
import BottomBar from "./bottomBar";

//model
import PopulationModel from "./Model/modelInfo";

class Population extends Component {
  render() {
    return (
      <div className="populationWallpaper">
        <div className="populationWallpaper">
          <div className="container App">
            <TitleBar />
            <div className="row">
              <div className="col-md-12 informationPanel">
                <PopulationModel img="https://pixabay.com/get/eb3db90720f6013ed1584d05fb0938c9bd22ffd41cb0114694f8c378a7/rare-disease-2888820_1280.png" main="Population" firstsub="> 50 Years" secondsub="< 50Years" />
              </div>
            </div>
            <div className="row">
              <BottomBar id="populationInformation" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Population;
