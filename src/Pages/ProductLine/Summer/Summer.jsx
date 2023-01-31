import React from "react";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./summer.css";
import { ShopItemCard } from "Components";

const Summer = () => {
  return (
    <div className="productLineShopContainer">
      <Filter />
      <div className="productLineItemCards">
        <ShopItemCard
          image="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1383&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />
      </div>
    </div>
  );
};

export default Summer;
