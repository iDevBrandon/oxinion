import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyLocal from "./pages/MyLocal";
import Ride from "./pages/Ride";
import Travel from "./pages/Travel";
import mapboxgl from "mapbox-gl";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mylocal" component={MyLocal} />
          <Route path="/travel" component={Travel} />
          <Route path="/ride" component={Ride} />
          <Route path="/cash" component={Travel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
