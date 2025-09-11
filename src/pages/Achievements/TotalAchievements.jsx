import { FaTrophy, FaBuilding, FaAward, FaStar } from "react-icons/fa";
import AchievementCard from "../../ReusableComponents/AchievementCard";

const TotalAchievements = () => {
  const achievements = [
    { icon: FaTrophy, value: "4+", label: "Total Achievements" },
    { icon: FaBuilding, value: "3+", label: "Internships" },
    { icon: FaAward, value: "2+", label: "Certifications" },
    { icon: FaStar, value: "#1", label: "College Rank (PwC)" },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#0d0d0d" }}
    >
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
    </section>
  );
};

export default TotalAchievements;