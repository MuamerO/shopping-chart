import React from "react";
import { Link } from "react-router-dom";
import CartItem from "Components/cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const item = useSelector((state) => state.cart.cartItems);
  const inCartItems = item.map((item) => {
    console.log(item);
    return <CartItem key={item.id} {...item} />;
  });

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <hr />
      {inCartItems}
    </div>
  );
};

export default ShoppingCart;
