import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./cssFolder/titleBar.css";

class titleBar extends Component {
  constructor(props) {
    super(props);
    this.state = { locationForm: 'UrPlan' };
    this.changeTitleBar = this.changeTitleBar.bind(this);
  }

  changeTitleBar(newTitle) {
    this.setState({ locationForm: newTitle });
  }

  render() {
    return (
      <div>
        <Link to="/">
          <h1 className="display-1 title">
            <b>{this.state.locationForm}</b>
          </h1>
        </Link>
      </div>
    );
  }
}

export default titleBar;
