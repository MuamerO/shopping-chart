import { Footer, ItemCard, ImageCard, Hero } from "../../Components/index";
import data from "../../herodata.js";
import imageCardData from "../../imageCardData";
import itemCardData from "../../itemCardData.js";
import "../../App.css";

function Home() {
  const imageCards = imageCardData.map((item) => {
    return <ImageCard key={item.id} {...item} />;
  });

  const itemCards = itemCardData.map((item) => {
    return <ItemCard key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Hero headline={data.headline} photoLink={data.photoLink} />
      <div className="appFlex">{imageCards}</div>
      <div className="appFlex">{itemCards}</div>
    </div>
  );
}

export default Home;
