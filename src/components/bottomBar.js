import React, { Component } from "react";
import { Link } from "react-router-dom";

import water from "../logo/drop.png";
import population from "../logo/meeting.png";
import economy from "../logo/money-bag.png";
import geographical from "../logo/mountain-range.png";

class bottomBar extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-10 optionLocation">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <Link to="/water">
              <img src={water} alt="water" className="locationImage" />
            </Link>
          </div>
          <div className="col-sm-12 col-md-3">
            <Link to="/population">
              <img
                src={population}
                alt="population"
                className="locationImage"
              />
            </Link>
          </div>
          <div className="col-sm-12 col-md-3">
            <Link to="/economy">
              <img src={economy} alt="economy" className="locationImage" />
            </Link>
          </div>
          <div className="col-sm-12 col-md-3">
            <Link to="/geographical">
              <img
                src={geographical}
                alt="geographical"
                className="locationImage"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default bottomBar;
