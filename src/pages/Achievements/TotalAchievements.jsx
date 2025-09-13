import { FaTrophy, FaBuilding, FaAward, FaStar } from "react-icons/fa";
import AchievementCard from "../../ReusableComponents/AchievementCard";

const TotalAchievements = () => {
  const achievements = [
    { icon: FaTrophy, value: "7+", label: "Total Achievements" },
    { icon: FaBuilding, value: "3+", label: "Internships" },
    { icon: FaAward, value: "4+", label: "Certifications" },
    { icon: FaStar, value: "#1", label: "College Rank (PwC)" },
  ];

  return (
    <section
      className="row mx-0 d-flex justify-content-center align-items-center py-5 bg-black">
        <div className="col-md-11 col-12">
      <div className="row g-4 justify-content-center mx-0">
        {achievements.map((item, index) => (
          <AchievementCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default TotalAchievements;