import React from 'react'
import bgImg from '../assets/images/integrated-banner.jpg'

const IntegratedBiofuels = () => {
    return (
        <>
            <section class="ethanol-integrated-section">
                <div class="container ethanol-integrated-header">
                    <div class="ethanol-integrated-left">
                        <h2 class="biofuels-integrated-title">Integrated Energy Solutions</h2>
                        <p class="ethanol-integrated-subtitle">
                            Reliable energy systems blending efficiency and sustainability
                        </p>
                    </div>

                    <div class="ethanol-integrated-right">
                        <p>
                            Our energy platforms combine power generation, biomass conversion, and fuel production to create an integrated, resilient ecosystem. We emphasise performance, efficiency, and environmental stewardship, ensuring energy value chains that deliver measurable benefits across sectors.
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

export default IntegratedBiofuels