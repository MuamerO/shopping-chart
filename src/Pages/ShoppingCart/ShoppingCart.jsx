import "../ShoppingCart/shoppingCart.css";
import { Link } from "react-router-dom";
import CartItem from "Components/cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "Components";

const ShoppingCart = () => {
  const item = useSelector((state) => state.cart.cartItems);
  const inCartItems = item.map((item) => {
    console.log(item);
    return <CartItem key={item.id} {...item} />;
  });

  const noCartItems = <div> No cart items </div>;

  return (
    <div className="cartContainer">
      <NavBar />
      {item.length == 0 ? noCartItems : inCartItems}
      <div className="grandTotal">Total: Sum off all items</div>
    </div>
  );
};

export default ShoppingCart;
