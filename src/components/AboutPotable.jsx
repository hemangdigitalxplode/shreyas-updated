import React from "react";
import AboutImage from '../assets/images/about-potable.jpg'


const AboutPotable = () => {
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
                            Potable Spirits
                        </h1>
                        <h6 className='smallHeading'>A collaborative distillation platform driven by quality and scale</h6>
                        <p>
                            The Potable Spirits vertical of Shreyas Group brings together the combined strengths of Keyaan Distilleries Pvt. Ltd. (KDPL) and Shreyas Distilleries to build a robust, future-ready beverage alcohol ecosystem.
                        </p>
                        <p>
                            With deep expertise in distillation, fermentation, and integrated utilities, the vertical is designed to deliver consistent, high-quality spirits across multiple categories.
                        </p>
                        <p>
                            The Potable Spirits vertical combines the distillation expertise of KDPL and Shreyas Distilleries to deliver quality-driven, scalable beverage alcohol solutions.
                        </p>
                        {/* CTA Button */}
                        <p className="bottomBoldPotable">
                            Powered by integrated expertise,
                            technology, and responsible manufacturing
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPotable;