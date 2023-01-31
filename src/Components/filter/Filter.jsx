import React from "react";
import { Link } from "react-router-dom";
import "./filter.css";

const Filter = () => {
  return (
    <div className="filterContainer">
      <div className="filterCollectionChange">
        <h1 className="categoryFilterName">Summer</h1>
        <Link to="/ProductLine/Fall">Fall</Link>
        <Link to="/ProductLine/Winter">Winter</Link>
        <Link to="/ProductLine/Spring">Spring</Link>
      </div>
      <div className="filterCategory">filter by category</div>
      <div className="filterSize">filter by size</div>
      <div className="filterSize">filter by price</div>
    </div>
  );
};

export default Filter;
