import React from 'react'
import bgImg from '../assets/images/integrated-operations.jpg'

const IntegratedOptions = () => {
    return (
        <>
            <section class="ethanol-integrated-section">
                <div class="container ethanol-integrated-header">
                    <div class="ethanol-integrated-left">
                        <h2 class="ethanol-integrated-title">Integrated operations</h2>
                        <p class="ethanol-integrated-subtitle">
                            An efficient and scalable bioenergy ecosystem
                        </p>
                    </div>

                    <div class="ethanol-integrated-right">
                        <p>
                            Our distillery operations are designed as a fully integrated ecosystem,
                            combining ethanol production, CO₂ recovery, captive power, and by-product
                            management. This integration enhances operational efficiency, reduces
                            environmental impact, and ensures reliable performance across the value
                            chain.
                        </p>
                    </div>
                </div>


                <div class="ethanol-integrated-image-wrapper">
                    <img
                        src={bgImg}
                        alt="Integrated operations"
                        class="ethanol-integrated-image"
                    />

                    <div class="ethanol-integrated-image-text">
                        Designed for operational efficiency and long-term scalability
                        <span></span>
                    </div>
                </div>
            </section>


        </>
    )
}

export default IntegratedOptions