import React, { useState } from "react";
import "./ShopItemCard.css";

const ShopItemCard = ({ image, title, subtitle, price }) => {
  const [itemBought, setItemBought] = useState(false);
  const [addRemove, setAddRemove] = useState("Add to cart");
  const [sizeSelected, setSizeSelected] = useState("");

  const trueItem = () => {
    setAddRemove(`Add to cart`);
    setItemBought(false);
    setSizeSelected("");
  };
  const falseItem = () => {
    setAddRemove(`Remove from cart`);
    setItemBought(true);
  };

  const handleBoughtClick = () => {
    itemBought ? trueItem() : falseItem();
  };

  const handleSize = (size) => {
    switch (size) {
      case `XS`:
        trueItem();
        setSizeSelected(`XS`);
        break;
      case `S`:
        trueItem();
        setSizeSelected(`S`);
        break;
      case `M`:
        trueItem();
        setSizeSelected(`M`);
        break;
      case `L`:
        trueItem();
        setSizeSelected(`L`);
        break;
      case `XL`:
        trueItem();
        setSizeSelected(`XL`);
        break;
    }
  };

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
              <p
                onClick={() => handleSize(`XS`)}
                style={
                  sizeSelected == "XS"
                    ? { fontWeight: "Bold", fontSize: "1.4rem" }
                    : { fontWeight: "Normal", fontSize: "1rem" }
                }
              >
                XS
              </p>
              <p
                onClick={() => handleSize(`S`)}
                style={
                  sizeSelected == "S"
                    ? { fontWeight: "Bold", fontSize: "1.4rem" }
                    : { fontWeight: "Normal", fontSize: "1rem" }
                }
              >
                S
              </p>
              <p
                onClick={() => handleSize(`M`)}
                style={
                  sizeSelected == "M"
                    ? { fontWeight: "Bold", fontSize: "1.4rem" }
                    : { fontWeight: "Normal", fontSize: "1rem" }
                }
              >
                M
              </p>
              <p
                onClick={() => handleSize(`L`)}
                style={
                  sizeSelected == "L"
                    ? { fontWeight: "Bold", fontSize: "1.4rem" }
                    : { fontWeight: "Normal", fontSize: "1rem" }
                }
              >
                L
              </p>
              <p
                onClick={() => handleSize(`XL`)}
                style={
                  sizeSelected == "XL"
                    ? { fontWeight: "Bold", fontSize: "1.4rem" }
                    : { fontWeight: "Normal", fontSize: "1rem" }
                }
              >
                XL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="buyBox">
        <button className="addItem" type="button" onClick={handleBoughtClick}>
          {addRemove}
        </button>
      </div>
    </div>
  );
};

export default ShopItemCard;
