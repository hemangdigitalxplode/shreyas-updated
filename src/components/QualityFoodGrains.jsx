import React, { useState } from 'react'
import sustainableImage from '../assets/images/person-white-coat-is-working-with-many-different-grains.jpg';
import tabImage2 from '../assets/images/thumb2.png';
import tabImage3 from '../assets/images/thumb3.png';

const QualityFoodGrains = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sustainabilitySlides = [
        {
            id: 1,
            bgImage: sustainableImage,
            heading: "Delivering safe, pure, and reliable food products",
            subText: "Our Sustainability Practices",
            thumbImage: sustainableImage,
            thumbTitle: "Delivering safe, pure, and reliable food products",
        },
        {
            id: 2,
            bgImage: tabImage2,
            heading: "Hygienic processing and storage systems",
            subText: "Efficient Irrigation Systems",
            thumbImage: tabImage2,
            thumbTitle: "Hygienic processing and storage systems",
        },
        {
            id: 3,
            bgImage: tabImage3,
            heading: "Traceability from sourcing to dispatch",
            subText: "Optimised Processing Units",
            thumbImage: tabImage3,
            thumbTitle: "Traceability from sourcing to dispatch",
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

export default QualityFoodGrains