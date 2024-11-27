import { fetcher } from "@/lib/utils/fetcher";
import qs from "qs";
import React from "react";
import ProjectDetailsMain from "./components/ProjectDetailsMain";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;

  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const project = await fetcher(`projects?${ourQuery}&populate=*&fields=*`);

  return {
    title: `RD - Roofing & Chimney | ${project.data[0].name}`,
    description: project.data[0].description,
    openGraph: {
      images: [`${process.env.NEXT_PUBLIC_CMS_BASE}${project.data[0].image.url.substring(1)}`],
    },
  };
}

const ProjectDetails = ({ params }) => {
  const slug = decodeURIComponent(React.use(params).slug);

  return (
    <ProjectDetailsMain slug={slug}/>
  );
};

export default ProjectDetails;
