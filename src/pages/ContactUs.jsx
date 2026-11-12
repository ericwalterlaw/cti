
import "./ContactUs.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MAP_ADDRESS =
  "9198 Crestwyn Hills Drive, Memphis, TN 38125";

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect the form to the contact API or form service here.
  };

  return (
    <>
      <Header />

      <main className="contact-page">

        {/* HERO */}
        <section className="contact-hero" aria-label="Contact CTI">
          <img
            src="/assets/hero/contact-hero.png"
            alt=""
            className="contact-hero__image"
          />
        </section>

        {/* MAIN CONTENT */}
        <section className="contact-container">

          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>»</span>
            <a href="/about-us">About Us</a>
            <span>»</span>
            <span>Contact Us</span>
          </nav>

          <header className="contact-page-heading">
            <h1>Contact Us</h1>
          </header>

          {/* CONTACT FORM */}
          <section className="contact-form-section">

            <h2>Request More Information</h2>

            <p className="contact-intro">
              CTI is committed to creating advanced learning solutions
              that best meet your training requirements. To send
              questions, comments, or concerns to CTI, please use
              the form below.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form__row">
                <div className="contact-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-field contact-field--half">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company"
                  />
                </div>
              </div>

              <div className="contact-form__message-row">

                <div className="contact-field contact-field--message">
                  <label htmlFor="comments">Comments</label>
                  <textarea
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    required
                  />
                </div>

                <div className="contact-field contact-field--referral">
                  <label htmlFor="referral">How did you hear about us?</label>

                  <select
                    id="referral"
                    name="referral"
                    defaultValue="Online Search"
                  >
                    <option value="Online Search">Online Search</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Existing Customer">Existing Customer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Submit
              </button>

            </form>
          </section>

          {/* HEADQUARTERS */}
          <section className="contact-headquarters">

            <p className="contact-phone">
              Phone: <a href="tel:9017548839">901.754.8839</a>
              <span>|</span>
              Fax: 901.751.0836
            </p>

            <div className="contact-headquarters__details">
              <h2>Headquarters</h2>

              <p>
                Crew Training International
                <br />
                9198 Crestwyn Hills Drive
                <br />
                Memphis, TN 38125
              </p>
            </div>

            {/* GOOGLE MAP */}
            <div className="contact-map">
              <iframe
                title="CTI Headquarters Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  MAP_ADDRESS
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </section>

        </section>

      </main>

      <Footer />
    </>
  );
}
