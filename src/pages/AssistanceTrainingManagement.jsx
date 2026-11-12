
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./PerformanceSolutions.css";
import "./AssistanceTrainingManagement.css";

// Replace these paths with the original CTI logo assets
// and actual CRM training destinations when available.
const trainingOrganizations = [
  {
    name: "AFGSC",
    image: "/assets/afgsc-logo.png",
    href: "#",
  },
  {
    name: "AFRC",
    image: "/assets/afrc-logo.png",
    href: "#",
  },
  {
    name: "CAF",
    image: "/assets/caf-logo.png",
    href: "#",
  },
];

function AssistanceTrainingManagement() {
  return (
    <>
      <Header />

      <main className="performance-page assistance-page">

        <section className="performance-hero assistance-hero">
          <img
            src="/assets/assistance-shield.png"
            alt=""
          />
        </section>

        <section className="performance-main assistance-main">

          <div className="performance-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/about-us">About Us</Link>
            <span>›</span>
            <Link to="/programs">Programs</Link>
            <span>›</span>
            <span className="current">
              Assistance and Training Management
            </span>
          </div>

          <h1 className="performance-title">
            Assistance and Training Management
          </h1>

          <div className="assistance-instructions">
            CTI students and instructors: Please click on the logos
            below to access your CRM Training Materials.
          </div>

          <div className="training-organizations">

            {trainingOrganizations.map((organization) => (
              <a
                key={organization.name}
                href={organization.href}
                className="training-organization"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Access ${organization.name} CRM training materials`}
              >

                <div className="training-organization-name">
                  {organization.name}
                </div>

                <div className="training-organization-image">
                  <img
                    src={organization.image}
                    alt={`${organization.name} emblem`}
                    loading="lazy"
                  />
                </div>

              </a>
            ))}

          </div>

        </section>

        <div className="performance-bottom-decoration">
          <div className="performance-bottom-divider" />

          <img
            src="/assets/cti-swoosh.png"
            alt=""
            loading="lazy"
          />
        </div>

      </main>

      <Footer />
    </>
  );
}

export default AssistanceTrainingManagement;
