import AchievementDetailsCard from "../../ReusableComponents/AchievementDetailsCard";
import { FaBuilding, FaAward ,FaCertificate} from "react-icons/fa";

const achievements = [
  {
    title: "Infosys Springboard Virtual Internship",
    organization: "Infosys",
    status: "Upcoming",
    date: "Nov 2025 - Upcoming",
    description:
      "Selected through Python course completion and assessment. Upcoming opportunity to work on real-world projects and gain industry experience.",
    type: "Internship",
    icon: FaBuilding,
  },
  {
    title: "Web Development Internship",
    organization: "DataCode",
    status: "Ongoing",
    date: "2025",
    description:
      "Contributed to real-world projects: Nutrition Consultant Website, PartyVerse, Datacode Quiz Studio. Developed expertise in React.js, TypeScript, and frontend practices.",
    type: "Internship",
    icon: FaBuilding,
  },
  {
    title: "PwC Cyber Risk & Regulatory Launchpad",
    organization: "PwC",
    status: "Completed",
    date: "July 2025",
    description:
      "Completed comprehensive training in cybersecurity fundamentals and ranked #1 in college. Gained knowledge in risk assessment, compliance, and security frameworks.",
    type: "Certification",
    icon: FaAward,
  },
  {
    title: "AWS Virtual Cloud Computing Internship",
    organization: "Amazon Web Services",
    status: "Completed",
    date: "july 2025",
    description:
      "Hands-on experience with EC2, S3, IAM, VPC, AWS CLI, and deployed cloud solutions. Learned cloud architecture and deployment strategies.",
    type: "Internship",
    icon: FaBuilding,
  },
  {
  title: "Python Foundation",
  organization: "Infosys Springboard",
  status: "Completed",
  date: "June 2025",
  description:
    "Earned the Python Foundation Certification by Infosys Springboard, demonstrating solid understanding of Python programming fundamentals.",
  type: "Certification",
  icon: FaCertificate,
},
{
  title: "Core & Advanced Python",
  organization: "Blue Chip Coaching",
  status: "Completed",
  date: "Aug 2024",
  description:
    "Completed Core and Advanced Python training with an A++ grade, gaining strong knowledge in Python programming concepts.",
  type: "Certification",
  icon: FaCertificate,
},
{
  title: "Programming in C & C++",
  organization: "Blue Chip Coaching",
  status: "Completed",
  date: "Sept 2023",
  description:
    "Successfully completed the curriculum of Programming in C and C++ with an A++ grade.",
  type: "Certification",
  icon: FaCertificate,
},
];

const AchievementTimelineSection = () => {
  return (
    <div className="row mx-0 py-5 d-flex justify-content-center align-items-center bg-black">
      <h2 className="text-center fw-bold text-light mb-5">
        Achievement Timeline
      </h2>

      <div className="col-12 col-md-10 d-flex flex-column gap-5">
        {achievements.map((item, idx) => (
          <AchievementDetailsCard
            key={idx}
            {...item}
            showLine={idx !== achievements.length - 1} // Line except last item
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementTimelineSection;