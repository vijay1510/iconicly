import React from "react";
import "./App.css";
import Header from "./Componets/Header";
import Main from "./Componets/Main";
import About from "./Componets/About";
import BookModels from "./Componets/BookModels";
import HowItWorks from "./Componets/HowItWorks";
import Pricing from "./Componets/Pricing";
import Join from "./Componets/Join";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <BookModels />
      <HowItWorks />
      <Pricing />
      <Join />
    </>
  );
}
