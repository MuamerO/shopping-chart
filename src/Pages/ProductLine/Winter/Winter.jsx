import React from "react";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./winter.css";
import { ShopItemCard } from "Components";

const Winter = () => {
  return (
    <div className="productLineShopContainer">
      <Filter />
      <div className="productLineItemCards">
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />{" "}
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />{" "}
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />{" "}
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />{" "}
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />{" "}
        <ShopItemCard
          image="https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80"
          title="title"
          subtitle="subtitle"
          price="22"
        />
      </div>
    </div>
  );
};

export default Winter;
