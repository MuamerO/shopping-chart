import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <hr />
      <div className="boughtItems">
        <p>Here are items list in chart</p>
        <hr />
      </div>
      <div className="totals">
        <p>Here is the calculation</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
