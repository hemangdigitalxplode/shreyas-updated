import React, { useEffect, useState } from 'react'
import heroImage from '../assets/images/ethanol-hero.jpg';
import stamp1 from '../assets/images/kpdl-logo.jpg'
import stamp2 from '../assets/images/shreyas-banner-logo.jpg'

const EthanolHeroSection = () => {
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
            titleBold: "Distilleries<br/> & Ethanol",
            desc:
                "Driving India's green energy and integrated distillation future",
            stats: [
                { value: "300", label: "Ethanol Production Capacity" },
                { value: "Grain-Based", label: "Maize & Rice Feedstock" },
                { value: "Integrated CO", label: "Recovery & Utilisation" },
                { value: "Captive Power", label: "Energy Self Reliant Operation" },
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
                        <div className="hero-overlay-potable">
                            <div className="container">
                                <div className="hero-content ethanolHeroContent">

                                    {/* STAMPS */}
                                    <div className="hero-stamps">
                                        <img src={stamp1} alt="KDPL Logo" />
                                        <img src={stamp2} alt="Shreyas Logo" />
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

export default EthanolHeroSection