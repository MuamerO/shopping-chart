import React, { useEffect, useState } from "react";
import "./ShopItemCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "features/cart/cartSlice";

const ShopItemCard = ({
  cardImage,
  title,
  subtitle,
  price,
  id,
  collection,
}) => {
  const uniqueItem = useSelector((state) => state.cart.cartItems);

  const [showHide, setShowHide] = useState({ display: "none" });
  const [showHideDouble, setShowHideDouble] = useState({
    display: "none",
  });
  const dispatch = useDispatch();
  const [itemBought, setItemBought] = useState({
    id: id,
    price: price,
    size: "",
    price: price,
    title: title,
    img: cardImage,
    amount: 1,
  });
  const [sizeSelected, setSizeSelected] = useState("");
  const handleBoughtClick = () => {
    if (itemBought.size == "") {
      setShowHide({ display: "flex", color: "red" });
      setTimeout(() => {
        setShowHide({ display: "none" });
      }, 1000);
      return;
    }
    if (
      uniqueItem.find((o) => {
        if (o.id == id + itemBought.size) return true;
      })
    ) {
      setShowHideDouble({ display: "flex", color: "red" });
      setTimeout(() => {
        setShowHideDouble({ display: "none" });
      }, 1000);
      return;
    }
    setShowHide({ display: "none" });
    setShowHideDouble({ display: "none" });
    dispatch(addItem(itemBought));
  };

  const handleSize = (size) => {
    switch (size) {
      case `XS`:
        setSizeSelected(`XS`);
        setItemBought({
          id: id + size,
          price: price,
          size: "XS",
          price: price,
          title: title,
          img: cardImage,
          amount: 1,
        });
        break;
      case `S`:
        setSizeSelected(`S`);
        setItemBought({
          id: id + size,
          price: price,
          size: "S",
          price: price,
          title: title,
          img: cardImage,
          amount: 1,
        });
        break;
      case `M`:
        setSizeSelected(`M`);
        setItemBought({
          id: id + size,
          price: price,
          size: "M",
          price: price,
          title: title,
          img: cardImage,
          amount: 1,
        });
        break;
      case `L`:
        setSizeSelected(`L`);
        setItemBought({
          id: id + size,
          price: price,
          size: "L",
          price: price,
          title: title,
          img: cardImage,
          amount: 1,
        });

        break;
      case `XL`:
        setSizeSelected(`XL`);
        setItemBought({
          id: id + size,
          price: price,
          size: "XL",
          price: price,
          title: title,
          img: cardImage,
          amount: 1,
        });

        break;
    }
  };

  return (
    <div className="shopItemContainer">
      <div className="imgShopItem">
        <div className="imgContainter">
          <img className="shopItemImage" src={cardImage} alt="Item" />
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
      <div className="warning" style={showHide}>
        You must select size
      </div>
      <div className="warning" style={showHideDouble}>
        You already added this size of item
      </div>
      <div
        className="buyBox"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <button
          className="addItem"
          type="button"
          onClick={() => handleBoughtClick()}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ShopItemCard;
