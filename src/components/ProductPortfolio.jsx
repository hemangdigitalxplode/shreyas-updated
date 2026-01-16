import React from "react";
import cardImg1 from '../assets/images/potable-card-1.jpg'
import cardImg2 from '../assets/images/potable-card-2.jpg'
import cardImg3 from '../assets/images/potable-card-3.jpg'
import cardImg4 from '../assets/images/potable-card-4.jpg'

const ProductPortfolio = () => {
    const coreCapabilitiesData = [
        {
            id: 1,
            image: cardImg1,
            heading: 'Extra Neutral Alcohol (ENA)',
            text: "Grain and molasses based, high-purity alcohol for premium spirits",
        },
        {
            id: 2,
            image: cardImg2,
            heading: 'Country Liquor',
            text: "Grain-based spirits designed for high-volume domestic markets",
        },
        {
            id: 3,
            image: cardImg3,
            heading: 'Malt Spirits',
            text: "Premium malt spirit production with optional aging capabilities",
        },
        {
            id: 4,
            image: cardImg4,
            heading: 'IMFL Bottling (Upcoming)',
            text: "Automated bottling and packaging for Indian Made Foreign Liquor",
        },
    ];

    return (
        <>
            <section className="core-capabilities-section">
                <div className="container">
                    <h2 className="core-capabilities-heading">Product Portfolio</h2>
                    <div className="core-capabilities-grid">
                        {coreCapabilitiesData.map((item) => (
                            <div className="core-capabilities-card" key={item.id}>
                                <div className="core-capabilities-image">
                                    <img src={item.image} alt="Core capability" />
                                </div>
                                <h2 className="potableHeading">{item.heading}</h2>
                                <p className="core-capabilities-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductPortfolio;