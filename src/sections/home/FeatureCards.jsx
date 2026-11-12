
import { BookOpen, ArrowUpRight } from "lucide-react";
import "./FeatureCards.css";

const features = [
  {
    title: "About Us",
    description:
      "The CTI Team is committed to assisting military and instructional design experts to advance training for US service men and women, as well as other professional training organizations.",
    image: "/assets/about-illustration.png",
    link: "/about-us",
  },
  {
    title: "Our Experience",
    description:
      "For nearly 30 years, CTI has developed advanced training solutions for DoD and other government agencies and for commercial training partners.",
    image: "/assets/experience-illustration.png",
    link: "/experience",
  },
  {
    title: "Learning Solutions",
    description:
      "CTI's mission is to help clients achieve optimal performance through the use of our cutting-edge learning solutions.",
    image: "/assets/learning-illustration.png",
    link: "/performance-solutions",
  },
];

function FeatureCards() {
  return (
    <section className="feature-section">
      <div className="feature-grid">

        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>

            <div className="feature-image">
              <img
                src={feature.image}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="feature-divider" />

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>

            <a href={feature.link} className="feature-button">
              <BookOpen size={10} />
              <span>Read More</span>
              <ArrowUpRight size={10} />
            </a>

          </article>
        ))}

      </div>
    </section>
  );
}

export default FeatureCards;
