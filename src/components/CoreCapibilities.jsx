import React from 'react'

const CoreCapibilities = () => {
    const coreCapabilitiesData = [
        {
            id: 1,
            image: "/images/capability-ethanol.jpg",
            text: "Grain-based ethanol production aligned with the Ethanol Blending Programme",
        },
        {
            id: 2,
            image: "/images/capability-co2.jpg",
            text: "CO₂ recovery for food-grade and industrial applications",
        },
        {
            id: 3,
            image: "/images/capability-power.jpg",
            text: "Captive power generation and optimised steam utilities",
        },
        {
            id: 4,
            image: "/images/capability-byproduct.jpg",
            text: "Efficient by-product management supporting circular economy practices",
        },
    ];


    return (
        <>
            <section className="core-capabilities-section">
                <div className="container">
                    <h2 className="core-capabilities-heading">Core Capabilities</h2>
                    <div className="core-capabilities-grid">
                        {coreCapabilitiesData.map((item) => (
                            <div className="core-capabilities-card" key={item.id}>
                                <div className="core-capabilities-image">
                                    <img src={item.image} alt="Core capability" />
                                </div>
                                <p className="core-capabilities-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoreCapibilities