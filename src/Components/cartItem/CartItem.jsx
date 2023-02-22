import React from "react";

const CartItem = (id, img, amount, size, title, price) => {
  return (
    <div>
      <img src={img} alt={title} />
      <p className="price">{price}</p>
      <p className="size">{size}</p>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default CartItem;
