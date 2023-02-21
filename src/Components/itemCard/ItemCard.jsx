import React from "react";
import "./ItemCard.css";

const ItemCard = ({ image, title, subtitle, price }) => {
  /* const [showButton, setShowButton] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const buttonHandler = () => {
    setShowButton(!showButton);
  };
  const divHandler = () => {
    setShowDiv(!showDiv);
  };
 */

  return (
    <div className="itemContainer">
      <img className="itemImage" src={image} alt="Item" />
      <button type="button" className="itemButton">
        Shop Now
      </button>
      <div className="itemDiv">
        <p className="itemTitle">{title}</p>
        <p className="itemSubTitle">{subtitle}</p>
        <p className="itemPrice">{price}$</p>
      </div>
    </div>
  );
};

export default ItemCard;
