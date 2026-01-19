import React, { useState } from 'react'
import sustainableImage from '../assets/images/new-life-tree-stump.jpg';
import tabImage2 from '../assets/images/thumb2.png';
import tabImage3 from '../assets/images/thumb3.png';

const EnviormentImpact = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sustainabilitySlides = [
        {
            id: 1,
            bgImage: sustainableImage,
            heading: "Balancing energy demand with environmental responsibility",
            subText: "Our Sustainability Practices",
            thumbImage: sustainableImage,
            thumbTitle: "Balancing energy demand with environmental responsibility",
        },
        {
            id: 2,
            bgImage: tabImage2,
            heading: "Biomass conversion & circular economy practices",
            subText: "Efficient Irrigation Systems",
            thumbImage: tabImage2,
            thumbTitle: "Biomass conversion & circular economy practices",
        },
        {
            id: 3,
            bgImage: tabImage3,
            heading: "Responsible water and waste management",
            subText: "Optimised Processing Units",
            thumbImage: tabImage3,
            thumbTitle: "Responsible water and waste management",
        },
    ];
    return (
        <>
            <div className="container">
                <h2 className="section-title">Sustainability & Environmental Impact</h2>
                <div className="futureTabWrapper">
                    <section className="sustain-slider">
                        {/* Background Image */}
                        <div className="sustain-bg">
                            <img
                                src={sustainabilitySlides[activeIndex].bgImage}
                                alt="Sustainability"
                            />
                        </div>

                        {/* Overlay Content */}
                        <div className="sustain-overlay">
                            <div className="sustain-left">
                                <h2 className='qualityEthanolHeading'>{sustainabilitySlides[activeIndex].heading}</h2>
                                {/* <span className="sustain-sub">
                                    {sustainabilitySlides[activeIndex].subText}
                                </span> */}
                            </div>

                            {/* Thumbnails */}
                            <div className="sustain-thumbs">
                                {sustainabilitySlides.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`sustain-thumb ${activeIndex === index ? "active" : ""
                                            }`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <img src={item.thumbImage} alt={item.thumbTitle} />
                                        <p>{item.thumbTitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default EnviormentImpact