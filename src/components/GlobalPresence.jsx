import React from "react";
import mapImage from '../assets/images/map2.png'

const GlobalSection = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Serving Global Markets <br /> with Realiablity</h2>

                <button className="btn btn-outline-success view-more-btn">
                    Export With Confidence
                </button>
            </div>
            {/* Map section */}
            <div className="mapSection">
                <img src={mapImage} alt="global-presence" className="img-fluid" />
            </div>
        </>
    )
}

export default GlobalSection;