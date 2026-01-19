import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/banner-n.jpg';
import stamp1 from '../assets/images/kpdl-logo.jpg'
import stamp2 from '../assets/images/shreyas-banner-logo.jpg'
import stamp3 from '../assets/images/stamp-3.jpg'


const Biofuels = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto slide (optional – remove if not needed)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) =>
                prev === heroSlides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const heroSlides = [
        {
            id: 1,
            image: heroImage,
            titleBold: "Energy &<br/>Biofuels",
            desc:
                "Powering sustainable energy solutions for industries and communities",
            stats: [
                { value: "7+MW", label: "Integrated Power Capacity" },
                { value: "100% Renewable", label: "Biofuel-Driven Energy" },
                { value: "Multi-Fuel", label: "Biomass Flexiblity" },
                { value: "ZLow Emission", label: "Clean Energy Systems" },
            ],
            ctaBtn: "Explore Our Capabilities"
        }
    ];

    return (
        <>
            <section className="hero-section">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${activeSlide === index ? "active" : ""}`}
                    >
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt="Hero"
                            className="hero-img"
                        />
                        {/* Overlay */}
                        <div className="hero-overlay-biofuels">
                            <div className="container">
                                <div className="hero-content ethanolHeroContent">

                                    {/* STAMPS */}
                                    <div className="hero-stamps">
                                        <img src={stamp2} alt="Shreyas Logo" />
                                        <img src={stamp1} alt="KDPL Logo" />
                                        <img src={stamp3} alt="KDPL Logo" />
                                    </div>

                                    {/* TITLE */}
                                    <h1>
                                        <span
                                            className="headBold"
                                            dangerouslySetInnerHTML={{ __html: slide.titleBold }}
                                        ></span>
                                    </h1>

                                    {/* DESC */}
                                    <p>{slide.desc}</p>

                                    {/* CTA */}
                                    <button className="btn hero-btn foodGrainHeroBtn">
                                        {slide.ctaBtn}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="hero-controls">

                    {/* Progress line */}
                    <div className="hero-controls__progress d-none">
                        <span className="hero-controls__progress-indicator"></span>
                    </div>

                    {/* Stats + Arrows */}
                    <div className="hero-controls__row">

                        {/* Stats */}
                        <div className="hero-controls__stats">
                            {heroSlides[activeSlide]?.stats?.map((stat, i) => (
                                <div key={i} className="hero-controls__stat">
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="hero-controls__arrows">
                            <button
                                className="hero-controls__arrow"
                                onClick={() =>
                                    setActiveSlide(
                                        activeSlide === 0 ? heroSlides.length - 1 : activeSlide - 1
                                    )
                                }
                            >
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>

                            <button
                                className="hero-controls__arrow"
                                onClick={() =>
                                    setActiveSlide(
                                        activeSlide === heroSlides.length - 1 ? 0 : activeSlide + 1
                                    )
                                }
                            >
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Biofuels;