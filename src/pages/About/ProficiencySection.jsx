import { FaTools } from "react-icons/fa";

const ProficiencySection = () => {
  const proficiencies = [
    { skill: "React.js", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "TypeScript", level: 80 },
    { skill: "Python", level: 88 },
    { skill: "SCSS/CSS", level: 92 },
    { skill: "Redux Toolkit", level: 75 },
  ];

  return (
    <section
      className="py-5 text-light bg-black"
    >
      {/* Section Title */}
      <h2 className="text-center fw-bold mb-4">
        <FaTools className="me-2" />
        Proficiency Levels
      </h2>

      {/* Grid */}
      <div className="row g-4 mx-0 justify-content-center">
        {proficiencies.map((item, idx) => (
          <div key={idx} className="col-12 col-md-6">
            
              {/* Skill + % */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold">{item.skill}</span>
                <span className="fw-semibold">{item.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${item.level}%` }}
                  aria-valuenow={item.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProficiencySection;