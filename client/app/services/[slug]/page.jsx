import { fetcher } from "@/lib/utils/fetcher";
import qs from "qs";
import React from "react";
import ServicePageMain from "./components/ServicePageMain";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;

  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const service = await fetcher(`services?${ourQuery}&populate=*`);

  return {
    title: `RD - Roofing & Chimney | ${service.data[0].metaTitle}`,
    description: service.data[0].metaDescription,
    openGraph: {
      // images: [service.data[0].metaImage[0].url],
      images: [`${process.env.NEXT_PUBLIC_CMS_BASE}${service.data[0].metaImage[0].url.substring(1)}`],
    },
  };
}

const ServicePage = ({ params }) => {
  const slug = decodeURIComponent(React.use(params).slug);

  return <ServicePageMain slug={slug} />;
};

export default ServicePage;
