import About1 from "@/components/sections/About1";
import Banner1 from "@/components/sections/Banner1";
import Blog1 from "@/components/sections/Blog1";
import CTA from "@/components/sections/CTA";
import Project1 from "@/components/sections/Project1";
import Services1 from "@/components/sections/Services1";
import Testimonial1 from "@/components/sections/Testimonial1";

export const metadata = {
  title: "RD - Roofing & Chimney | Home",
  description:
    "At RD Roofing & Chimney, we are proud to be experienced renovators dedicated to transforming homes and bringing your visions to life. From new roofs to masonry work, we combine innovation with tradition to create projects that stand the test of time.",
  openGraph: {
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Banner1 />
      <About1 />
      <Services1 />
      <Project1 />
      <Testimonial1 />
      <Blog1 />
      <CTA />
    </>
  );
}
