import SkillCard from "../../ReusableComponents/SkillCard";
import { FaCode, FaPalette, FaDatabase, FaGlobe, FaChartLine } from "react-icons/fa";

const SkillsSection = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: FaCode,
      skills: ["Python", "C", "C++", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: FaPalette,
      skills: ["HTML", "CSS", "SCSS", "React.js", "Redux Toolkit", "Ant Design"],
    },
    {
      title: "Backend Basics",
      icon: FaDatabase,
      skills: ["Node.js"],
    },
    {
      title: "Data Science",
      icon: FaChartLine,
      skills: ["NumPy", "Pandas", "Matplotlib"],
    },
    {
      title: "Others",
      icon: FaGlobe,
      skills: ["Git", "GitHub", "AWS Basics"],
    },
  ];

  return (
    <section className="row mx-0 d-flex justify-content-center align-items-center py-5 bg-black text-light">
      <div className="col-md-11 col-12">
      <h2 className="text-center mb-5 fw-bold">Skills &amp; Technologies</h2>
      <div className="row g-4 mx-0">
        {skillsData.map((category, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <SkillCard {...category} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SkillsSection;