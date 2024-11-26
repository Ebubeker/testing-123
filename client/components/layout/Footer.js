import Link from "next/link";

import Logo2 from '@/assets/images/logo/logo_02.png'
import Image from "next/image";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">About Us</h2>
                    <div className="footer-content">
                      <p>
                        RD Construction exists to provide exceptional
                        workmanship throught the of our product and services; to
                        bring value clients through attentive
                        details,proffessional integrity and aggressive
                        performance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Our Services</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Residential Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Chimney Repairs
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Siding Replacement
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Gutter Installation
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Masonry
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Quick Links</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center company-contact">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="logo">
                      <Link href="/index">
                        <Image src={Logo2} alt="White Logo" style={{maxHeight: '55px !important', width: 'auto'}}/>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <span>Phone No</span>
                        <Link href="/tel:+17329253249">+1 732-925-3249</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      © Copyright {new Date().getFullYear()}. All Right Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
