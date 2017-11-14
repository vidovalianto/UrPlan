import React, { Component } from "react";

import BottomBar from "./bottomBar";

import "./cssFolder/home.css";

class Home extends Component {
  render() {
    return (
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
              placeholder="Location"
            />
          </div>
        </form>
        <div className="row">
          <BottomBar />
        </div>
      </div>
    );
  }
}

export default Home;
