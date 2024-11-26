"use client";

import Slider from "react-slick";
import Image from "next/image";
import TestimonialImg from '@/assets/images/images/testimonial_img.jpg';
import TestiAvatar01 from '@/assets/images/images/testi_avatar01.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial1() {
  return (
    <>
      <section className="testimonial-area pt-115 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <div className="testimonial-img">
                <Image
                  src={TestimonialImg}
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Our Testimonial
                  </span>
                  <h2 className="title tg-element-title">
                    What our customers say
                  </h2>
                </div>
                <Slider {...settings} className="testimonial-active">
                  <div className="testimonial-item">
                    <div className="testimonial-icon">
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Our renovation project was seamless thanks to RD
                        Construction. Their expertise in home renovations is
                        unmatched.
                      </p>
                    </div>
                    <div className="testimonial-avatar">
                      <div className="avatar-thumb">
                        <Image
                          src={TestiAvatar01}
                          alt="Testimonial Avatar"
                          layout="intrinsic"
                          width={60} // Adjust width as needed
                          height={60} // Adjust height as needed
                          objectFit="cover"
                        />
                      </div>
                      <div className="avatar-content">
                        <h6 className="title">Emily R.</h6>
                        {/* <p>Roofing Expert</p> */}
                      </div>
                    </div>
                  </div>
                  {/* Add additional testimonial items here if necessary */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
