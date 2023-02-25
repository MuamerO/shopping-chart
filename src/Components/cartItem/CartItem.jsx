import "Components/cartItem/cartItem.css";
import { increaseAmount, decreseAmount } from "features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ id, price, img, amount, size, title }) => {
  const dispatch = useDispatch();

  const addAmount = () => {
    dispatch(increaseAmount(id));
  };
  const removeAmount = () => {
    dispatch(decreseAmount(id));
  };

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
          <p className="incDec" onClick={() => addAmount()}>
            +
          </p>
          <p className="amount">{`${amount}`}</p>
          <p className="incDec" onClick={removeAmount}>
            -
          </p>
        </div>
        <p className="itemSubtotals">{`Total: ${price * amount}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
