import { useState, useEffect } from "react";
import ReactFlipCard from "@holbech/react-flip-card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader((oldLoad) => (oldLoad = true));
      console.log(loader);
    }, 2000);
  }, []);

  return <div className="App">{loader ? <Flipper /> : <Loader />}</div>;
}

export default App;

function Loader() {
  return (
    <>
      <Skeleton /> // Simple, single-line loading skeleton
      <Skeleton count={5} /> // Five-line loading skeleton
    </>
  );
}

function Flipper() {
  return (
    <>
      {" "}
      <div style={{ "--width": "300px", "--height": "300px" }}>
        <ReactFlipCard className="flip_card">
          <p>Front</p>
          <p>Back</p>
        </ReactFlipCard>
      </div>
    </>
  );
}
