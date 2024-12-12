import { fetcher } from "@/lib/utils/fetcher";
import qs from "qs";
import React from "react";
import BlogDetailsMain from "./components/BlogDetailsMain";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;

  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const blog = await fetcher(`posts?${ourQuery}&populate=*&fields=*`);

  return {
    title: `RD - Roofing & Chimney | ${blog.data[0].metaTitle}`,
    description: blog.data[0].metaDescription,
    keywords: blog.data[0].primaryKeywords.map((key) => key.name),
    openGraph: {
      images: [
        `${
          process.env.NEXT_PUBLIC_CMS_BASE
        }${blog.data[0].metaImage.url.substring(1)}`,
      ],
    },
  };
}

const BlogDetails = ({ params }) => {
  const slug = decodeURIComponent(React.use(params).slug);

  return <BlogDetailsMain slug={slug} />;
};

export default BlogDetails;
