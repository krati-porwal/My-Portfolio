import { FaLightbulb, FaBullseye } from "react-icons/fa";

const JourneySection = () => {
  const journeyContent = [
    "I'm a final-year engineering student specializing in frontend development with strong problem-solving skills. My tech journey started with Python, where I mastered core concepts, NumPy, Pandas, and Matplotlib.",
    "Later, I transitioned into web development, working with HTML, CSS/SCSS, JavaScript, and React.js. Through my internship at DataCode, I worked on three real-world projects — Nutrition Consultant Website , PartyVerse , Datacode Quiz Studio — using React.js, TypeScript, Redux Toolkit and SCSS.",
    "I also learned modular architecture, state management, and collaborative development using Git. Currently, I'm selected for Infosys Springboard Virtual Internship starting Nov 2025."
  ];

  const goalContent = `To become a full-stack developer contributing to scalable and impactful applications, 
while continuously learning and adapting to new technologies. I'm passionate about creating 
user experiences that make a difference and building solutions that solve real-world problems.`;

  return (
    <section className="row mx-0 d-flex justify-content-center align-items-center py-5 bg-black text-white">
      <div className="col-md-11 col-12">
      <div className="row justify-content-center gx-5">
        {/* Journey Section */}
        <div className="col-md-6 col-12 mb-4">
          <h2 className="h3 fw-bold mb-4 d-flex align-items-center">
            <FaLightbulb className="text-info me-2" />
            My Journey
          </h2>
          {journeyContent.map((para, index) => (
            <p key={index} className="fs-5 text-light mb-4">{para}</p>
          ))}
        </div>

        {/* Career Goal Section */}
        <div className="col-md-6 col-12 mb-4">
          <h2 className="h3 fw-bold mb-4 d-flex align-items-center">
            <FaBullseye className="text-primary me-2" />
            Career Goal
          </h2>
          <div className="p-4 rounded-4 bg-secondary bg-opacity-25 shadow">
            <p className="fs-5 text-light mb-0">{goalContent}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default JourneySection;