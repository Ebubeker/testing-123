import Breadcrumb from "@/components/layout/Breadcrumb";
import About1 from "@/components/sections/About1";
import Services1 from "@/components/sections/Services1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Image from "next/image";
import Img11 from '@/assets/images/images/history_img011.jpg';
import Img01 from '@/assets/images/images/history_img01.jpg';
import TestiAvatar01 from '@/assets/images/images/h4_testi_avatar01.png';
import TestiAvatar02 from '@/assets/images/images/h4_testi_avatar02.png';
import TestiAvatar03 from '@/assets/images/images/h4_testi_avatar03.png';
import AreaBg05 from '@/assets/images/bg/area_bg05.jpg';

export default function About() {
  return (
    <>
      <Breadcrumb breadcrumbTitle="About Us" />
      <section className="history-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="history-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                  <h2 className="title tg-element-title">
                    About RD Roofing & Chimney
                  </h2>
                </div>
                <p>
                  At RD Roofing & Chimney, we are proud to be experienced
                  renovators dedicated to transforming homes and bringing your
                  visions to life. Since 1994, our expert team has been
                  delivering exceptional craftsmanship and reliable service
                  across New Jersey. From new roofs to masonry work, we combine
                  innovation with tradition to create projects that stand the
                  test of time. With over 2,300 quality projects completed and
                  more than 2,100 satisfied customers, our reputation speaks for
                  itself.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history-img-wrap">
                <ul className="list-wrap">
                  <li style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                      src={Img11}
                      alt="History Image"
                      layout="intrinsic"
                      width={600}
                      height={400}
                      objectFit="cover"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area inner-about-area">
        <div className="container">
          <div className="row align-items-center">
            <About1 />
          </div>
        </div>
      </section>
      <div
        className="area-bg-five"
        data-background={AreaBg05}
      >
        <section className="history-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="history-img-wrap">
                  <ul className="list-wrap">
                    <li style={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={Img01}
                        alt="Our Mission"
                        layout="intrinsic"
                        width={600}
                        height={440}
                        objectFit="cover"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="history-content">
                  <div className="section-title mb-25 tg-heading-subheading animation-style3">
                    <h2 className="title tg-element-title">Our Mission</h2>
                  </div>
                  <p>
                    Our mission is to ensure every project reflects the highest
                    standards of quality, safety, and durability. We take a
                    personalized approach, working closely with our clients to
                    understand their needs and provide tailored solutions that
                    exceed expectations. Whether it`s a minor repair or a
                    complete renovation, we are committed to delivering results
                    that enhance the beauty, functionality, and value of your
                    home. Let us take your dreams to new heights under the New
                    Jersey skies with our dedication to excellence and
                    unwavering customer focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="inner-testimonial-area parallax pb-120 position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Our Testimonial</span>
                  <h2 className="title">What Our Client Feedback</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="testimonial-inner">
                  <Testimonial1 />
                </div>
              </div>
            </div>
            <div className="testimonial-avatar-wrap">
              <ul className="list-wrap">
                <li>
                  <Image
                    src={TestiAvatar01}
                    className="layer"
                    data-depth="0.1"
                    alt="Testimonial Avatar 1"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src={TestiAvatar02}
                    className="layer"
                    data-depth="0.2"
                    alt="Testimonial Avatar 2"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src={TestiAvatar03}
                    className="layer"
                    data-depth="0.05"
                    alt="Testimonial Avatar 3"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src={TestiAvatar03}
                    className="layer"
                    data-depth="0.2"
                    alt="Testimonial Avatar 3"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src={TestiAvatar02}
                    className="layer"
                    data-depth="0.05"
                    alt="Testimonial Avatar 2"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src={TestiAvatar01}
                    className="layer"
                    data-depth="0.1"
                    alt="Testimonial Avatar 1"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Services1 />
      </div>
    </>
  );
}
