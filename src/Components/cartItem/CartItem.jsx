import "Components/cartItem/cartItem.css";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ id, price, img, amount, size, title }) => {
  return (
    <div className="container">
      <div className="attributes">
        <img className="image" src={img} alt={title} />
        <div className="textCart">
          <p className="cartTitle">{`Product: ${title}`}</p>
          <p className="cartSize">{`Size: ${size}`}</p>
          <p className="cartPrice">{`Price: ${price}`}</p>
        </div>
      </div>
      <div className="cartItemAdding">
        <div className="addMoreItems">
          <p className="incDec">+</p>
          <p className="amount">{`${amount}`}</p>
          <p className="incDec">-</p>
        </div>
        <p className="itemSubtotas">{`Total: ${price * amount}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
