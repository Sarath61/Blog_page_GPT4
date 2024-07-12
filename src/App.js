import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatGPT4,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
