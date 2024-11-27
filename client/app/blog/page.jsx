import BlogMainPage from "./components/BlogMainPage";

export const metadata = {
  title: "RD - Roofing & Chimney | Blog",
  description:
    "Explore our blog for professional tips, maintenance advice, and the latest updates on roofing and chimney care to keep your home safe and secure.",
  openGraph: {
    images: ["/blogOg.png"],
  },
};

const BlogPage = () => {
  return <BlogMainPage />
};

export default BlogPage;
