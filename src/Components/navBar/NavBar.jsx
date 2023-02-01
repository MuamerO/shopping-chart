import React from "react";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    return setNav(!nav);
  };

  return (
    <div className="navc">
      <h1 className="logo">
        <Link to={"/"}>
          <img src="../favicon.ico" alt="logo" width="50" height="50" />
        </Link>
      </h1>
      <div className={nav ? "navContainerBar" : "navContainer"}>
        <div className="navList">
          <ul className={nav ? "navUlBar" : "navUl"}>
            <li>
              <Link to={"/"} onClick={handleNav}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/ProductLine"} onClick={handleNav}>
                PRODUCT LINE
              </Link>
            </li>
            <li>
              <Link to={"/AboutUs"} onClick={handleNav}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to={"/Contact"} onClick={handleNav}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="navList">
          <ul className={nav ? "shoppingBar" : "shopping"}>
            <li>
              <FontAwesomeIcon icon={solid("dollar-sign")} size="1x" />
            </li>
            <li>
              <FontAwesomeIcon icon={solid("Search")} size="1x" />
            </li>
            <li>
              <FontAwesomeIcon icon={regular("user")} size="1x" />
            </li>
            <li>
              <FontAwesomeIcon icon={solid("shopping-cart")} size="1x" />
            </li>
          </ul>
        </div>
      </div>
      <div className="hamburger" onClick={handleNav}>
        {nav ? (
          <FontAwesomeIcon icon={solid("X")} size="xl" />
        ) : (
          <FontAwesomeIcon icon={solid("bars")} size="xl" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
