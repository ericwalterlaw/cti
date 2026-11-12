
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./PerformanceSolutions.css";

const accordionItems = [
  {
    id: "accelerated",
    title: "Accelerated Learning",
  },
  {
    id: "crm",
    title: "Crew Resource Management",
  },
];

function AccordionHeading({ item, isOpen, onClick }) {
  return (
    <button
      className={`performance-accordion-trigger ${
        isOpen ? "is-open" : ""
      }`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`panel-${item.id}`}
      id={`trigger-${item.id}`}
    >
      <span className="accordion-indicator">
        {isOpen ? "▣" : "▾"}
      </span>

      <span>{item.title}</span>
    </button>
  );
}

function AcceleratedLearning() {
  return (
    <div className="performance-panel-content">

      <p>
        Our core business competency is providing learning solutions
        that increase human performance in any industry.
      </p>

      <p>
        New business realities and customer demands, coupled with a
        changing competitive landscape, require well designed focused
        learning that leverages both the latest learning science and
        delivery technologies.
      </p>

      <p>
        First, we will partner with you to understand the challenges
        limiting your success and then creatively tailor an
        <strong> accelerated, targeted, and measurable </strong>
        solution that aligns with your business goals.
      </p>

      <p>
        Accelerated learning is the ability to couple brain science,
        learning technologies, and effective design to deliver the
        "right solution" with the "right technology." This accelerates
        your performance and produces the "added value" to your
        business goals over traditional learning. The figure below
        illustrates the unique value accelerated learning can bring
        to your organization.
      </p>

      <div className="performance-chart">
        <img
          src="/assets/accelerated-learning-chart.png"
          alt="Comparison of traditional learning and accelerated learning performance over time"
          loading="lazy"
        />
      </div>

    </div>
  );
}

function CrewResourceManagement() {
  return (
    <div className="performance-panel-content">

      <p>
        CTI has been providing team training to US Air Force Combat
        Forces for almost three decades, leading towards unprecedented
        levels of safe operations and employment of the most advanced
        aircraft in the world.
      </p>

      <p>
        Just like in flight, there are threats to every organization
        that can cause critical errors affecting the mission or safety
        of their personnel. Our training helps identify and prepare
        for internal and external impacts and gives them the skills to
        mitigate any unavoidable hazards.
      </p>

      <div className="performance-threats">
        <img
          src="/assets/crm-threats.png"
          alt="Common Team Management Threats diagram"
          loading="lazy"
        />
      </div>

      <p className="performance-contact-text">
        Identifying threats to your team is the first step in our
        training process. To learn more about our interactive team
        training courses,{" "}
        <Link to="/contact">contact us</Link>.
      </p>

    </div>
  );
}

function PerformanceSolutions() {
  const [activeAccordion, setActiveAccordion] = useState("accelerated");

  const toggleAccordion = (id) => {
    setActiveAccordion((current) => current === id ? null : id);
  };

  return (
    <>
      <Header />

      <main className="performance-page">

        {/* Top illustration */}
        <section className="performance-hero">
          <img
            src="/assets/performance-pencil.png"
            alt=""
          />
        </section>

        {/* Main content */}
        <section className="performance-main">

          <div className="performance-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/learning-solutions">Customized Solutions</Link>
            <span>›</span>
            <span className="current">Performance Solutions</span>
          </div>

          <h1 className="performance-title">
            Performance Solutions
          </h1>

          <div className="performance-accordion">

            {accordionItems.map((item) => {
              const isOpen = activeAccordion === item.id;

              return (
                <section
                  className={`performance-accordion-item ${
                    isOpen ? "active" : ""
                  }`}
                  key={item.id}
                >

                  <AccordionHeading
                    item={item}
                    isOpen={isOpen}
                    onClick={() => toggleAccordion(item.id)}
                  />

                  <div
                    className={`performance-accordion-panel ${
                      isOpen ? "panel-open" : ""
                    }`}
                    id={`panel-${item.id}`}
                    role="region"
                    aria-labelledby={`trigger-${item.id}`}
                    hidden={!isOpen}
                  >
                    {isOpen && item.id === "accelerated" && (
                      <AcceleratedLearning />
                    )}

                    {isOpen && item.id === "crm" && (
                      <CrewResourceManagement />
                    )}
                  </div>

                </section>
              );
            })}

          </div>

        </section>

        {/* Bottom decorative illustration */}
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

export default PerformanceSolutions;
