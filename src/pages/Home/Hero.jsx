import "./Style.scss";
import profilePic from "../../assets/images/kratiphoto.jpg";

const Hero = () => {
  return (
    <section className="hero-section text-light d-flex align-items-center">
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

          {/* Current Focus */}
          <div className="d-flex align-items-center mb-4 p-3 rounded-pill bg-dark bg-opacity-50">
            <i className="bi bi-rocket-fill text-info me-2"></i>
            <span>Currently exploring Computer Vision & DSA</span>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary px-4">
              <i className="bi bi-code-slash me-2"></i> View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-outline-light px-4"
            >
              <i className="bi bi-download me-2"></i> Download Resume
            </a>
          </div>
        </div>

        {/* Right Content */}
        {/* Right Content */}
        <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center">
          <div className="circle-wrapper position-relative">
            {/* Outermost Circle */}
            {/* <div className="outer-circle rounded-circle d-flex align-items-center justify-content-center"> */}
              {/* Middle Circle */}
              {/* <div className="middle-circle rounded-circle d-flex align-items-center justify-content-center"> */}
                {/* Innermost Circle with Image */}
                <div className="inner-circle rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                  <img
                    src={profilePic}
                    alt="Krati Porwal"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              {/* </div> */}
            {/* </div> */}

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
    </section>
  );
};

export default Hero;
