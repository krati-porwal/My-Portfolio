import { FaGithub } from "react-icons/fa";

const SeeMoreSection = () => {
  return (
    <div className="row mx-0 py-3 pb-5 bg-black text-light d-flex justify-content-center">
      <div className="col-10 col-md-5 py-5 px-2 rounded-3 border-0 bg-dark text-center">
        {/* Heading */}
        <h3 className="fw-bold fs-2 mb-3">Want to see more?</h3>

        {/* Description */}
        <p className="text-secondary mb-4">
          I'm constantly working on new projects and exploring different
          technologies. Check out my GitHub for more repositories and
          contributions.
        </p>

        {/* GitHub Button */}
        <a
          href="https://github.com/krati-porwal"
        //   target="_blank"
        //   rel="noopener noreferrer"
          className="btn btn-primary d-inline-flex align-items-center px-4 py-2 fw-semibold"
        >
          <FaGithub className="me-2" size={20} />
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default SeeMoreSection;