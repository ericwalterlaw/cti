
import { useState } from "react";
import "./OurExperience.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const experienceImages = {
  partners: {
    image: "/assets/experience/partners.png",
    alt: "CTI partners and affiliated organizations",
  },
  customers: {
    image: "/assets/experience/customers.png",
    alt: "CTI past and present customers",
  },
};

function ExperienceImage({ image, alt }) {
  return (
    <div className="experience-image">
      <img src={image} alt={alt} loading="lazy" />
    </div>
  );
}

function LogoGrid({ items }) {
  return (
    <div className="experience-logo-grid">
      {items.map((item) => (
        <div className="experience-logo" key={item.name}>
          <img src={item.image} alt={item.name} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function OurExperience() {
  const [activeSection, setActiveSection] = useState("partners");

  const toggleSection = (section) => {
    setActiveSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <>
      <Header/>


    <main className="experience-page">

      {/* Shared animated CTI hero is provided by the site layout */}

      <section className="experience-container">

        <nav className="experience-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>»</span>
          <span>Our Experience</span>
        </nav>

        <header className="experience-heading">
          <h1>Our Experience</h1>
        </header>

        <div className="experience-intro">
          <p>
            CTI’s Management Team alone has over 56 years of military
            experience with unique insights into the expectations of
            the most demanding customers in the world...the US Military.
            For nearly 30 years CTI has been providing EXCEPTIONAL
            instructional and learning services to the United States
            Air Force, United States Navy and Marine Corps, and to NATO.
            CTI’s reach extends to 79 locations across the US through
            over 28 different military and civilian contracts.
          </p>

          <p>
            CTI has a culture steeped in the fundamentals and advanced
            theories of Instructional Systems Design. We are deeply
            committed to providing learning solutions that exceed
            client expectations and meet 100% of their requirements.
            Our success has been built on these commitments and we
            are well-equipped to maintain this level of satisfaction
            into the future. Our team of instructional designers,
            education technologists, graphic artists and programmers
            are ready to design any instructional material or method
            to meet the needs of our next customer.
          </p>
        </div>

        <div className="experience-accordions">

          <section className="experience-accordion">
            <button
              className={`experience-accordion__trigger ${
                activeSection === "partners" ? "is-active" : ""
              }`}
              onClick={() => toggleSection("partners")}
              aria-expanded={activeSection === "partners"}
            >
              <span className="experience-accordion__arrow">
                {activeSection === "partners" ? "▾" : "▸"}
              </span>
              <span>Partners</span>
            </button>

            {activeSection === "partners" && (
              <div className="experience-accordion__content">
                <ExperienceImage
                  image={experienceImages.partners.image}
                  alt={experienceImages.partners.alt}
                />
              </div>
            )}
          </section>

          <section className="experience-accordion">
            <button
              className={`experience-accordion__trigger ${
                activeSection === "customers" ? "is-active" : ""
              }`}
              onClick={() => toggleSection("customers")}
              aria-expanded={activeSection === "customers"}
            >
              <span className="experience-accordion__arrow">
                {activeSection === "customers" ? "▾" : "▸"}
              </span>
              <span>Past and Present Customers</span>
            </button>

            {activeSection === "customers" && (
              <div className="experience-accordion__content">
                <ExperienceImage
                  image={experienceImages.customers.image}
                  alt={experienceImages.customers.alt}
                />
              </div>
            )}
          </section>

        </div>
      </section>

      <div className="performance-bottom-decoration">
        <div className="performance-bottom-divider" />
        <img src="/assets/cti-swoosh.png" alt="" loading="lazy" />
      </div>

      </main>
      <Footer />
    </>
  );
}
