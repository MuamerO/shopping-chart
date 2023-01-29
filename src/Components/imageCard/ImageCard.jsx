import React from "react";
import { Link } from "react-router-dom";
import "./imageCard.css";

const ImageCard = ({ cardImage, collection, linkpath }) => {
  return (
    <div className="imgCardContainer">
      <Link to={`${linkpath}`}>
        <img className="imgCardImage" src={cardImage} alt="Card" />
      </Link>
      <h1 className="imgCardShopCategory">{collection}</h1>
    </div>
  );
};

export default ImageCard;
