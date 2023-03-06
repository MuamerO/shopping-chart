import { useState } from "react";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./fall.css";
import { ShopItemCard } from "Components";
import ReadItem from "Components/ReadItem/ReadItem";

const Fall = () => {
  const dbName = "shopItemsCollection";
  const [imageCardsData, setImageCardsData] = useState([]);

  const shopImageCards = imageCardsData
    .sort((a, b) => a.data.id - b.data.id)
    .filter((items) => items.data.collection == "Fall")
    .map((item) => {
      return <ShopItemCard key={item.data.id} {...item.data} />;
    });

  return (
    <div className="productLineDiv">
      <div className="fallAboutHeader">
        <h1 className="contactH1">Fall collection</h1>
        <p>Falling for Fashion: The Latest Autumn Apparel</p>
      </div>
      <div className="productLineShopContainer">
        <ReadItem dbName={dbName} setData={setImageCardsData} />
        <Filter season={"Fall"} />
        <div className="productLineItemCards">{shopImageCards}</div>
      </div>
    </div>
  );
};

export default Fall;
