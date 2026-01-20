import React from "react";
import PotableHero from "../components/PotableHero";
import AboutPotable from "../components/AboutPotable";
import IntegratedBeveragesOperations from "../components/IntegratedBeveragesOperations";
import ProductPortfolio from "../components/ProductPortfolio";
import ExpandingSliderPotable from "../components/ExpandingSliderPotable";
import PotableQuality from "../components/PotableQuality";
import PotableSustainability from "../components/PotableSustainability";
import PotableGrowthFuture from "../components/PotableGrowthFuture";


const PotableSpritis = () => {
    return (
        <>
            <div className='heroBannerContainer'>
                <PotableHero />
            </div>
            {/* about-us */}
            <div className='heroBannerContainer container'>
                <AboutPotable />
            </div>
            {/* Tab section */}
            <div className='container'>
                <IntegratedBeveragesOperations />
            </div>
            {/* Portfolio section */}
            <div className="container">
                <ProductPortfolio />
            </div>
            {/* Slider */}
            <div className="potableSliderContainer">
                <ExpandingSliderPotable />
            </div>
            {/* tab section */}
            <div className="container">
                <PotableQuality />
            </div>
            {/* tab section - 2 */}
            <div className="container my-5">
                <PotableSustainability />
            </div>
            {/* last section */}
            <div className="container">
                <PotableGrowthFuture />
            </div>

        </>
    )
}

export default PotableSpritis;