import { ImageCard } from "Components";
import React from "react";
import imageCardData from "../../imageCardData";
import "./ProductLine.css";
const ProductLine = () => {
  const imageCards = imageCardData.map((item) => {
    return <ImageCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="appFlex">{imageCards}</div>
      <div className="discounts">
        <h1 className="discountText">Discounts</h1>
      </div>
    </>
  );
};

export default ProductLine;
