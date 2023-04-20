import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import Header from "./components/Header";

const url = "https://kea-alt-del.dk/t7/api/products?start=";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

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
        <ProductList articles={articles} />
      </div>
    </>
  );
}

export default App;
