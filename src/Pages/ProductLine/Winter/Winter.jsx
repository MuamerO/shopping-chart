import { useState } from "react";
import ReadItem from "Components/ReadItem/ReadItem";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./winter.css";
import { ShopItemCard } from "Components";

const Winter = () => {
  const dbName = "shopItemsCollection";
  const [imageCardsData, setImageCardsData] = useState([]);

  const shopImageCards = imageCardsData
    .sort((a, b) => a.data.id - b.data.id)
    .filter((items) => items.data.collection == "Winter")
    .map((item) => {
      return <ShopItemCard key={item.data.id} {...item.data} />;
    });
  return (
    <div className="productLineDiv">
      <div className="winterAboutHeader">
        <h1 className="contactH1">Fall collection</h1>
        <p>Falling for Fashion: The Latest Autumn Apparel</p>
      </div>
      <div className="productLineShopContainer">
        <ReadItem dbName={dbName} setData={setImageCardsData} />
        <Filter season={"Winter"} />
        <div className="productLineItemCards">{shopImageCards}</div>
      </div>
    </div>
  );
};

export default Winter;
