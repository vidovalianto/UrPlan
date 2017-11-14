import React, { Component } from "react";

import BottomBar from "./bottomBar";

import "./cssFolder/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { locationForm: '' };
  }
  render() {
    return (
      <div className="homeWallpaper">
        <div className="container App">
          <h1 className="display-1 title">
            <b>UrPlan</b>
          </h1>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="locationInput"
                onChange={event => this.setState({ locationForm: event.target.value })}
                placeholder="Location"
              />
            </div>
          </form>
          <div className="row">
            <BottomBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
