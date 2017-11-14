import React, { Component } from "react";
import Home from '../components/home';
import Water from '../components/waterComp';
import Economy from '../components/economyComp';
import Geography from '../components/geographicalComp';
import Population from '../components/populationComp'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/water" component={Water} />
            <Route exact path="/economy" component={Economy} />
            <Route exact path="/population" component={Population} />
            <Route exact path="/geographical" component={Geography} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
