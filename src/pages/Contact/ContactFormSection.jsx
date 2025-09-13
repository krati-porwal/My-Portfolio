import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import ContactInfoCard from "../../ReusableComponents/ContactInfoCard";

const ContactFormSection = () => {
  // Contact Info Data
  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "kratiporwal00@gmail.com",
      link: "mailto:kratiporwal00@gmail.com",
    },
    {
      icon: <FaPhone size={20} />,
      label: "Phone",
      value: "+91 7987525391",
      link: "tel:+917987525391",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "India",
    },
  ];

  // Social Links Data
  const socialLinks = [
    {
      icon: <FaGithub size={22} />,
      label: "@krati-porwal",
      link: "https://github.com/krati-porwal",
    },
    {
      icon: <FaLinkedin size={22} />,
      label: "Krati Porwal",
      link: "https://www.linkedin.com/in/krati-porwal-355158219/",
    },
  ];

  // Inquiry Button Data
  const inquiryTypes = [
    "Project Collaboration",
    "Internship Opportunity",
    "General Inquiry",
  ];

  // Form Fields Data
  const formFields = [
    {
      label: "Name",
      type: "text",
      placeholder: "Your name",
      col: "col-md-6",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "youremail@example.com",
      col: "col-md-6",
    },
    {
      label: "Subject",
      type: "text",
      placeholder: "What's this about?",
      col: "col-12",
    },
    {
      label: "Message",
      type: "textarea",
      placeholder: "Tell me about your project, idea, or just say hello...",
      col: "col-12",
      rows: 4,
    },
  ];

  return (
    <div className="row mx-0 d-flex justify-content-center align-items-center bg-black g-4 py-5">
      <div className="col-md-11 col-12">
        {/* Left Side - Contact Info */}
        <div className="row mx-0 g-4">
          <div className="col-12 col-md-6">
            <h3 className="fw-bold mb-3 text-light">
              <FaPaperPlane className="me-2 text-primary" /> Get in Touch
            </h3>
            <p className="text-secondary mb-4">
              Whether you want to discuss a project, share ideas, or just say
              hello, I’d love to hear from you. I’m currently open to internship
              opportunities and collaborative projects.
            </p>

            {/* Contact Information */}
            <h5 className="fw-semibold mb-3 text-light">Contact Information</h5>
            {contactInfo.map((info, idx) => (
              <ContactInfoCard
                key={idx}
                icon={info.icon}
                label={info.label}
                value={info.value}
                link={info.link}
              />
            ))}

            {/* Social Links */}
            <h5 className="fw-semibold mt-4 mb-3 text-light">
              Connect on Social
            </h5>
            <div className="row g-3">
              {socialLinks.map((social, idx) => (
                <div key={idx} className="col-6">
                  <div className="card shadow-sm border-0 p-3 text-center bg-dark text-light hover-card">
                    <div className="mb-2 text-primary">{social.icon}</div>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-decoration-none text-light"
                    >
                      {social.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Download */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-sm border-0 p-3 d-flex align-items-center justify-content-between flex-md-row flex-column gap-3 bg-dark text-light">
                  <div>
                    <h6 className="fw-semibold mb-1">Download Resume</h6>
                    <p className="text-light small mb-0">
                      Get a detailed overview of my experience and skills
                    </p>
                  </div>
                  <a
                    href="/KratiPorwal(3).resume.pdf"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <FaFileAlt className="me-2" /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-12 col-md-6">
            <div className="card shadow-sm border-0 p-4 bg-dark text-light">
              <h5 className="fw-bold mb-4">
                <FaEnvelope className="me-2 text-primary" /> Send a Message
              </h5>
              <form>
                <div className="row g-3">
                  {formFields.map((field, idx) => (
                    <div key={idx} className={field.col}>
                      <label className="form-label text-light">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          className="form-control bg-secondary text-light border-0"
                          rows={field.rows || 3}
                          placeholder={field.placeholder}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          className="form-control bg-secondary text-light border-0"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}

                  {/* Inquiry Buttons */}
                  <div className="col-12 d-flex flex-wrap gap-2 mt-2">
                    {inquiryTypes.map((type, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-3">
                    <a
                      href="mailto:kratiporwal00@gmail.com"
                      className="btn btn-primary w-100"
                    >
                      Send Message
                    </a>
                    <p className="text-light small mt-2">
                      I typically respond within 24 hours. Looking forward to
                      hearing from you!
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12">
              <div className="card border-0 shadow-sm gradient-card text-center p-5 bg-dark text-light">
                {/* Heading */}
                <h3 className="fw-bold mb-3">Ready to Work Together?</h3>
                <p
                  className="text-secondary mb-4 mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                  I'm excited about new challenges and opportunities to create
                  something amazing. Let's discuss how we can bring your ideas
                  to life!
                </p>

                {/* Buttons Row */}
                <div className="row justify-content-center g-3">
                  <div className="col-md-auto col-12">
                    <a
                      href="mailto:kratiporwal00@gmail.com"
                      className="btn btn-primary d-flex align-items-center px-4 py-2 w-100"
                    >
                      <FaEnvelope className="me-2" /> Start a Conversation
                    </a>
                  </div>
                  <div className="col-md-auto col-12">
                    <a
                      href="/projects"
                      className="btn btn-outline-light px-4 py-2 w-100"
                    >
                      View My Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
