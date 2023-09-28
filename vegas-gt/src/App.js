import React from "react";
import VegasGT from "../src/components/VegasGT";
import TopCasino from "./components/TopCasino";
import "bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./components/Reviews";
import GameProvider from "./components/GameProvider";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <VegasGT />
      <TopCasino />
      <Reviews />
      <GameProvider />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
