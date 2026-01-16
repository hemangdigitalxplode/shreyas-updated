import React from "react";
import AboutGrainsImage from '../assets/images/Layer 15.png';
import bgImage from '../assets/images/aboutGrainsBg.png'

const AboutFoodGrains = () => {
    return (
        <>
            <div className="food-grains-about container">
                <div className="row align-items-center gy-4 aboutSection position-relative">

                    {/* CENTER BACKGROUND IMAGE (DIV ke andar) */}
                    <div className="aboutBgImageWrap">
                        <img className="img-fluid BgImageWrap" src={bgImage} alt="Background Grain" />
                    </div>

                    {/*  */} 
                    {/* LEFT: Image */}
                    <div className="col-md-6 position-relative">
                        <img
                            src={AboutGrainsImage}
                            alt="About Shreyas Group"
                            className="aboutFoodGrains"
                        />
                    </div>

                    {/* RIGHT: Content */}
                    <div className="col-md-6 position-relative">
                        <div className="leftCard">
                            <div className="eyebrow mb-2">About</div>

                            <h1 className="mb-3">
                                Shreyas Sortex <br /> Industries Pvt. Ltd.
                            </h1>

                            <h6 className="aboutGrainsEyebrow my-4">
                                A Trusted Name in Global Rice Manufacturing Since 2014
                            </h6>

                            <p>
                                SSIPL is a professionally managed rice manufacturing and export company,
                                founded under the leadership of Mr. Vinay Kumar Singh. With advanced
                                Japanese milling technology and an integrated production model, SSIPL
                                serves both domestic and international markets with consistency and
                                reliability.
                            </p>

                            <button className="btn aboutBtn mt-3">Explore More</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AboutFoodGrains;