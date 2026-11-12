
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";

const slides = [
{
    title: "Welcome to Crew Training International",
    description:
      "Accelerating your performance through cutting-edge learning.",
    image: "/assets/hero-training.jpg",
    link: "/learning-solutions",
  },
  {
    title: "Customizable Human Factors",
    description:
      "Training towards the safe and effective employment of military and civilian aircrafts",
    image: "/assets/hero-learning.jpg",
    link: "/performance-solutions",
  },

  {
    title: "Customized Solutions",
    description:
      "We develop advanced, on-point training solutions built on sound instructional techniques and theory",
    image: "/assets/hero-classroom.jpg",
    link: "/learning-solutions",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="hero">

      <div
        className="hero-background"
        style={{
          backgroundImage: `url("${currentSlide.image}")`,
        }}
        key={currentSlide.image}
      />

      <div className="hero-overlay" />

      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <div className="hero-content" key={activeSlide}>
        <h1>{currentSlide.title}</h1>

        <p>{currentSlide.description}</p>

        <a href={currentSlide.link} className="hero-button">
          Read More
        </a>
      </div>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={activeSlide === index ? "active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;
