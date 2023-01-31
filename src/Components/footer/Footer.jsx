import React from "react";
import "./footer.css";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerSocial">
        <p className="footerLogo">E-Commerce logo</p>
        <div className="footerSocialNetworks">
          <FontAwesomeIcon icon={brands("facebook-f")} size="2x" />
          <FontAwesomeIcon icon={brands("instagram")} size="2x" />
          <FontAwesomeIcon icon={brands("twitter")} size="2x" />
          <FontAwesomeIcon icon={brands("pinterest-p")} size="2x" />
        </div>
      </div>
      <div className="footerInfo">
        <h3 className="footerInfoHeadline">Info</h3>
        <p className="footerInfoItems">About us</p>
        <p className="footerInfoItems">Contact us</p>
        <p className="footerInfoItems"> Work with us </p>
        <p className="footerInfoItems">Additional info</p>
      </div>
      <div className="footerCustomerCare">
        <h3 className="footerCCHeadline">Customer care</h3>
        <p className="footerCCItems">Shipping</p>
        <p className="footerCCItems">Returns</p>
        <p className="footerCCItems">Payment methods</p>
        <p className="footerCCItems">Outlet</p>
      </div>
      <div className="footerContact">
        <h3 className="footerCCHeadline">Contact info</h3>
      </div>
    </div>
  );
};

export default Footer;
