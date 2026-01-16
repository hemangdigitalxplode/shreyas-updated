import React from "react";

import cardImage1 from "../assets/images/upcomingprojects1.png";
import cardImage2 from "../assets/images/upcomingProjects2.png";
import cardImage3 from "../assets/images/upcomingprojects3.png";

const projectsData = [
  {
    id: 1,
    image: cardImage1,
    title:
      "Launch and Market Expansion of Premium Rice Brand “SUHELA”",
    description:
      "SSIPL’s flagship brand SUHELA gains strong acceptance across domestic and export markets, offering a complete range of premium rice varieties known for aroma, purity, and consistency.",
  },
  {
    id: 2,
    image: cardImage2,
    title:
      "Operational Enhancements in Manufacturing & Infrastructure",
    description:
      "The Group continues to invest in advanced Japanese milling and sortex technology, modern warehousing, and energy-efficient systems to improve production capacity and grain quality.",
  },
  {
    id: 3,
    image: cardImage3,
    title:
      "Group Strengthens Sustainable Manufacturing Practices",
    description:
      "With in-house power generation, zero hazardous wastewater discharge, and water recycling initiatives, the Shreyas Group advances its commitment to environmentally responsible operations.",
  },
];

const UpcomingProjects = () => {
  return (
    <section className="container upcoming-projects">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title headBold">Upcoming Projects</h2>

        <button className="btn btn-outline-success view-more-btn">
          View More
        </button>
      </div>
      {/* Cards */}
      <div className="row g-4">
        {projectsData.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />

              <div className="project-content">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default UpcomingProjects;
