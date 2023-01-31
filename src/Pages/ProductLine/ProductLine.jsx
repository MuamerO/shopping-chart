import { ImageCard } from "Components";
import React from "react";
import imageCardData from "../../imageCardDataProducs";
import "./ProductLine.css";
const ProductLine = () => {
  const imageCards = imageCardData.map((item) => {
    return <ImageCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="appFlex">{imageCards}</div>
    </>
  );
};

export default ProductLine;
