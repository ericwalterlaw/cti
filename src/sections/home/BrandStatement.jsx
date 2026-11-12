
import "./BrandStatement.css";

function BrandStatement() {
  return (
    <section className="brand-statement">

      <img
        src="/assets/cti-logo.png"
        alt="Crew Training International"
        className="brand-statement-logo"
        loading="lazy"
      />

      <p>
        Accelerating your performance through{" "}
        <span>cutting-edge</span> learning.
      </p>

    </section>
  );
}

export default BrandStatement;
