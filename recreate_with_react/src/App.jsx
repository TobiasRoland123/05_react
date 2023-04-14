import { useState } from "react";

import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Sponsors } from "./Sponsors";
import { ExplainerSection } from "./ExplainerSection";

function App() {
  return (
    <div className="App">
      <div className="heroSection">
        <Header></Header>
        <Hero></Hero>
        <Sponsors></Sponsors>
      </div>
      <ExplainerSection></ExplainerSection>
    </div>
  );
}

export default App;
