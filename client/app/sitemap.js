import { fetcher } from "@/lib/utils/fetcher";

export default async function sitemap() {
  const blogs = await fetcher(
    `posts?pagination[page]=${1}&pagination[pageSize]=${100}&populate=*`
  );
  const services = await fetcher(
    `services?pagination[page]=${1}&pagination[pageSize]=${100}&populate=*`
  );
  const projects = await fetcher(
    `projects?pagination[page]=${1}&pagination[pageSize]=${100}&populate=*`
  );

  console.log(blogs.data.map((post) => post.slug));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    ...blogs.data.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    })),
    ...services.data.map((service) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${service.slug}`,
    })),
    ...projects.data.map((project) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`,
    })),
  ];
}
