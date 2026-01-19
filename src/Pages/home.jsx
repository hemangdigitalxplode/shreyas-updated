import React, { useState } from "react";
import AboutImage from '../assets/images/about.png'
import cardImg1 from '../assets/images/Background.png'
import cardImg2 from '../assets/images/Background2.png'
import cardImg3 from '../assets/images/Background3.png'
import SustainabilityTabs from "../components/SustainabilityTabs";
import UpcomingProjects from "../components/UpcomingProjects";
import EventsNewsSection from "../components/EventsNewsSection";
import GlobalSection from "../components/GlobalPresence";
import HeroSection from "../components/HeroSection";
import ExpandingSlider from "../components/ExpandingSlider";
import ExpandableCardSlider from "../components/ExpandableCardSlider";
import { Link } from "react-router-dom";

const Home = () => {
    const [activeTab, setActiveTab] = useState("verticals");
    return (
        <>
            <div className="heroBanner">
                <HeroSection />
            </div>
            <div className="container">
                {/* About section */}
                <div className="row align-items-center gy-4 aboutSection">
                    {/* LEFT: Image */}
                    <div className="col-md-6">
                        <img
                            src={AboutImage}
                            alt="About Shreyas Group"
                            className="img-fluid rounded"
                        />
                    </div>
                    {/* RIGHT: Content */}
                    <div className="col-md-6">
                        <div className="leftCard">

                            <div className="eyebrow mb-2">
                                About Shreyas Group
                            </div>

                            <h1 className="mb-3">
                                Creating <br /> Integrated Value  <br /> for the Future
                            </h1>
                            <p>
                                The Shreyas Group is a diversified Indian business group with strong
                                presence across Food & Grain Processing, Distilleries & Ethanol, and
                                Energy & Biofuels. Built on the principles of quality, innovation, and
                                responsible growth, the Group has steadily expanded its operations to
                                serve both domestic and international markets with reliability and trust.
                            </p>
                            <p>
                                Founded under the visionary leadership of Mr. Vinay Kumar Singh, the
                                Shreyas Sortex brings together deep industry expertise, modern technology,
                                and a future-focused approach to create scalable and sustainable
                                enterprises across multiple sectors.
                            </p>
                            {/* CTA Button */}
                            <button className="btn aboutBtn mt-3">
                                Explore More
                            </button>

                        </div>
                    </div>

                </div>

                {/* Our business section */}
                <div className="ourBusinesses">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                        <h2 className="mb-0 headBold">Our Business</h2>

                        <div className="business-tabs">
                            <button
                                className={`tab-btn ${activeTab === "verticals" ? "active" : ""}`}
                                onClick={() => setActiveTab("verticals")}
                            >
                                Verticals
                            </button>

                            <button
                                className={`tab-btn ${activeTab === "listed" ? "active" : ""}`}
                                onClick={() => setActiveTab("listed")}
                            >
                                Listed Companies
                            </button>
                        </div>
                    </div>
                    {/* Tab Content */}
                    {activeTab === "verticals" && (
                        <div className="row g-4">
                            {/* Card 1 */}
                            <div className="col-md-4">
                                <Link to={'/food-grains'}>
                                    <div className="business-card">
                                        <img src={cardImg1} alt="Food & Grain" />
                                        <div className="overlay">
                                            <h5>Food & Grain</h5>
                                            <p>
                                                Integrated rice processing across Basmati
                                                and Non-Basmati categories.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>



                            {/* Card 2 */}
                            <div className="col-md-4">
                                <Link to={'/distrills-ethanol'}>
                                    <div className="business-card">
                                        <img src={cardImg2} alt="Distilleries & Ethanol" />
                                        <div className="overlay">
                                            <h5>Distilleries & Ethanol</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 3 */}
                            <div className="col-md-4">
                                <Link to={'/energy-biofuels'}>
                                    <div className="business-card">
                                        <img src={cardImg3} alt="Energy & Biofuels" />
                                        <div className="overlay">
                                            <h5>Energy & Biofuels</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    )}

                    {activeTab === "listed" && (
                        <div className="row g-4">
                            {/* Card 1 */}
                            <div className="col-md-4">
                                <div className="business-card">
                                    <img src={cardImg1} alt="Food & Grain" />
                                    <div className="overlay">
                                        <h5>Food & Grain</h5>
                                        <p>
                                            Integrated rice processing across Basmati
                                            and Non-Basmati categories.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}


                            {/* Card 3 */}


                        </div>
                    )}
                </div>

            </div>

            {/* slider section */}
            <div className="">
                <div className="my-5">
                    <ExpandingSlider />
                </div>
            </div>
            {/* Sustainability section */}
            <div className="my-5">
                <SustainabilityTabs />
            </div>
            {/* map section */}
            <div className="container">
                <div className="my-5">
                    <GlobalSection />
                </div>
            </div>
            {/* upcoming projects */}
            <div className="container">
                <div className="my-5">
                    <UpcomingProjects />
                </div>
            </div>
            {/* Event section  */}
            <div className="container">
                <div className="my-5">
                    <EventsNewsSection />
                </div>
            </div>
            {/* our journey */}
            <div className="container">
                <div className="my-5">
                    <ExpandableCardSlider />
                </div>
            </div>







        </>
    )

}

export default Home;