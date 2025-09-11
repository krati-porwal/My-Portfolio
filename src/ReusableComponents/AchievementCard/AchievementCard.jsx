
const AchievementCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="col-12 col-md-3 text-center">
      <div className="bg-dark rounded-4 shadow-sm p-4 h-100">
        {/* Icon */}
        <Icon className="text-info mb-2" size={36} />

        {/* Value */}
        <h3 className="fw-bold text-info mb-1">{value}</h3>

        {/* Label */}
        <p className="text-white small mb-0">{label}</p>
      </div>
    </div>
  );
};

export default AchievementCard;