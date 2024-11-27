import RequestService from "@/components/email-forms/RequestService";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "RD - Roofing & Chimney | Contact",
  description:
    "Get in touch with RD Roofing & Chimney for expert roofing and chimney services. Visit our contact page to request a quote, ask questions, or schedule a consultation with our friendly team.",
  openGraph: {
    images: ["/contactOg.png"],
  },
};

const Contact = () => {
  return (
    <>
      <Breadcrumb breadcrumbTitle="Contact" />
      <section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <RequestService />
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="contact-info-wrap">
                <h2 className="title">Need Any Help?</h2>
                <p>Call us or message and we`ll respond as soon as possible</p>
                <ul className="list-wrap">
                  <li>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <Link href="/tel:+17329253249">+1 732-925-3249</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="content">
                        <Link href="mailto:info@rdconstruction.us">
                          info@rdconstruction.us
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <p>
                          28 Avenue E, Lodi 07644,
                          <br /> United States
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* contact-map */}
              <div id="contact-map">
                <iframe
                  width="100%"
                  height="600"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28%20Avenue%20E,%20Lodi,%20NJ%2007644,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* contact-map-end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
