import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/foodGrainsHero.png';
import heroImage2 from '../assets/images/foodGrainsHero.png';


const FoodGrainsHero = () => {
    const heroSlides = [
        {
            id: 1,
            image: heroImage,
            titleBold: "Pioneering <br/> India’s <br/>  Integrated",
            titleSub: "Rice Processing Excellence",
            desc:
                "Delivering premium Basmati and Non-Basmati rice through advanced technology, certified quality systems, and sustainable operations.",
            stats: [
                { value: "74 MT", label: "/ Hour Capacity" },
                { value: "10+", label: "Global Certifications" },
                { value: "30+", label: "Export Countries" },
                { value: "Zero", label: "Discharge Operations" },
            ],
            ctaBtn: "Explore Our Products"
        },
        {
            id: 2,
            image: heroImage2, // replace later
            titleBold: "State of <br/> the Art <br/> Manufacturing",
            titleSub: "Infrastructure Excellence",
            desc:
                "World-class Japanese milling, advanced sortex systems, and scalable infrastructure built for quality and efficiency.",
            stats: [
                { value: "74 MT", label: "/ Hour Capacity" },
                { value: "10+", label: "Global Certifications" },
                { value: "30+", label: "Export Countries" },
                { value: "Zero", label: "Discharge Operations" },
            ],
            ctaBtn: "Explore Our Products"
        },
    ];

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
                                <div className="hero-content foodGrainsHeroContent">
                                    <h1>
                                        <span
                                            className="headBold"
                                            dangerouslySetInnerHTML={{ __html: slide.titleBold }}
                                        ></span><br />
                                        <span className="headSubText">{slide.titleSub}</span>
                                    </h1>
                                    <p>{slide.desc}</p>
                                    <button className="btn hero-btn foodGrainHeroBtn">
                                        {slide.ctaBtn}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                {/* Bottom Controls Wrapper */}
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

export default FoodGrainsHero;