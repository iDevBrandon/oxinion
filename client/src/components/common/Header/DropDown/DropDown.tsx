import React, { useState } from "react";
import { MenuItems } from "../MenuItem/MenuItems";
import { ServiceList } from "./styles";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <ServiceList key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </ServiceList>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
