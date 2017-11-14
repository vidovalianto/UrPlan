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
                <PopulationModel img="https://financialtribune.com/sites/default/files/field/image/17january/12_population.png" main="Population" firstsub="> 50 Years" secondsub="< 50Years" />
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
