import { FaBolt, FaChartLine, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const imgSrc = project.images[index % project.images.length];
  const imageLeft = index % 2 === 0; // use modulus to alternate

  return (
    <article className="project-card card bg-dark rounded-3 border-0 mb-4 shadow-sm overflow-hidden">
      <div className="row g-0 align-items-center">
        {/* Image column */}
        <div className={`col-12 col-md-6 position-relative ${imageLeft ? "order-md-1" : "order-md-2"}`}>
          <img
            src={imgSrc}
            alt={project.title}
            className="img-fluid w-100 project-img rounded-0"
          />
          <span className="badge bg-primary position-absolute top-0 start-0 m-3 d-inline-flex align-items-center">
            <FaBolt className="me-1" /> Featured
          </span>
        </div>

        {/* Content column */}
        <div className={`col-12 col-md-6 p-4 ${imageLeft ? "order-md-2" : "order-md-1"}`}>
          <h3 className="h4 fw-bold text-white mb-2">{project.title}</h3>
          <p className="text-light fs-6 mb-3">{project.description}</p>

          <div className="d-flex align-items-center gap-2 mb-3 text-info">
            <FaChartLine />
            <span className="fw-medium">{project.metric}</span>
          </div>

          <div className="mb-3">
            <h5 className="fw-semibold text-info mb-1">My Role:</h5>
            <p className="text-light mb-0">{project.role}</p>
          </div>

          <div className="mb-3">
            <h5 className="fw-semibold mb-2">Tech Stack</h5>
            <div className="d-flex flex-wrap">
              {project.tech.map((t, i) => (
                <span key={i} className="badge bg-secondary me-2 mb-2">{t}</span>
              ))}
            </div>
          </div>

          <div className="d-flex gap-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm d-flex align-items-center"
            >
              <FaExternalLinkAlt className="me-2" /> Live Demo
            </a>

            <a
              href={project.sourceCode}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-sm d-flex align-items-center"
            >
              <FaGithub className="me-2" /> Source Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;