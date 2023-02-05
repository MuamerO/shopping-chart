import { ImageCard } from "Components";
import React from "react";

const Shop = () => {
  return (
    <div>
      <div className="filters">Filters</div>
      <div>
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default Shop;
