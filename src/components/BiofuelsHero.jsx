import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/potable-hero.jpg';
import stamp1 from '../assets/images/kpdl-logo.jpg'
import stamp2 from '../assets/images/shreyas-banner-logo.jpg'


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
            titleBold: "Potable<br/>Spirits",
            desc:
                "Crafting quality spirits through integrated distillation excellence",
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
                        <div className="hero-overlay">
                            <div className="container">
                                <div className="hero-content ethanolHeroContent">

                                    {/* STAMPS */}
                                    <div className="hero-stamps">
                                        <img src={stamp2} alt="Shreyas Logo" />
                                        <img src={stamp1} alt="KDPL Logo" />
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
                {/* Slider Arrows */}
                <div className="hero-arrows">
                    <button
                        className="hero-arrow left"
                        onClick={() =>
                            setActiveSlide(
                                activeSlide === 0 ? heroSlides.length - 1 : activeSlide - 1
                            )
                        }
                    >
                        ←
                    </button>

                    <button
                        className="hero-arrow right"
                        onClick={() =>
                            setActiveSlide(
                                activeSlide === heroSlides.length - 1 ? 0 : activeSlide + 1
                            )
                        }
                    >
                        →
                    </button>
                </div>
                {/* Stats below arrows */}
                <div className="hero-thumbnails d-none">
                    <div className="hero-stats-foodGrains">
                        {heroSlides[activeSlide]?.stats?.map((stat, i) => (
                            <div key={i} className="hero-stat-item">
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Biofuels;