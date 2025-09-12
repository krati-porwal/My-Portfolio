import "./Style.scss";
import profilePic from "../../assets/images/kratiphoto.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    
    <section className="row mx-0 text-light d-flex justify-content-center align-items-center hero-section">
      <div className="col-md-11 col-12">
      <div className="row mx-0 w-100 align-items-center min-vh-100">
        {/* Left Content */}
        <div className="col-12 col-md-6 order-2 order-md-1">
          {/* Badge */}
          <div className="d-inline-flex align-items-center px-3 py-2 rounded-pill bg-dark bg-opacity-50 border border-light mb-3">
            <span
              className="rounded-circle bg-success me-2"
              style={{ width: "10px", height: "10px" }}
            ></span>
            <span className="small fw-medium">Available for opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="display-4 fw-bold mb-3">
            Hi, I'm <br />
            <span className="gradient-text">Krati Porwal</span>
          </h1>

          {/* Roles */}
          <h4 className="text-info fw-semibold mb-2">Frontend Developer</h4>
          <h4 className="text-info fw-semibold mb-2">React.js Enthusiast</h4>
          <h4 className="text-info fw-semibold mb-3">
            Future Full-Stack Engineer
          </h4>

          {/* About */}
          <p className="lead text-light opacity-75 mb-4">
            I'm a final-year engineering student passionate about building{" "}
            <strong>clean, responsive, and impactful</strong> web applications.
            With hands-on experience in real-world projects and internships, I
            turn ideas into interactive user experiences.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-wrap gap-3">
              <Link to="/projects">
              <button className="btn btn-primary px-4">
              <i className="bi bi-code-slash me-2"></i> View My Work
              </button>
              </Link>
            <a
              href="/KratiPorwal(3).resume.pdf"
              download
              className="btn btn-outline-light px-4"
            >
              <i className="bi bi-download me-2"></i> Download Resume
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center">
          <div className="circle-wrapper position-relative">
           
                <div className="inner-circle rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                  <img
                    src={profilePic}
                    alt="Krati Porwal"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>

            {/* Labels */}
            <span className="badge bg-info position-absolute top-0 end-0">
              React.js
            </span>
            <span className="badge bg-info position-absolute bottom-0 start-0">
              TypeScript
            </span>
            <span className="badge bg-info position-absolute top-50 start-0 translate-middle-y">
              Frontend
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
