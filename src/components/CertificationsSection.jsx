import React from "react";
import logo1 from '../assets/images/certifiactions/logo1.png'
import logo2 from '../assets/images/certifiactions/logo2.png'
import logo3 from '../assets/images/certifiactions/logo3.png'
import logo4 from '../assets/images/certifiactions/logo4.png'
import logo5 from '../assets/images/certifiactions/logo5.png'
import logo6 from '../assets/images/certifiactions/logo6.png'
import logo7 from '../assets/images/certifiactions/logo7.png'
import logo8 from '../assets/images/certifiactions/logo8.png'

const certifications = [
  {
    id: 1,
    name: "FSSAI",
    image: logo1,
  },
  {
    id: 2,
    name: "ISO 22000",
    image: logo2,
  },
  {
    id: 3,
    name: "ISO 9001",
    image: logo3,
  },
  {
    id: 4,
    name: "HACCP",
    image: logo4,
  },
  {
    id: 5,
    name: "APEDA",
    image: logo5,
  },
  {
    id: 6,
    name: "GMP",
    image: logo6,
  },
  {
    id: 7,
    name: "Halal",
    image: logo7,
  },
  {
    id: 8,
    name: "AIREA",
    image: logo8,
  },
];

const CertificationsSection = () => {
  return (
    <section className="cert-section container">
      <div className="cert-container">
        {/* Left Content */}
        <div className="cert-content">
          <h2 className="cert-heading">
            Certified for Global <br /> Food Safety & Quality
          </h2>

          <p className="cert-text">
            Every batch is tested internally and verified by international
            agencies such as SGS, Intertek, and Bureau Veritas.
          </p>

          <button className="cert-btn">Our Quality Commitment</button>
        </div>

        {/* Right Logos */}
        <div className="cert-logos">
          {certifications.map((item) => (
            <div className="cert-logo-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
