import BlogMainPage from "./components/BlogMainPage";

export const metadata = {
  title: "RD - Roofing & Chimney | Blog",
  description:
    "Get expert advice on roof repair tips, chimney maintenance insights, roofing material comparisons, and seasonal home improvement guides to keep your property in top condition.",
  keywords: [
    "RD Roofing & Chimney blog",
    "Roofing tips and advice",
    "Chimney maintenance blog",
    "Roofing repair insights",
    "Home improvement articles NJ",
    "Expert roofing blog",
    "Chimney cleaning tips",
    "Residential roofing guides",
    "Roof installation advice",
    "Roofing materials comparison",
    "Chimney safety tips",
    "Seasonal roofing tips",
    "How to fix a leaking roof",
    "Roofing cost breakdown NJ",
    "Chimney repair guides",
  ],
  openGraph: {
    images: ["/blogOg.png"],
  },
};

const BlogPage = () => {
  return <BlogMainPage />;
};

export default BlogPage;
