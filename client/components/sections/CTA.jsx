import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="services-area cta">
      <div
        className="blog-widget widget-bg container"
        data-background="/assets/img/images/faq_img02.jpg"
      >
        <h4 className="widget-title">Need Help?</h4>
        <div className="sidebar-content">
          <h4 className="title">Are you in need of a roof replacement?</h4>
          <p>
            Contact us for a quick and clear estimate, and let’s discuss how we
            can help with your roofing needs.
          </p>
          <Link href="/contact" className="btn btn-two">
            Request a service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
