import "Components/cartItem/cartItem.css";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ id, price, img, amount, size, title }) => {
  return (
    <div className="container">
      <img className="image" src={img} alt={title} />
      <div className="attriutes">
        <p className="price">{`price: ${price}`}</p>
        <p className="size">{`size: ${size}`}</p>
        <p className="amount">{`amount: ${amount}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
