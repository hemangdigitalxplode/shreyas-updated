import React from "react";
import Biofuels from "../components/BiofuelsHero";
import AboutBiofuels from "../components/AboutBiofuels";
import IntegratedBiofuels from "../components/IntegratedBiofuels";
import CoreCapibilitiesBiofuels from "../components/CoreCapibilitiesBiofuels";
import ExpandingSliderBiofuels from "../components/ExpandingSliderBiofuels";
import EnviormentImpact from "../components/EnviormentImpact";
import FutureGrowthBiofuels from "../components/FutureGrowthBiofuels";
import QualityBiofuels from "../components/QualityBiofuels";


const EnergyBioFuels = () => {
    return (
        <>
            <div className="heroBannerContainer">
                <Biofuels />
            </div>

            <div className='container'>
                <AboutBiofuels />
            </div>

            <div className='container'>
                <IntegratedBiofuels />
            </div>

            <div className="container">
                <CoreCapibilitiesBiofuels />
            </div>

            <div className="ethanolExpandingSlider">
                <ExpandingSliderBiofuels />
            </div>

            <div className="container my-5">
                <QualityBiofuels />
            </div>

            <div className="container">
                <EnviormentImpact />
            </div>

            <div className="container">
                <FutureGrowthBiofuels />
            </div>

        </>
    )
}

export default EnergyBioFuels;