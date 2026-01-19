import React from "react";
import AboutImage from '../assets/images/about-biofuels.jpg'


const AboutBiofuels = () => {
    return (
        <>
            <div className="row align-items-center gy-4 aboutSection">
                {/* LEFT: Image */}
                <div className="col-md-6">
                    <img
                        src={AboutImage}
                        alt="About Shreyas Group"
                        className="img-fluid aboutEthanol"
                    />
                </div>
                {/* RIGHT: Content */}
                <div className="col-md-6">
                    <div className="leftCard">

                        <div className="eyebrow mb-2">
                            About
                        </div>

                        <h1 className="mb-3 ethanolHeading">
                            Energy & Biofuels
                        </h1>
                        <h6 className='smallHeading'>Advancing renewable energy through innovation
                            and responsibility</h6>
                        <p>
                            The Energy & Biofuels vertical of Shreyas Group focuses on delivering sustainable energy solutions that support industrial growth while reducing environmental impact.
                        </p>
                        <p>
                            Through the integration of renewable power generation, biofuel production, and energy optimisation systems, we contribute to a resilient and future-ready energy ecosystem.
                        </p>


                        {/* CTA Button */}
                        <p className="bottomBoldPotable">
                            Building reliable energy systems
                            for a cleaner future
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBiofuels;