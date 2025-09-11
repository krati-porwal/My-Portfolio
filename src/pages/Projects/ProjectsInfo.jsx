import ProjectCard from "../../ReusableComponents/ProjectCard";
import "./style.scss"; // small custom styles (gradient + tweaks)

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
    liveDemo: "https://example-demo.com",
    sourceCode: "https://github.com/your/repo",
    images: [
      "/images/nutrition-1.jpg",
      "/images/nutrition-2.jpg"
    ],
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
    sourceCode: "https://github.com/your/partyverse",
    images: ["/images/partyverse-1.jpg", "/images/partyverse-2.jpg"],
  },
  // add more projects...
];

  return (
    <section className="py-5 bg-black projects-section text-light">
      <div className="row g-4 mx-0 px-3">
        {projects.map((p, idx) => (
          <div key={p.id} className="col-12">
            <ProjectCard project={p} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsInfo;