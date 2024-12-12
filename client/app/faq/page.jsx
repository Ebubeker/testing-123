import React from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Faq1 from "@/components/sections/Faq1";

export const metadata = {
  title: "RD - Roofing & Chimney | FAQ",
  description:
    "Find answers to all your roofing and chimney questions in the RD Roofing & Chimney FAQ blog. Get expert insights on maintenance, repairs, costs, and more to make informed decisions for your home.",
  keywords: [
    "Roofing contractors in New Jersey",
    "Local roof repair services",
    "Residential roofing company near me",
    "New roof installation NJ",
    "Best roofers in New Jersey",
    "Roof repair near me",
    "Affordable roofing services",
    "Emergency roof repair NJ",
    "Storm damage roof repair",
    "Leaking roof repair service",
    "Flat roof repair contractors",
    "Hail damage roof repair near me",
    "Quick roof leak fixes",
    "Chimney cleaning services NJ",
    "Chimney repair near me",
    "Chimney inspection New Jersey",
    "Affordable chimney services",
    "Chimney liner installation",
    "Professional chimney maintenance",
    "Roof and gutter repair",
    "Skylight installation experts",
    "Seamless gutter installation NJ",
    "Certified roofing company NJ",
    "Free roofing estimates",
  ],
  openGraph: {
    images: ["/faqOg.png"],
  },
};

const FAQPage = () => {
  return (
    <>
      <Breadcrumb breadcrumbTitle="FAQ" />
      <Faq1 />
    </>
  );
};

export default FAQPage;
