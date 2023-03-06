import { useState } from "react";
import ReadItem from "Components/ReadItem/ReadItem";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./summer.css";
import { ShopItemCard } from "Components";

const Summer = () => {
  const dbName = "shopItemsCollection";
  const [imageCardsData, setImageCardsData] = useState([]);

  const shopImageCards = imageCardsData
    .sort((a, b) => a.data.id - b.data.id)
    .filter((items) => items.data.collection == "Summer")
    .map((item) => {
      return <ShopItemCard key={item.data.id} {...item.data} />;
    });
  return (
    <div className="productLineDiv">
      <div className="summerAboutHeader">
        <h1 className="contactH1">Summer collection</h1>
        <p>Sunny Styles: The Hottest Summer Collection</p>
      </div>
      <div className="productLineShopContainer">
        <ReadItem dbName={dbName} setData={setImageCardsData} />
        <Filter season={"Summer"} />
        <div className="productLineItemCards">{shopImageCards}</div>
      </div>
    </div>
  );
};

export default Summer;
