
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./PerformanceSolutions.css";
import "./Careers.css";

function Careers() {
  return (
    <>
      <Header />

      <main className="performance-page careers-page">

        {/* Hero illustration */}
        <section className="performance-hero careers-hero">
          <img
            src="/assets/careers-infinity.png"
            alt=""
          />
        </section>

        {/* Page content */}
        <section className="performance-main careers-main">

          {/* Breadcrumb */}
          <div className="performance-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">Careers at CTI</span>
          </div>

          <h1 className="performance-title">
            Careers at CTI
          </h1>

          <div className="careers-divider" />

          <div className="careers-content">

            <p className="careers-introduction">
              If you're a goal-oriented person looking for unique and
              rewarding work, then we're the company for you. We offer
              a competitive salary structure, opportunities for
              advancement, and a full range of benefits. In order to
              view and apply to current openings, please search jobs
              using the link below.
            </p>

            <p className="careers-opportunities">
              <a
                href="#career-opportunities"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Career Opportunities
              </a>
            </p>

            <p className="careers-equal-access">
              Equal access to programs, services and employment is
              available to all persons. Please notify Human Resources
              if you require a reasonable accommodation to the
              application and/or interview process.
            </p>

            <p className="careers-contact">
              You may reach CTI's HR department at{" "}
              <a href="">

              </a>
            </p>

            <p className="careers-equal-opportunity">
              CTI is an Equal Opportunity Employer. All qualified
              applicants will receive consideration for employment
              without regard to race, color, religion, sex, sexual
              orientation, gender identity, national origin, or
              protected veteran status and will not be discriminated
              against on the basis of disability. CTI also participates
              in E-Verify.
            </p>

            <p className="careers-legal-link">
              <a href="#workplace-discrimination">
                Know Your Rights – Workplace Discrimination
              </a>
            </p>

            <p className="careers-affirmative-action">
              CTI's Affirmative Action Plan may be viewed at our
              corporate office [9198 Crestwyn Hills Drive, Memphis,
              TN 38125], between 8:00 a.m. and 5:00 p.m. Central Time.
            </p>

            <p className="careers-legal-link careers-right-to-work">
              <a href="#right-to-work">
                Right to Work
              </a>
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Careers;
