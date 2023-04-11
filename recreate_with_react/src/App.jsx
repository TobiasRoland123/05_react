import { useState } from "react";

import "./App.css";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero_section">
      <div>
        <HeroHeaderText />
        <GetStartetBtn />
      </div>
      <HeroFig />
    </section>
  );
}

function HeroHeaderText() {
  return (
    <>
      <h1 className="hero_header">
        Blockchain Finally made <span>accessible</span>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt porro tempora odit, error neque nisi</p>
    </>
  );
}

function HeroFig() {
  return (
    <figure className="hero_fig">
      <img
        src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=usO7IqVmmYAAX-nfiem&_nc_ht=scontent-cph2-1.xx&oh=00_AfC2eU8Eu-6bifP16TidFAF8wj3jMXpZtCLvZUO6Sx4TTg&oe=645CB10E"
        alt=""
      />
    </figure>
  );
}

export function Button() {
  return <button>Contact us</button>;
}

function GetStartetBtn() {
  return (
    <>
      <button className="get_started_btn">Get started</button>
    </>
  );
}

export default App;
