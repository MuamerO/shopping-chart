import "../ShoppingCart/shoppingCart.css";
import { Link } from "react-router-dom";
import { calculateTotal, clearCart } from "features/cart/cartSlice";

import CartItem from "Components/cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "Components";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const item = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const [messageShow, setMessageShow] = useState(false);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [item]);

  const handleCheckout = () => {
    if (item.length > 0) {
      setMessageShow(true);
      setTimeout(() => {
        setMessageShow(false);
      }, 3000);
    }
    console.log(cart);
    dispatch(clearCart());
  };

  const checkOutMessage = (
    <div className="warning" style={{ color: `green` }}>
      <p>You have checked out thank you for shopping with us</p>
    </div>
  );

  const inCartItems = item.map((item) => {
    return <CartItem key={item.id} {...item} />;
  });

  const noCartItems = <div> No cart items </div>;

  return (
    <div className="cartContainer">
      <NavBar />
      <div className="grandTotal">Items in cart:</div>
      <hr />
      {item.length == 0 ? noCartItems : inCartItems}
      <div className="grandTotal">
        <div className="totalTitle">Total amount:</div>
        <div className="totalAmount">{total}</div>
      </div>
      <div className="buttonContainer">
        <button className="addItem" onClick={handleCheckout}>
          Checkout
        </button>
        {messageShow && checkOutMessage}
      </div>
    </div>
  );
};

export default ShoppingCart;
