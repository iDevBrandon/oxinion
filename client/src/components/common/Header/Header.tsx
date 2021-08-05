import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Money from "../../../pages/Money";
import MyLocal from "../../../pages/MyLocal";
import Ride from "../../../pages/Ride";
import Travel from "../../../pages/Travel";
import logo from "../../../assets/Images/oxinion_logo.png";

const Header = () => {
  return (
    <header>
      <small>
        <a href="/">OXINION</a>
      </small>
      <nav>
        <ul>
          <li>
            <Link to="/mylocal">MyLocal</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/ride">Ride</Link>
          </li>
          <li>
            <Link to="/money">money</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/mylocal">
          <MyLocal />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
        <Route path="/ride">
          <Ride />
        </Route>
        <Route path="/Money">
          <Money />
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
