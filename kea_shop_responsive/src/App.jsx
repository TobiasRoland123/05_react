import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

import Header from "./components/Header";
import LoadMoreButton from "./components/LoadMoreButton";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

const url = "https://kea-alt-del.dk/t7/api/products?start=";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [basket, setBasket] = useState([{ name: "cake", price: 1200 }]);

  useEffect(() => {
    fetch(`${url}${page * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles((oldData) => [...oldData, ...data]);
      });
  }, [page]);

  return (
    <>
      <div className="App">
        <Header />
        <ShoppingCart basket={basket} />
        <ProductList articles={articles} setBasket={setBasket} />
        <LoadMoreButton page={page} setPage={setPage} />
      </div>
      <p className="image_desclaimer">
        images from <a href="https://www.kaggle.com/paramaggarwal/fashion-product-images-dataset">kaggle.com</a>
      </p>
    </>
  );
}

export default App;
