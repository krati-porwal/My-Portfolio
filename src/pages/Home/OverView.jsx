import { FaCode, FaBrain, FaRocket } from "react-icons/fa";
import "./Style.scss";

const stats = [
  {
    icon: <FaCode className="fs-2 text-white" />,
    value: "3+",
    label: "Real-world Projects",
  },
  {
    icon: <FaBrain className="fs-2 text-white" />,
    value: "4+",
    label: "Internships & Certifications",
  },
  {
    icon: <FaRocket className="fs-2 text-white" />,
    value: "100%",
    label: "Passion for Learning",
  },
];

const Overview = () => {
  return (
    <section className="row mx-0 py-5 text-light d-flex justify-content-center align-items-center overview-section">
      <div className="col-md-11 col-12">
        <div className="row mx-0 text-center mb-5">
          <h2 className="fw-bold display-5">
            Quick <span className="gradient-text">Overview</span>
          </h2>
          <p className="lead text-light">
            A snapshot of my journey in tech and development
          </p>
        </div>

        <div className="row mx-0 g-4">
          {stats.map((item, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="overview-card p-4 rounded-4 h-100 text-center">
                <div className="icon-box mb-3">{item.icon}</div>
                <h3 className="fw-bold text-info">{item.value}</h3>
                <p className="text-light opacity-75">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
