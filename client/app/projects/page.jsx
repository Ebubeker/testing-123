import ProjectMainPage from "./components/ProjectMainPage";

export const metadata = {
  title: "RD - Roofing & Chimney | Projects",
  description:
    "Checkout the projects that RD Roofing & Chimney has done in the past. Evaluating past projects will give you a better opinion on who we are, and how we work.",
  openGraph: {
    images: ["/projectsOg.png"],
  },
};

const ProjectPage = () => {
  return (<ProjectMainPage />)
};

export default ProjectPage;
