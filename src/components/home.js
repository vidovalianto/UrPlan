import React, { Component } from "react";

import TitleBar from "./titleBar"
import BottomBar from "./bottomBar";
import SearchBar from "./searchBar"

import "./cssFolder/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { locationForm: 'UrPlan' };

  }
  render() {
    return (
      <div className="homeWallpaper">
        <div className="container App">
          <TitleBar />
          <SearchBar />
          <div className="row">
            <BottomBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
