import RequestService from "@/components/email-forms/RequestService";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "RD - Roofing & Chimney | Contact",
  description:
    "Get in touch with RD Roofing & Chimney for all your roofing and chimney needs. Whether you're requesting a quote, scheduling a service, or need expert advice, we are here to assist you with professionalism and care.",
  keywords: [
    "Contact RD Roofing & Chimney",
    "Roofing company contact NJ",
    "Chimney services inquiry",
    "Get a roofing estimate",
    "Request chimney repair services",
    "Roofing customer support",
    "Speak with a roofing expert",
    "Schedule a roof inspection",
    "Contact for roof repair NJ",
    "Affordable roofing quotes",
    "Emergency roof repair contact",
    "Chimney cleaning inquiry",
    "Call for roofing services NJ",
    "Roofing contractor email NJ",
    "Find local roofers contact",
  ],
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
            <div className="col-xl-6 col-lg-10 flex-col-wrap">
              <div className="contact-info-wrap">
                <h2 className="title">Need Any Help?</h2>
                <p>Call us or message and we`ll respond as soon as possible</p>
                <ul className="list-wrap items-start">
                  <li>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <Link href="/tel:+17325100153">+1 732-510-0153</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="content">
                        <Link href="mailto:info@rdroofingandchimney.us">
                          info@rdroofingandchimney.us
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
                          132 Washington St
                          <br /> Keyport, NJ 07735 United States
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
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=132%20Washington%20St,%20Keyport,%20NJ%2007735,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
