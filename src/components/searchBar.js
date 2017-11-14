import React, { Component } from 'react';

import TitleBar from "./titleBar";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state= { locationForm: 'UrPlan' };
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default SearchBar;