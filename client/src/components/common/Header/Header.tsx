import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Money from "../../../pages/Money";
import MyLocal from "../../../pages/MyLocal";
import Ride from "../../../pages/Ride";
import Travel from "../../../pages/Travel";
import logo from "../../../assets/Images/oxinion_logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import DropDown from "./DropDown/DropDown";
import Button from "../Button/Button";
import { HeaderGroup, HeaderNav, NavList, StyledLogo } from "./styles";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const handleService = () => {
    click ? setDropdown(false) : setDropdown(true);
  };

  return (
    <HeaderGroup>
      <HeaderNav>
        <StyledLogo>
          <Link to="/" className="logo">
            <img src={logo} alt="OXINION_logo" />
          </Link>
        </StyledLogo>

        <div onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>

        <NavList>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Events</li>
          <li className="nav-item">Location</li>

          <li className="nav-item" onClick={handleService}>
            <IoApps />
            Services
            {dropdown && <DropDown />}
          </li>

          <li className="nav-item">Log In</li>
          <Button />
        </NavList>
      </HeaderNav>

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
    </HeaderGroup>
  );
};

export default Header;
