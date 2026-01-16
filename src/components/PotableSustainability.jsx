import React, { useState } from 'react'
import sustainableImage from '../assets/images/potable-tab-section-2.jpg';
import tabImage2 from '../assets/images/thumb2.png';
import tabImage3 from '../assets/images/thumb3.png';

const PotableSustainability = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sustainabilitySlides = [
        {
            id: 1,
            bgImage: sustainableImage,
            heading: "Responsible spirits manufacturing for a cleaner future",
            subText: "Reducing environmental impact through responsible operations",
            thumbImage: sustainableImage,
            thumbTitle: "Responsible spirits manufacturing for a cleaner future",
        },
        {
            id: 2,
            bgImage: tabImage2,
            heading: "Energy-efficient distillation and blending systems",
            subText: "Efficient Irrigation Systems",
            thumbImage: tabImage2,
            thumbTitle: "Energy-efficient distillation and blending systems",
        },
        {
            id: 3,
            bgImage: tabImage3,
            heading: "Waste and by-product optimisation",
            subText: "Optimised Processing Units",
            thumbImage: tabImage3,
            thumbTitle: "Waste and by-product optimisation",
        },
    ];
    return (
        <>
            <div className="container">
                <h2 className="section-title">Sustainability Commitment</h2>
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

export default PotableSustainability;