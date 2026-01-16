import React from 'react'
import AboutImage from '../assets/images/ethanol-about.jpg'

const AboutEthanol = () => {
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
                            Distilleries & Ethanol
                        </h1>
                        <h6 className='smallHeading'>An integral part of Shreyas Group’s sustainable growth journey</h6>
                        <p>
                            The Distilleries & Ethanol vertical of Shreyas Group represents our commitment to sustainable energy, advanced manufacturing, and responsible industrial development. Built on the principles of efficiency, innovation, and environmental stewardship, this vertical plays a key role in supporting India’s renewable fuel objectives.
                        </p>
                        <p>
                            Our operations integrate grain-based ethanol production with modern utilities, CO₂ recovery, and energy optimisation systems to deliver consistent performance and long-term value. By combining technology-led processes with scalable infrastructure, we continue to strengthen our position in the bioenergy and distillation ecosystem.
                        </p>
                        {/* CTA Button */}
                        <button className="btn aboutBtn mt-3">
                            Explore More
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutEthanol