import React from "react";
import GrwoFutureImage from '../assets/images/potable-growth-img.jpg'


const PotableGrowthFuture = () => {
    return (
        <>
            <div className="row align-items-center gy-4 aboutSection">
                {/* LEFT: Image */}
                <div className="col-md-6">
                    <div className="leftCard">
                        <h1 className="mb-3 ethanolHeading">
                            Growth & future <br /> outlook
                        </h1>
                        <h6 className='smallHeading'>Expanding into premium and high-volume spirit markets</h6>
                        <p>
                          The Potable Spirits vertical is strategically positioned for expansion across ENA, country liquor, malt spirits, and IMFL bottling. With scalable infrastructure and combined expertise from KDPL and Shreyas Distilleries, the vertical is aligned to meet evolving market demand while maintaining quality and operational efficiency.
                        </p>
                        {/* CTA Button */}
                        <button className="btn aboutBtn mt-3">
                            Future-ready beverage platform <br />
                            with scalable capabilities
                        </button>

                    </div>
                </div>
                {/* RIGHT: Content */}
                <div className="col-md-6">
                    <img
                        src={GrwoFutureImage}
                        alt="About Shreyas Group"
                        className="img-fluid"
                    />
                </div>


            </div >
        </>
    )
}

export default PotableGrowthFuture;