import { useState, useEffect } from "react";

import "./App.css";

const url = "https://kea-alt-del.dk/t7/api/products?start=";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`${url}${page * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles((oldData) => [...oldData, ...data]);
        {
          /*Here we make sure that everytime setArticles is called, we then spread the old data first, and then spreads the new data after. This means that we dont overwrite, but add more data.  */
        }
      });
  }, [page]);

  return (
    <>
      <button onClick={() => setPage((oldpage) => oldpage + 1)}>Load 10 more {page}</button>
      {/*this button calls the setPage function wich adds 1 to page everytime it's clicked. */}
      {/* this tels if articles is empty then show text saying Loading.... */}
      {articles.length === 0 ? (
        <p>LOADING.........</p>
      ) : (
        <ul>
          {articles.map((art) => (
            <li>
              <article>
                <h2>{art.productdisplayname}</h2>
                {art.discount && <p>IS ON SALE NOW</p>}
                {/*this line  checks if item is on sale, if it is, then return text sating "on sale now" else do nothing */}
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
