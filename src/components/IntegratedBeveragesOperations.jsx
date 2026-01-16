import React from "react";
import bgImg from '../assets/images/potable-tab-1.jpg'


const IntegratedBeveragesOperations = () => {
    return (
        <>
            <section class="ethanol-integrated-section">
                <div class="container ethanol-integrated-header">
                    <div class="ethanol-integrated-left">
                        <h2 class="ethanol-integrated-title">Integrated Beverage Operations</h2>
                        <p class="ethanol-integrated-subtitle">
                           A unified ecosystem for spirits production
                        </p>
                    </div>

                    <div class="ethanol-integrated-right">
                        <p>
                           Our potable spirits operations are built on an integrated beverage ecosystem where alcohol production, blending, bottling, utilities, and quality control function seamlessly together. This integrated approach ensures consistency in taste, operational efficiency, regulatory compliance, and scalability across multiple spirit categories.
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
                        Designed for consistency, efficiency, and future growth
                        <span></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntegratedBeveragesOperations;