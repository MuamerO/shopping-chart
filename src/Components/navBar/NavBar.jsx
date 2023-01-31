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
const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navList">
        <ul className="navUl">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/ProductLine"}>PRODUCT LINE</Link>
          </li>
          <li>
            <Link to={"/AboutUs"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/Contact"}>CONTACT</Link>
          </li>
        </ul>
      </div>
      <h1 className="logo">
        <Link to={"/"}>Logo</Link>
      </h1>
      <div className="navList">
        <ul className="shopping">
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
  );
};

export default NavBar;
