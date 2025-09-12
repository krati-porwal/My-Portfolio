import ProjectCard from "../../ReusableComponents/ProjectCard";
import "./style.scss"; // small custom styles (gradient + tweaks)
import NutritionImg from "../../assets/images/nutrition-1.png";
import PartyVerseImg from "../../assets/images/partyvarse-1.png";
import QuizStudioImg from "../../assets/images/quizstudio-1.png";
import  PortfolioImg from "../../assets/images/portfolioimg.png";

const ProjectsInfo = () => {
  const projects = [
    {
      id: 1,
      title: "Nutrition Consultant Website",
      description:
        "Developed and deployed a responsive web app to help users get nutrition advice and track diets. Improved user engagement by ~30% within the first month of launch.",
      metric: "30% increased user engagement",
      role: "Built UI components, handled responsiveness, and integrated interactive features",
      tech: ["React.js", "SCSS", "Responsive Design"],
      liveDemo: "https://amitapatil.netlify.app/",
      sourceCode: "https://github.com/akshayDatacode/amita-patil",
      images: [NutritionImg],
    },
    {
      id: 2,
      title: "PartyVerse",
      description:
        "Contributed to a modular, scalable event management web app. Implemented project structure with UI, components, models, pages, and integrated Redux Toolkit for efficient state management.",
      metric: "10+ reusable components created",
      role: "Led UI development and built reusable components",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "SCSS"],
      liveDemo: "https://partyverse.netlify.app/",
      sourceCode: "https://github.com/akshayDatacode/partyverse",
      images: [PartyVerseImg],
    },
    {
      id: 3,
      title: "Datacode Quiz Studio",
      description:
        "Built a responsive quiz platform with React, Bootstrap and SCSS. Designed and developed 15+ reusable components, integrated APIs for dynamic quiz data, and implemented multiple feature pages like Certificates and Tournaments.",
      metric: "15+ reusable components created",
      role: "Developed UI and integrated APIs",
      tech: ["React.js", "Bootstrap", "SCSS", "API Integration"],
      liveDemo: "https://your-quiz-studio-demo-link.com/",
      sourceCode: "https://github.com/yourusername/datacode-quiz-studio",
      images: [QuizStudioImg],
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive portfolio site to showcase my projects and achievements. Built with React, Bootstrap, and SCSS using Vite for a fast development setup. Implemented reusable components and smooth navigation.",
      metric: "5+ reusable components created",
      role: "Designed UI/UX and implemented complete frontend architecture",
      tech: ["React.js", "Bootstrap", "SCSS", "Vite"],
      liveDemo: "https://your-portfolio-link.netlify.app/",
      sourceCode: "https://github.com/krati-porwal/My-Portfolio",
      images: [PortfolioImg], // screenshot of your homepage
    },
    // add more projects...
  ];

  return (
    <section className="row mx-0 d-flex justify-content-center align-items-center py-5 bg-black projects-section text-light">
      <div className="col-md-11 col-12">
        <div className="row g-4 mx-0 px-3">
          {projects.map((p, idx) => (
            <div key={p.id} className="col-12">
              <ProjectCard project={p} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsInfo;
