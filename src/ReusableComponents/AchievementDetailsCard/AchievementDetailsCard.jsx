import { FaCalendarAlt } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const AchievementDetailsCard = ({
  title,
  organization,
  status,
  date,
  description,
  type,
  icon: Icon,
  showLine,
}) => {
  return (
    <div className="row g-3 position-relative">
      {/* Timeline column */}
      <div className="col-1 d-none d-md-flex flex-column align-items-center">
        {/* Dot with icon */}
        <div
          className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "30px", height: "30px" }}
        >
          <Icon className="text-white" size={16} />
        </div>

        {/* Vertical line */}
        {showLine && (
          <div
            className="bg-secondary flex-grow-1"
            style={{ width: "2px", marginTop: "4px" }}
          ></div>
        )}
      </div>

      {/* Content column */}
      <div className="col-12 col-md-11">
        <div className="card bg-dark text-light shadow-sm p-3 h-100">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
            {/* Title + org */}
            <div>
              <h5 className="fw-bold mb-1">{title}</h5>
              <p className="text-primary fw-medium mb-0">{organization}</p>
            </div>

            {/* Status + date */}
            <div className="d-flex align-items-center gap-3">
              <Badge bg={status === "Completed" ? "success" : "info"}>
                {status}
              </Badge>
              <small className="d-flex align-items-center text-light">
                <FaCalendarAlt className="me-1" />
                {date}
              </small>
            </div>
          </div>

          {/* Description */}
          <p className="text-light mt-3 mb-2">{description}</p>

          {/* Type */}
          <Badge bg="secondary">{type}</Badge>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetailsCard;