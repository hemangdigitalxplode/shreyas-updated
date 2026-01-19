import React from 'react'
import cardImg1 from '../assets/images/cardImagebio1.jpg'
import cardImg2 from '../assets/images/cardImagebio2.jpg'
import cardImg3 from '../assets/images/cardImagebio3.jpg'
import cardImg4 from '../assets/images/cardImagebio4.jpg'

const CoreCapibilitiesBiofuels = () => {
    const coreCapabilitiesData = [
        {
            id: 1,
            image: cardImg1,
            text: "Biofuel production from renewable feedstocks",
        },
        {
            id: 2,
            image: cardImg2,
            text: "Captive and grid-integrated power generation",
        },
        {
            id: 3,
            image: cardImg3,
            text: "Biomass and waste-to-energy conversion",
        },
        {
            id: 4,
            image: cardImg4,
            text: "Energy Efficiency and Optimisations Program",
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

export default CoreCapibilitiesBiofuels