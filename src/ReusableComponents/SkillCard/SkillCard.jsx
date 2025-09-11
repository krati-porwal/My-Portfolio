import PropTypes from "prop-types";

const SkillCard = ({ icon: Icon, title, skills }) => {
  return (
    <div className="card bg-dark text-light shadow-sm mb-4 h-100">
      <div className="card-body">
        <h5 className="card-title d-flex align-items-center gap-2 mb-3">
          <Icon size={24} className="text-info" />
          {title}
        </h5>
        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge bg-secondary px-3 py-2 text-light"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;