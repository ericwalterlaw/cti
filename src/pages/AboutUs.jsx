
import "./AboutUs.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AboutUs() {
  return (
    <>
    <Header />
    <main className="about-page">

      {/* Shared animated CTI hero is rendered by the page layout */}

      <section className="about-container">

        {/* BREADCRUMB */}

        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>»</span>
          <span>About Us</span>
        </nav>

        {/* PAGE TITLE */}

        <header className="about-header">
          <h1>About Us</h1>
        </header>

        {/* COMPANY INTRODUCTION */}

        <section className="about-introduction">

          <p>
            CTI was founded as a Tennessee corporation in 1992 by Alan
            Mullen and Steve Harden, both former TOPGUN instructors and
            longtime residents of Germantown/Collierville, Tennessee,
            out of Al's garage. Their first large DoD contract was with
            the US Air Force to provide Crew Resource Management (CRM)
            Training to combat aircrews in 1999. CTI still holds that
            contract today. The company has grown steadily and now
            employs over 450 developers, instructors and administrative
            staff in 19 states and across the world. The company
            headquarters is located in Memphis, TN.
          </p>

          <div className="about-building-image">
            <img
              src="/assets/about/cti-headquarters.png"
              alt="Crew Training International headquarters"
              loading="lazy"
            />
          </div>

          <p>
            For nearly 30 years, CTI has developed advanced training
            solutions for the DoD, government, and commercial training
            programs. We use our experience to understand high-stress,
            time critical environments and customize the development
            of training solutions with cutting-edge learning practices
            to help high-caliber teams accelerate toward their goals.
            CTI leverages our Instructional Design, Technology and
            Graphics Professionals to provide a variety of technically
            advanced training and learning solutions.
          </p>

          <p>
            These solutions provide US Air Force, US Navy, US Marine
            Corps, NASA and NATO aircrews EXCEPTIONAL training for the
            most complicated mission sets. And, our FAA and commercial
            organizations receive the highest ROI any client can ask
            for when it comes time to train a broad scope of employees.
            Our effectiveness is validated by a 100% customer retention
            rate.
          </p>

        </section>

        {/* MISSION STATEMENT */}

        <section className="about-mission">

          <div className="about-section-heading">
            <h2>MISSION STATEMENT</h2>
          </div>

          <div className="about-mission-content">

            <div className="about-quote-icon" aria-hidden="true">
              ”
            </div>

            <blockquote>
              CTI's mission is to help clients achieve optimal
              performance through the use of our cutting-edge
              learning solutions. We partner with our clients by
              truly understanding their challenges and goals,
              and offer them solutions that meet their unique needs.
            </blockquote>

          </div>

        </section>

        {/* COMMITMENT TO QUALITY */}

        <section className="about-quality">

          <div className="about-section-heading about-quality-heading">
            <h2>Commitment to Quality</h2>
          </div>

          <p>
            CTI is committed to the provision of quality products and
            services to our customers and to a customer-first mindset.
            CTI's Executive Management Team recognizes that an
            effective QMS is necessary to achieve this aim. CTI's
            internal courseware design process is ISO 9001:2018
            certified. We use a modern, process-based QMS to:
          </p>

          <ul>
            <li>
              establish and maintain exemplary relationships with
              customers and stakeholders;
            </li>

            <li>
              maintain a focus on customer requirements and
              expectations;
            </li>

            <li>
              meet all statutory and regulatory requirements;
            </li>

            <li>
              engage in employee development to achieve quality
              products and new, advanced services; and
            </li>

            <li>
              continually improve upon established products and
              processes.
            </li>
          </ul>

        </section>

      </section>

      {/* EXISTING CTI BOTTOM DECORATION */}

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
