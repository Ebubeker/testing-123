import Breadcrumb from "@/components/layout/Breadcrumb";
import Counter2 from "@/components/sections/Counter2";
import Services1 from "@/components/sections/Services1";
import RequestService from "@/components/email-forms/RequestService";

export const metadata = {
  title: "RD - Roofing & Chimney | Services",
  description:
    "RD Roofing & Chimney's trusted services, including roof repair services, new roof installation, chimney cleaning services, and professional chimney maintenance. Our expert team delivers quality solutions tailored to your needs in New Jersey.",
  keywords: [
    "New roof installation NJ",
    "Best roofers in New Jersey",
    "Residential roofing company near me",
    "Affordable roofing services",
    "Quick roof leak fixes",
    "Flat roof repair contractors",
    "Storm damage roof repair",
    "Affordable chimney services",
  ],
  openGraph: {
    images: ["/servicesOg.png"],
  },
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb breadcrumbTitle="Services" />
      <Services1 />
      <div className="area-bg">
        <div
          className="area-background-img jarallax"
          data-background="/assets/img/bg/area_bg01.jpg"
        />
        <Counter2 />
        <div className="pt-115 pb-120 container">
          <RequestService />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
