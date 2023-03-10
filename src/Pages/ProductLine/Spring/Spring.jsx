import { useEffect, useState } from "react";
import ReadItem from "Components/ReadItem/ReadItem";
import Filter from "Components/filter/Filter";
import "../ProductLine.css";
import "./spring.css";
import { ShopItemCard } from "Components";

const Spring = () => {
  const dbName = "shopItemsCollection";
  const [imageCardsData, setImageCardsData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [renderShop, setRenderShop] = useState([]);

  useEffect(() => {
    let shopImageCards = [];
    if (nameFilter == "" && priceFilter == "") {
      shopImageCards = imageCardsData
        .sort((a, b) => a.data.id - b.data.id)
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "" && priceFilter == "A") {
      shopImageCards = imageCardsData
        .sort((a, b) => a.data.price - b.data.price)
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "A" && priceFilter == "") {
      shopImageCards = imageCardsData
        .sort((a, b) =>
          a.data.title.toLowerCase() > b.data.title.toLowerCase() ? 1 : -1
        )
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }

    if (nameFilter == "A" && priceFilter == "A") {
      shopImageCards = imageCardsData
        .sort((a, b) => {
          const titleA = a.data.title[0].toLowerCase();
          const titleB = b.data.title[0].toLowerCase();
          if (titleA > titleB) {
            return 1;
          } else if (titleA < titleB) {
            return -1;
          } else {
            return a.data.price - b.data.price;
          }
        })
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "D" && priceFilter == "") {
      shopImageCards = imageCardsData
        .sort((a, b) =>
          a.data.title.toLowerCase() < b.data.title.toLowerCase() ? 1 : -1
        )
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "" && priceFilter == "D") {
      shopImageCards = imageCardsData
        .sort((a, b) => b.data.price - a.data.price)
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "D" && priceFilter == "D") {
      shopImageCards = imageCardsData
        .sort((a, b) => {
          const titleA = a.data.title[0].toLowerCase();
          const titleB = b.data.title[0].toLowerCase();
          if (titleA > titleB) {
            return -1;
          } else if (titleA < titleB) {
            return 1;
          } else {
            return b.data.price - a.data.price;
          }
        })
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "A" && priceFilter == "D") {
      shopImageCards = imageCardsData
        .sort((a, b) => {
          const titleA = a.data.title[0].toLowerCase();
          const titleB = b.data.title[0].toLowerCase();
          if (titleA > titleB) {
            return 1;
          } else if (titleA < titleB) {
            return -1;
          } else {
            return b.data.price - a.data.price;
          }
        })
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }
    if (nameFilter == "D" && priceFilter == "A") {
      shopImageCards = imageCardsData
        .sort((a, b) => {
          const titleA = a.data.title[0].toLowerCase();
          const titleB = b.data.title[0].toLowerCase();
          if (titleA > titleB) {
            return -1;
          } else if (titleA < titleB) {
            return 1;
          } else {
            return a.data.price - b.data.price;
          }
        })
        .filter((items) => items.data.collection == "Spring")
        .map((item) => {
          return { ...item.data };
        });
    }

    setRenderShop(shopImageCards);
  }, [priceFilter, nameFilter, imageCardsData]);

  const renderingCards = renderShop.map((item) => {
    return <ShopItemCard key={item.id} {...item} />;
  });

  return (
    <div className="productLineDiv">
      <div className="springAboutHeader">
        <h1 className="contactH1">Spring collection</h1>
        <p>Blooming Wardrobe: The Fresh Spring Collection</p>
      </div>
      <div className="productLineShopContainer">
        <ReadItem dbName={dbName} setData={setImageCardsData} />
        <Filter
          season={"Spring"}
          setName={setNameFilter}
          setPrice={setPriceFilter}
        />
        <div className="productLineItemCards">{renderingCards}</div>
      </div>
    </div>
  );
};

export default Spring;
