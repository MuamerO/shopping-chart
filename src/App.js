import React from "react";
import Home from "./Pages/Home/Home.jsx";
import ProductLine from "./Pages/ProductLine/ProductLine";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import { Route, Routes } from "react-router-dom";
import RouteLayout from "Components/RouteLayout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<Home />} />
          <Route exact path="/ProductLine" element={<ProductLine />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
