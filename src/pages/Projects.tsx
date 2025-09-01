import { ProjectGrid } from "@/components/project/project-grid";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};

export default Projects;