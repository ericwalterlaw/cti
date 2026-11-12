
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./PerformanceSolutions.css";
import "./CustomizedSolutions.css";

const principles = [
  {
    title: "Accelerated",
    description:
      "Providing quality learning solutions efficiently is achieved through addressing learning challenges contextually and employing non-linear development strategies. CTI applies diverse tactics in developing learning solutions ensuring learning outcomes are both beneficial and timely.",
  },
  {
    title: "Targeted",
    description:
      "The right training for the right audience is paramount for a learning program to be successful. CTI conducts diligent front-end analysis to develop precision learning targeted at specific audiences.",
  },
  {
    title: "Measurable",
    description:
      "The best learning programs are more than satisfactory post-training surveys. CTI certainly strives to create a positive learning experience, but effort is also put into measurable results in the transfer of knowledge, positive behavior change, and successful delivery of organizational learning goals.",
  },
];

function CustomizedSolutions() {
  return (
    <>
      <Header />

      <main className="performance-page customized-page">

        <section className="performance-hero customized-hero">
          <img
            src="/assets/customized-solutions-search.png"
            alt=""
          />
        </section>

        <section className="performance-main customized-main">

          <div className="performance-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span className="current">
              Customized Solutions
            </span>
          </div>

          <h1 className="performance-title">
            Customized Solutions
          </h1>

          <div className="customized-introduction">
            CTI works with our clients to find the best solutions
            through customized learning. CTI achieves this result
            through adherence to the tenets of accelerated, targeted,
            and measurable programs.
          </div>

          <ul className="customized-principles">

            {principles.map((principle) => (
              <li key={principle.title}>

                <p>
                  <strong>{principle.title}:</strong>{" "}
                  {principle.description}
                </p>

              </li>
            ))}

          </ul>

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

export default CustomizedSolutions;
