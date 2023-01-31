import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ShopItemCard.css";

const ShopItemCard = ({ image, title, subtitle, price }) => {
  return (
    <div className="shopItemContainer">
      <img className="shopItemImage" src={image} alt="Item" />
      <div className="shopItemDiv">
        <div>
          <p className="shopItemTitle">{title}</p>
          <p className="shopItemSubTitle">{subtitle}</p>
          <p className="shopItemPrice">{price}$</p>
        </div>
        <FontAwesomeIcon
          icon={solid("shopping-cart")}
          size="xl"
          className="faIcon"
        />
      </div>
    </div>
  );
};

export default ShopItemCard;
