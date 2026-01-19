import React, { useState } from 'react'
import sustainableImage from '../assets/images/tabBioFuelsFirst.jpg';
import tabImage2 from '../assets/images/thumb2.png';
import tabImage3 from '../assets/images/thumb3.png';

const QualityBiofuels = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sustainabilitySlides = [
        {
            id: 1,
            bgImage: sustainableImage,
            heading: "Reliable energy operations built on responsibility and trust",
            subText: "Our Sustainability Practices",
            thumbImage: sustainableImage,
            thumbTitle: "Reliable energy operations built on responsibility and trust",
        },
        {
            id: 2,
            bgImage: tabImage2,
            heading: "Continuous monitoring and operational controls",
            subText: "Efficient Irrigation Systems",
            thumbImage: tabImage2,
            thumbTitle: "Continuous monitoring and operational controls",
        },
        {
            id: 3,
            bgImage: tabImage3,
            heading: "Plant-wide safety and emergency response systems",
            subText: "Optimised Processing Units",
            thumbImage: tabImage3,
            thumbTitle: "Plant-wide safety and emergency response systems",
        },
    ];
    return (
        <>
            <div className="container">
                <h2 className="section-title">Quality, Safety and Compliance</h2>
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

export default QualityBiofuels