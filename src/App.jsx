import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./Pages/home";
import FoodGrains from "./Pages/foodgrains";
import DistrilsEthanol from "./Pages/distrilsEthanol";
import PotableSpritis from "./Pages/potableSpritis";
import EnergyBioFuels from "./Pages/energyBiofuels";

const App = () => {
  return (
    <div className="">

      {/* Header – sab routes pe */}
      <BrowserRouter>
        <Header />

        {/* Routes */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food-grains" element={<FoodGrains />} />
            <Route path="/distrills-ethanol" element={<DistrilsEthanol />} />
            <Route path="/potable-spirits" element={<PotableSpritis />} />
            <Route path="/energy-biofuels" element={<EnergyBioFuels />} />
          </Routes>
        </main>
        {/* Footer – sab routes pe */}
        <Footer />

      </BrowserRouter>


    </div>
  );
};

export default App;
