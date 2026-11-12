
import "./Statistics.css";

const statistics = [
  {
    number: "450+",
    label: "Employees",
  },
  {
    number: "75+",
    label: "Locations",
  },
  {
    number: "28+",
    label: "Programs",
  },
];

function Statistics() {
  return (
    <section className="statistics-section">

      <div className="statistics-divider" />

      <div className="statistics-grid">
        {statistics.map((item) => (
          <div className="statistic-item" key={item.label}>
            <span className="statistic-number">
              {item.number}
            </span>

            <span className="statistic-label">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="statistics-divider" />

    </section>
  );
}

export default Statistics;
