import Breadcrumb from "@/components/layout/Breadcrumb";
import Counter2 from "@/components/sections/Counter2";
import Services1 from "@/components/sections/Services1";
import RequestService from "@/components/email-forms/RequestService";

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
        <div className="pt-115 container">
          <RequestService />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
