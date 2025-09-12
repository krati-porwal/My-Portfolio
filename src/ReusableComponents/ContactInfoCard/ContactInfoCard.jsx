const ContactInfoCard = ({ icon, label, value, link }) => {
  return (
    <div className="row justify-content-start my-3">
      <div className="col-12 col-md-8">
        <div className="card shadow-sm border rounded-3 p-3 bg-dark">
          <div className="d-flex align-items-center gap-3">
            {/* Icon */}
            <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded p-3">
              {icon}
            </div>

            {/* Info */}
            <div>
              <div className="text-light small fw-medium">{label}</div>
              {link ? (
                <a
                  href={link}
                  className="fw-semibold fs-6 text-decoration-none text-light hover-link"
                >
                  {value}
                </a>
              ) : (
                <div className="fw-semibold fs-6 text-light">{value}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;