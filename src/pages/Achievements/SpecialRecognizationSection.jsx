import { FaStar, FaTrophy } from "react-icons/fa";

const SpecialRecognizationSection = () => {
  return (
    <section className="row mx-0 d-flex justify-content-center align-items-center bg-black py-5">
      <div className="col-md-11 col-12">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm border rounded-3 p-4 text-center bg-dark text-light">
            {/* Star Icon */}
            <FaStar className="text-warning mb-3" size={50} />

            {/* Title */}
            <h3 className="fw-bold mb-3">Special Recognition</h3>

            {/* Description */}
            <p className="text-light mb-4">
              Ranked <span className="text-primary fw-bold">#1 in college</span>{" "}
              during the PwC Cyber Risk & Regulatory Launchpad program,
              demonstrating excellence in cybersecurity fundamentals and
              commitment to learning.
            </p>

            {/* Trophy */}
            <FaTrophy className="text-warning" size={40} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SpecialRecognizationSection;