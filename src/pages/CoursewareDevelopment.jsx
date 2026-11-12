
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./PerformanceSolutions.css";
import "./CoursewareDevelopment.css";

const sections = [
  { id: "cbt", title: "Computer Based Training" },
  { id: "mobile", title: "Mobile Learning" },
  { id: "gaming", title: "Serious Gaming" },
];

function CoursewareAccordionHeading({ item, isOpen, onClick }) {
  return (
    <button
      className={`performance-accordion-trigger ${
        isOpen ? "is-open" : ""
      }`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`courseware-${item.id}`}
    >
      <span className="accordion-indicator">
        {isOpen ? "▣" : "▾"}
      </span>
      <span>{item.title}</span>
    </button>
  );
}

/* COMPUTER BASED TRAINING */

function ComputerBasedTraining() {
  return (
    <div className="performance-panel-content">

      <p>
        Using our robust courseware development team, CTI produces
        high-performance Computer Based Training modules (CBTs) with
        advanced features such as customized 3-D animation. All CBTs
        incorporate advanced adult educational techniques and
        customized ISD processes to meet your training requirements.
        Our customized process integrates all elements of ADDIE
        (Analysis, Design, Development, Implementation, and Evaluation)
        and SAM (Successive Approximation Model) as we work directly
        with our customers, providing them access to our proven
        processes geared to achieve optimal performance.
      </p>

      <div className="courseware-media cbt-preview">
        <img
          src="/assets/cbt-preview.png"
          alt="CTI computer based training interactive module"
          loading="lazy"
        />
      </div>

    </div>
  );
}

/* MOBILE LEARNING */

function MobileLearning() {
  return (
    <div className="performance-panel-content">

      <p>
        The advancement in mobile technologies is the latest ground
        swell, affecting multiple facets of learning in almost every
        company and organization today. At CTI, our cutting-edge
        mobile learning capabilities offer our clients the most
        up-to-date products and services. To create your mobile
        learning design, we work with you to determine your objectives
        and work to meet your unique challenges. We then place those
        courseware products in an environment that allows your
        employees to receive their training on any device from any
        location.
      </p>

      <div className="courseware-media mobile-learning-preview">
        <img
          src="/assets/mobile-learning.png"
          alt="CTI mobile learning experience displayed on a smartphone"
          loading="lazy"
        />
      </div>

    </div>
  );
}

/* SERIOUS GAMING */

function SeriousGaming() {
  return (
    <div className="performance-panel-content serious-gaming-content">

      <h3>CTI's Serious Gaming Capabilities</h3>

      <p>
        CTI has developed working partnerships with advanced
        technology companies that specialize in Augmented Reality
        (AR) and Virtual Reality (VR). Together, we have the ability
        to deploy serious gaming across desktops, mobile devices,
        and tablet platforms. We can provide enhanced features that
        allow the customer to capture and stream in-game data for
        tracking individual student achievement as well as
        determining educational trends.
      </p>

      <div className="courseware-media serious-gaming-aircraft">
        <img
          src="/assets/serious-gaming-aircraft.png"
          alt="Aircraft used in CTI serious gaming team training"
          loading="lazy"
        />
      </div>

      <h3>CTI's Serious Gaming Team Trainer</h3>

      <ul className="serious-gaming-list">

        <li>
          <strong>Enhanced Academics:</strong> The Enhanced Academics
          (EA) experience immerses employees into interactive
          multi-media to vicariously experience an actual aircraft
          mishap. The interactive experience is specifically designed
          to solicit emotion, thereby tying short-term memory to
          long-term memory. It is also designed to allow the instructor
          to stop the event at strategic points to solicit
          decision-making from the students through electronic polling.
        </li>

        <li>
          <strong>Serious Gaming:</strong> The serious gaming platform
          forces students into a high-stress and competitive
          environment where they must successfully apply the skills
          they learned in the EA portion of the course. The team
          competition adds additional stress to the event. Both crews
          are assigned a specific but identical mission and are given
          five minutes to brief the mission as a crew. At the
          conclusion of the mission brief, the crews begin their
          30-minute mission. The crews are challenged to complete
          time-critical tasks, conduct experiments, manage energy and
          fuel, handle emergencies, and make mission-critical
          decisions. The teams earn or lose points depending upon
          the outcomes.
        </li>

      </ul>

      <p>
        The first time students go through the course they make many
        errors and don't typically employ the skills learned in
        academics effectively. The second mission is critical to the
        success of the learning, as it reinforces the lessons learned
        and experiences from the first mission. The second mission
        consistently reveals significant improvements in team
        performance.
      </p>

    </div>
  );
}

function CoursewareDevelopment() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((current) =>
      current === id ? null : id
    );
  };

  const renderContent = (id) => {
    switch (id) {
      case "cbt":
        return <ComputerBasedTraining />;
      case "mobile":
        return <MobileLearning />;
      case "gaming":
        return <SeriousGaming />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />

      <main className="performance-page courseware-page">

        {/* Top illustration */}
        <section className="performance-hero courseware-hero">
          <img
            src="/assets/courseware-book.png"
            alt=""
          />
        </section>

        {/* Main content */}
        <section className="performance-main">

          <div className="performance-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/learning-solutions">
              Customized Solutions
            </Link>
            <span>›</span>
            <span className="current">
              Courseware Development
            </span>
          </div>

          <h1 className="performance-title">
            Courseware Development
          </h1>

          <div className="performance-accordion courseware-accordion">

            {sections.map((item) => {
              const isOpen = activeAccordion === item.id;

              return (
                <section
                  className={`performance-accordion-item ${
                    isOpen ? "active" : ""
                  }`}
                  key={item.id}
                >

                  <CoursewareAccordionHeading
                    item={item}
                    isOpen={isOpen}
                    onClick={() => toggleAccordion(item.id)}
                  />

                  <div
                    id={`courseware-${item.id}`}
                    className="performance-accordion-panel"
                    role="region"
                    hidden={!isOpen}
                    aria-label={item.title}
                  >
                    {isOpen && renderContent(item.id)}
                  </div>

                </section>
              );
            })}

          </div>

        </section>

        {/* Bottom decoration */}
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

export default CoursewareDevelopment;
