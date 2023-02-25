import "../ShoppingCart/shoppingCart.css";
import { Link } from "react-router-dom";
import { calculateTotal } from "features/cart/cartSlice";

import CartItem from "Components/cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "Components";
import { useEffect } from "react";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  console.log(total);
  console.log(item);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [item]);

  const inCartItems = item.map((item) => {
    return <CartItem key={item.id} {...item} />;
  });

  const noCartItems = <div> No cart items </div>;

  return (
    <div className="cartContainer">
      <NavBar />
      {item.length == 0 ? noCartItems : inCartItems}
      <div className="grandTotal">
        <div className="totalTitle">Total ammount:</div>
        <div className="tatalAmount">{total}</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
