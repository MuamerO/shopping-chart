import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./ShopItemCard.css";

const ShopItemCard = ({ image, title, subtitle, price }) => {
  return (
    <div className="shopItemContainer">
      <div className="imgShopItem">
        <div className="imgContainter">
          <img className="shopItemImage" src={image} alt="Item" />
        </div>

        <div className="shopItemDiv">
          <div>
            <p className="shopItemTitle">{title}</p>
            <p className="shopItemSubTitle">{subtitle}</p>
          </div>
          <div className="shopItemPriceDiv">
            <p className="shopItemPrice">Price: </p>
            <p className="shopItemPrice">{`${price}$`}</p>
          </div>
          <div className="itemSizes">
            <h4>Sizes:</h4>
            <div className="availableSizes">
              <p>XS</p>
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buyBox">
        <button className="addItem" type="button">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ShopItemCard;
