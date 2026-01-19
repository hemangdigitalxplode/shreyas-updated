import React from 'react'
import AboutFoodGrains from '../components/AboutFoodGrains';
import ProductRange from '../components/ProductRange';
import ExpandingSlider from '../components/ExpandingSlider';
import CertificationsSection from '../components/CertificationsSection';
import CareerBanner from '../components/CareerBanner';
import FoodGrainsHero from '../components/FoodGrainsHero';
import FutureReady from '../components/FutureReady';
import QualityFoodGrains from '../components/QualityFoodGrains';

const FoodGrains = () => {
    return (
        <>
            {/* Hero section */}
            <div className='heroBannerContainer'>
                <FoodGrainsHero />
            </div>
            {/* About section */}
            <div className='aboutGrainsSectionContainer'>
                <AboutFoodGrains />
            </div>
            {/* Product range section */}
            <div className='ourProductRangeContainer'>
                <ProductRange />
            </div>
            {/* Slider section */}
            <div className='sliderSectionContainer'>
                <ExpandingSlider />
            </div>
            <div className="container my-5">
                <QualityFoodGrains />
            </div>
            {/* tab section */}
            <div className='tabSectionContainer'>
                <FutureReady />
            </div>
            {/* certificate section */}
            <div className='certificationSectionContainer'>
                <CertificationsSection />
            </div>
            {/* Cta section */}
            <div className='certificationSectionContainer'>
                <CareerBanner />
            </div>
        </>
    )
}

export default FoodGrains;