import React from 'react'
import EthanolHeroSection from '../components/EthanolHeroSection'
import AboutEthanol from '../components/AboutEthanol'
import IntegratedOptions from '../components/IntegratedOptions'
import CoreCapibilities from '../components/CoreCapibilities'
import ExpandingSliderEthanol from '../components/ExpandingSliderEthanol'
import Quality from '../components/Quality'
import SustainabilityCommitment from '../components/SustainabilityCommitment'
import GrowthFuture from '../components/GrowthFuture'

const DistrilsEthanol = () => {
  return (
    <>
      <div className='heroBannerContainer'>
        <EthanolHeroSection />
      </div>

      <div className='container'>
        <AboutEthanol />
      </div>

      <div className='container'>
        <IntegratedOptions />
      </div>

      <div className="container">
        <CoreCapibilities />
      </div>

      {/* expanding slider */}
      <div className='ethanolExpandingSlider'>
        <ExpandingSliderEthanol />
      </div>

      {/* Quality section */}
      <div className='qualitySafety container'>
        <Quality />
      </div>

      <div className='sustainabilityCommitment container my-5'>
        <SustainabilityCommitment />
      </div>

      {/* Growth & future */}
      <div className='container'>
        <GrowthFuture />
      </div>



    </>
  )
}

export default DistrilsEthanol