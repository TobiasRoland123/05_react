import { useState } from "react";
import "./App.css";
import ReactFlipCard from "@holbech/react-flip-card";

function App() {
  return (
    <div className="App">
      <h1>Flip card Project</h1>

      <div style={{ "--width": "300px", "--height": "300px" }}>
        <ReactFlipCard className="flip_card">
          <p>Front</p>
          <p>Back</p>
        </ReactFlipCard>
      </div>
    </div>
  );
}

export default App;
