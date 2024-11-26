import Link from "next/link";
import Image from "next/image";
import AboutImg01 from '@/assets/images/images/about_img01.jpg';
import AboutImg02 from '@/assets/images/images/about_img02.jpg';

export default function About1() {
  return (
    <>
      <section className="about-area pb-120 mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap">
                <Image
                  src={AboutImg01}
                  alt=""
                  className="wow fadeInRight"
                  style={{width: "369px", height: "550px", objectFit: 'cover'}}
                  data-wow-delay=".4s"
                />
                <Image
                  src={AboutImg02}
                  alt=""
                  className="wow fadeInRight"
                  style={{width: "223px", height: "473px", objectFit: 'cover'}}
                  data-wow-delay=".2s"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    About Our Company
                  </span>
                  <h2 className="title tg-element-title">
                    We’re Experienced Renovators
                  </h2>
                </div>
                <p>
                  Whether it`s a new roof or masonry work, let us make your
                  dreams take flight over New Jersey skies
                </p>
                <div className="about-list">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-check" />
                      Expert team since 1994
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Over 2300 quality projects
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Over 2100 satisfied costumers
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
