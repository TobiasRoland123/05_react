import { useState } from "react";
import data from "./animals.json";

import "./App.css";

/* {
  "fullname": "Mandu the Amazing cat",
  "age": 10
},*/

function cleanUpData() {
  return data.map((animal) => {
    const [name, , trait, type] = animal.fullname.split(" ");
    return { name, trait, type, age: animal.age };
  });
}

function App() {
  const animals = cleanUpData();
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("ASC");

  let filteredAnimals = [...animals];
  if (filter) {
    filteredAnimals = filteredAnimals.filter((ani) => ani.type === filter);
  }

  if (sortKey) {
    filteredAnimals.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortDirection === "ASC" ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortDirection === "ASC" ? 1 : -1;
      }
      return 0;
    });
  }

  function setSorting(key) {
    if (key === sortKey) {
      setSortDirection((oldState) => (oldState === "ASC" ? "DESC" : "ASC"));
    } else {
      setSortDirection("ASC");
    }
    setSortKey(key);
  }

  return (
    <div className="App">
      <h1>Mini animal base</h1>

      <button onClick={() => setFilter("cat")}>only cats</button>
      <button onClick={() => setFilter("dog")}>only dogs</button>
      <button onClick={() => setFilter("")}>All</button>

      <table>
        <thead>
          <tr>
            <td>
              <button onClick={() => setSorting("name")}>name</button>
            </td>
            <td>
              <button onClick={() => setSorting("trait")}>trait</button>
            </td>
            <td>
              <button onClick={() => setSorting("type")}>type</button>
            </td>
            <td>
              <button onClick={() => setSorting("age")}>age</button>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.map((animal) => (
            <tr key={animal.name}>
              <td>{animal.name}</td>
              <td>{animal.trait}</td>
              <td>{animal.type}</td>
              <td>{animal.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
