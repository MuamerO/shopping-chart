import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Link } from "react-router-dom";
import "./filter.css";

const Filter = ({ season }) => {
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

  return (
    <div className="filterContainer">
      <div className="filterCollectionChange">
        <h1 className="categoryFilterName">{season}</h1>
        <Link to={Plink1}>{link1}</Link>
        <Link to={Plink2}>{link2}</Link>
        <Link to={Plink3}>{link3}</Link>
      </div>
      <div className="filterSize">Sort by:</div>
      <div className="filterName">
        <p className="filterTitle">Name</p>
        <ul>
          <li className="filterAscending">Ascending</li>
          <li className="filterDescending">Descending</li>
          <li className="cancel">X</li>
        </ul>
      </div>
      <div className="filterName">
        <p className="filterTitle">Price</p>
        <ul>
          <li className="filterAscending">Ascending</li>
          <li className="filterDescending">Descending</li>
          <li className="cancel">X</li>
        </ul>
      </div>
      <div className="filterSize">Filter by size</div>
      <div className="filterSizeList">
        <ul>
          <li>XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li className="cancel">X</li>
        </ul>
      </div>
      <div className="filterSize">Filter by price</div>
      <div className="filterMinMax">
        <p>Min:</p>
        <input className="sizeInput" />
        <p>Max:</p>
        <input className="sizeInput" />
        <p className="cancelMinMax">X</p>
      </div>
    </div>
  );
};

export default Filter;

/*   Alternative Code

  if (season == "Spring") {
    return (
      <div className="filterContainer">
        <div className="filterCollectionChange">
          <h1 className="categoryFilterName">{season}</h1>
          <Link to="/ProductLine/Summer">Summer</Link>
          <Link to="/ProductLine/Fall">Fall</Link>
          <Link to="/ProductLine/Winter">Winter</Link>
        </div>
        <div className="filterCategory">filter by category</div>
        <div className="filterSize">filter by size</div>
        <div className="filterSize">filter by price</div>
      </div>
    );
  }
  if (season == "Summer") {
    return (
      <div className="filterContainer">
        <div className="filterCollectionChange">
          <h1 className="categoryFilterName">{season}</h1>
          <Link to="/ProductLine/Fall">Fall</Link>
          <Link to="/ProductLine/Winter">Winter</Link>
          <Link to="/ProductLine/Spring">Spring</Link>
        </div>
        <div className="filterCategory">filter by category</div>
        <div className="filterSize">filter by size</div>
        <div className="filterSize">filter by price</div>
      </div>
    );
  }
  if (season == "Fall") {
    return (
      <div className="filterContainer">
        <div className="filterCollectionChange">
          <h1 className="categoryFilterName">{season}</h1>
          <Link to="/ProductLine/Winter">Winter</Link>
          <Link to="/ProductLine/Spring">Spring</Link>
          <Link to="/ProductLine/Summer">Summer</Link>
        </div>
        <div className="filterCategory">filter by category</div>
        <div className="filterSize">filter by size</div>
        <div className="filterSize">filter by price</div>
      </div>
    );
  }
  if (season == "Winter") {
    return (
      <div className="filterContainer">
        <div className="filterCollectionChange">
          <h1 className="categoryFilterName">{season}</h1>
          <Link to="/ProductLine/Spring">Spring</Link>
          <Link to="/ProductLine/Summer">Summer</Link>
          <Link to="/ProductLine/Fall">Fall</Link>
        </div>
        <div className="filterCategory">filter by category</div>
        <div className="filterSize">filter by size</div>
        <div className="filterSize">filter by price</div>
      </div>
    );
  }

  



 */
