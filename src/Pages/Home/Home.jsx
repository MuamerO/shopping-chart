import { ItemCard, ImageCard, Hero } from "../../Components/index";
import data from "../../herodata.js";
import itemCardData from "../../itemCardData.js";
import "../../App.css";
import ReadItem from "Components/ReadItem/ReadItem";
import { useState } from "react";

function Home() {
  // Pulling from file on local storage
  /* 
  const imageCards = imageCardData.map((item) => {
    return <ImageCard key={item.id} {...item} />;
  }); */

  // Pulling from server
  const dbName = "ImageCards";
  const [imageCardsData, setImageCardsData] = useState([]);

  const imageCards = imageCardsData
    .sort((a, b) => a.data.id - b.data.id)
    .map((item) => {
      return <ImageCard key={item.data.id} {...item.data} />;
    });

  const itemCards = itemCardData.map((item) => {
    return <ItemCard key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <ReadItem dbName={dbName} setData={setImageCardsData} />
      <Hero headline={data.headline} photoLink={data.photoLink} />
      <div className="appFlex">{imageCards}</div>
      <div className="appFlex">{itemCards}</div>
    </div>
  );
}

export default Home;
