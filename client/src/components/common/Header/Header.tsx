import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/oxinion_logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import DropDown from "./DropDown/DropDown";
import Button from "../Button/Button";
import {
  HeaderGroup,
  HeaderNav,
  NavList,
  SubNav,
  StyledLogo,
  MobileMenu,
} from "./styles";

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

        <MobileMenu onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileMenu>

        <NavList>
          <SubNav>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Events</li>
            <li className="nav-item">Location</li>
          </SubNav>
          <SubNav>
            <li className="nav-item" onClick={handleService}>
              <IoApps />
              Services
              {dropdown && <DropDown />}
            </li>

            <li className="nav-item">Log In</li>
            <Button />
          </SubNav>
        </NavList>
      </HeaderNav>
    </HeaderGroup>
  );
};

export default Header;
