import { useState } from "react";
import ReadItem from "Components/ReadItem/ReadItem";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./spring.css";
import { ShopItemCard } from "Components";

const Spring = () => {
  const dbName = "shopItemsCollection";
  const [imageCardsData, setImageCardsData] = useState([]);

  const shopImageCards = imageCardsData
    .sort((a, b) => a.data.id - b.data.id)
    .filter((items) => items.data.collection == "Spring")
    .map((item) => {
      return <ShopItemCard key={item.data.id} {...item.data} />;
    });
  return (
    <div className="productLineDiv">
      <div className="springAboutHeader">
        <h1 className="contactH1">Spring collection</h1>
        <p>Blooming Wardrobe: The Fresh Spring Collection</p>
      </div>
      <div className="productLineShopContainer">
        <ReadItem dbName={dbName} setData={setImageCardsData} />
        <Filter season={"Spring"} />
        <div className="productLineItemCards">{shopImageCards}</div>
      </div>
    </div>
  );
};

export default Spring;
