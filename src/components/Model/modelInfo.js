import React, { Component } from "react";
import "../cssFolder/modelInfo.css";

class modelInfo extends Component {
  constructor(props) {
    super(props);
    this.dummyData = this.dummyData.bind(this);
    this.state = { random: 0 };
  }

  dummyData = () => {
    this.state = { random: 1 + Math.random() * (100 - 1) };
  };
  render() {
    return (
      <div className="card informationCard">
        <div className="card-body">
          <h4 className="card-title">
            <b>{this.props.type}</b>
          </h4>
          <p className="card-text">
            <div className="row">
              <div className="col-md-4">
                <img src={this.props.img} alt="type" id="img" />
              </div>
              <div className="col-md-8 titlePart">
                <div className="row">
                  <div className="col-sm-12 col-md-6 titlePart">
                    <p>
                      <b>{this.props.main}</b>
                    </p>
                    <p>
                      <b>{this.props.firstsub}</b>
                    </p>
                    <p>
                      <b>{this.props.secondsub}</b>
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 bodyPart">
                    <p>
                      {this.dummyData()}
                      {this.state.random}
                    </p>
                    <p>
                      {this.dummyData()}
                      {this.state.random}
                    </p>
                    <p>
                      {this.dummyData()}
                      {this.state.random}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <a href="#" className="card-link">
            o
          </a>
          <a href="#" className="card-link">
            o
          </a>
          <a href="#" className="card-link">
            o
          </a>
        </div>
      </div>
    );
  }
}

export default modelInfo;
