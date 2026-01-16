import React from "react";
import SuhelaBg from '../assets/images/suhela-bg.png'

const ProductRange = () => {
    return (
        <>
            <div className="productRange container">
                <h2 className="section-title">Our Product Range</h2>

                <section className="suhela-section">
                    {/* Background Image (Kitchen + Product in SAME image) */}
                    <div className="suhela-bg">
                        <img src={SuhelaBg} alt="Suhela Rice Kitchen Scene" />
                    </div>

                    {/* Overlay Content */}
                    <div className="suhela-overlay">
                        <div className="suhela-content">
                            <span className="suhela-tag">Basmati Rice</span>

                            <h2 className="suhela-heading">
                                SUHELA – A Brand <br />
                                That Reflects Purity & Aroma
                            </h2>

                            <p className="suhela-subtitle">
                                Premium Basmati & Non-Basmati Rice for Global Consumers
                            </p>

                            <p className="suhela-desc">
                                Crafted under stringent quality controls, SUHELA rice delivers
                                authentic taste, aroma, and consistency across markets.
                            </p>

                            <div className="suhela-actions">
                                <button className="suhela-btn suhela-btn-primary">
                                    Explore More
                                </button>
                                <button className="suhela-btn suhela-btn-secondary">
                                    Discover SUHELA
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductRange;