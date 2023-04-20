import { useState, useEffect } from "react";

import "./App.css";
import { Header } from "./Header";
import { ProductList } from "./ProductList";
import { LoadMoreButton } from "./LoadMoreButton";
import { ShoppingCart } from "./ShoppingCart";

const url = "https://kea-alt-del.dk/t7/api/products?start=";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch(`${url}${page * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles((oldData) => [...oldData, ...data]);
      });
  }, [page]);

  const [count, setCount] = useState(0);

  function addProduct(product) {
    console.log(`product`, product);
    setBasket((oldBasket) => oldBasket.concat(product));
    console.log(`Basket :`, basket);
  }

  function removeProduct(id) {
    console.log(id);
    setBasket((oldBasket) => oldBasket.filter((product) => product.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <div className="product_things">
        {articles.length === 0 ? (
          <p>LOADING.........</p>
        ) : (
          <ProductList articles={articles} basket={basket} addProduct={addProduct} />
        )}{" "}
        <ShoppingCart basket={basket} removeProduct={removeProduct} />
      </div>

      <LoadMoreButton page={page} setPage={setPage} />
    </div>
  );
}

export default App;
