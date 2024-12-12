import ProjectMainPage from "./components/ProjectMainPage";

export const metadata = {
  title: "RD - Roofing & Chimney | Projects",
  description:
    "Discover RD Roofing & Chimney's completed projects showcasing expert roofing and chimney solutions across New Jersey. View our portfolio of high-quality roof installations, repairs, and chimney maintenance work.",
  keywords: [
    "Chimney liner installation",
    "Storm damage roof repair",
    "Free roofing estimates",
  ],
  openGraph: {
    images: ["/projectsOg.png"],
  },
};

const ProjectPage = () => {
  return <ProjectMainPage />;
};

export default ProjectPage;
