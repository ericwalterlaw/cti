
import "./CompanyLeadership.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const leadershipImages = [
  "/assets/leadership/alan-mullen.png",
  "/assets/leadership/matthew-black.png",
  "/assets/leadership/sarah-bryan.png",
  "/assets/leadership/john-frye.png",
  "/assets/leadership/ryan-lampkins.png",
  "/assets/leadership/corrie-clark.png",
  "/assets/leadership/kyle-evans.png",
  "/assets/leadership/curt-toomer.png",
  "/assets/leadership/robert-cushing.png",
];

export default function CompanyLeadership() {
  return (
    <>
      <Header />

    <main className="leadership-page">

      {/* Hero illustration */}
      <section className="performance-hero careers-hero">
        <img
          src="/assets/careers-infinity.png"
          alt=""
        />
      </section>

      <section className="leadership-container">

        <nav
          className="leadership-breadcrumb"
          aria-label="Breadcrumb"
        >
          <a href="/">Home</a>
          <span>»</span>
          <a href="/about-us">About Us</a>
          <span>»</span>
          <span>Company Leadership</span>
        </nav>

        <header className="leadership-header">
          <h1>Company Leadership</h1>
        </header>

        <div className="leadership-list">
          {leadershipImages.map((image, index) => (
            <div
              className="leadership-image-row"
              key={image}
            >
              <img
                src={image}
                alt={`CTI Leadership ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
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
