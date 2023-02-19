import React from "react";
import { Link } from "react-router-dom";
import "./filter.css";

const Filter = ({ season }) => {
  console.log(season);
  let Headline = "";
  let link1 = "";
  let link2 = "";
  let link3 = "";
  if (season == "Spring") {
    link1 = "Summer";
    link2 = "Fall";
    link3 = "Winter";
  }
  if (season == "Summer") {
    link1 = "Fall";
    link2 = "Winter";
    link3 = "Spring";
  }
  if (season == "Fall") {
    link1 = "Winter";
    link2 = "Spring";
    link3 = "Summer";
  }
  if (season == "Winter") {
    link1 = "Spring";
    link2 = "Summer";
    link3 = "Fall";
  }
  let Plink1 = `/ProductLine/${link1}`;
  let Plink2 = `/ProductLine/${link2}`;
  let Plink3 = `/ProductLine/${link3}`;
  console.log(Plink1);
  console.log(Plink2);
  console.log(Plink3);

  return (
    <div className="filterContainer">
      <div className="filterCollectionChange">
        <h1 className="categoryFilterName">{season}</h1>
        <Link to={Plink1}>{link1}</Link>
        <Link to={Plink2}>{link2}</Link>
        <Link to={Plink3}>{link3}</Link>
      </div>
      <div className="filterCategory">filter by category</div>
      <div className="filterSize">filter by size</div>
      <div className="filterSize">filter by price</div>
    </div>
  );
};

export default Filter;
