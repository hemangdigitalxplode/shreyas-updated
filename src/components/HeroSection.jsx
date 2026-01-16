import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero_banner.png";
import heroImage2 from "../assets/images/Background2.png";
import heroImage3 from "../assets/images/Background3.png";

const HeroSection = () => {
  const heroSlides = [
    {
      id: 1,
      image: heroImage,
      titleBold: "Pioneering India’s Integrated",
      titleSub: "Rice Processing Excellence",
      desc:
        "Delivering premium Basmati and Non-Basmati rice through advanced technology, certified quality systems, and sustainable operations.",
      stats: [
        { value: "74 MT", label: "/ Hour Capacity" },
        { value: "10+", label: "Global Certifications" },
        { value: "30+", label: "Export Countries" },
        { value: "Zero", label: "Discharge Operations" },
      ],
    },
    {
      id: 2,
      image: heroImage2, // replace later
      titleBold: "State of the Art Manufacturing",
      titleSub: "Infrastructure Excellence",
      desc:
        "World-class Japanese milling, advanced sortex systems, and scalable infrastructure built for quality and efficiency.",
      stats: [
        { value: "100%", label: "Automation" },
        { value: "Japanese", label: "Sortex Tech" },
        { value: "ISO", label: "Certified Plants" },
        { value: "Zero", label: "Waste Policy" },
      ],
    },
    {
      id: 3,
      image: heroImage3, // replace later
      titleBold: "State of the Art Manufacturing",
      titleSub: "Infrastructure Excellence",
      desc:
        "World-class Japanese milling, advanced sortex systems, and scalable infrastructure built for quality and efficiency.",
      stats: [
        { value: "100%", label: "Automation" },
        { value: "Japanese", label: "Sortex Tech" },
        { value: "ISO", label: "Certified Plants" },
        { value: "Zero", label: "Waste Policy" },
      ],
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
              <div className="hero-content">

                <h1>
                  <span className="headBold">{slide.titleBold}</span> <br />
                  <span className="headSubText">{slide.titleSub}</span>
                </h1>

                <p>{slide.desc}</p>

                <div className="hero-stats">
                  {slide.stats.map((stat, i) => (
                    <div key={i}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <button className="btn hero-btn">
                  Know More
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
      {/* Thumbnail Previews */}
      <div className="hero-thumbnails">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-thumb ${activeSlide === index ? "active" : ""
              }`}
            onClick={() => setActiveSlide(index)}
          >
            <img src={slide.image} alt={`Preview ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
