import { useState } from "react";
import sustainableImage from '../assets/images/sustainability.png';

const SustainabilityTabs = () => {
    const [activeTab, setActiveTab] = useState("green");

    return (
        <section className="container my-5">

            {/* Header Row */}
            <div className="sustainability-header">
                <h2 className="sustainability-title">Sustainability</h2>

                <div className="sustainability-tabs">
                    <button
                        className={`s-tab ${activeTab === "green" ? "active" : ""}`}
                        onClick={() => setActiveTab("green")}
                    >
                        Green Initiatives
                    </button>

                    <button
                        className={`s-tab ${activeTab === "csr" ? "active" : ""}`}
                        onClick={() => setActiveTab("csr")}
                    >
                        CSR Activities
                    </button>

                    <button
                        className={`s-tab ${activeTab === "cert" ? "active" : ""}`}
                        onClick={() => setActiveTab("cert")}
                    >
                        Certifications
                    </button>

                    <button
                        className={`s-tab ${activeTab === "roadmap" ? "active" : ""}`}
                        onClick={() => setActiveTab("roadmap")}
                    >
                        Future Roadmap
                    </button>
                </div>
            </div>

            {/* Tab Content Placeholder */}
            <div className="mt-4">
                {activeTab === "green" && (
                    <div className="sustainability-image-wrap">
                        <img
                            src={sustainableImage}
                            className="img-fluid sustainability-image"
                            alt="Sustainability"
                        />

                        {/* Overlay Content */}
                        <div className="sustainability-overlay">
                            <h3>Green Initiatives</h3>
                            <p>Carbon footprint reduction</p>
                        </div>
                    </div>
                )}

                {activeTab === "csr" && (
                    <p>CSR Activities content goes here</p>
                )}

                {activeTab === "cert" && (
                    <p>Certifications content goes here</p>
                )}

                {activeTab === "roadmap" && (
                    <p>Future Roadmap content goes here</p>
                )}
            </div>

        </section>
    );
};

export default SustainabilityTabs;
