"use client";

import { useState } from "react";
import { faqs } from "@/assets/data/data";
import FaqImage1 from '@/assets/images/images/faq_img01.jpg'
import FaqImage2 from '@/assets/images/images/faq_img02.jpg'
import FaqRoofingImage1 from '@/assets/images/images/faq_img_roofing_01.jpg'
import FaqRoofingImage2 from '@/assets/images/images/faq_img_roofing_02.jpg'
import FaqChimneyImage1 from '@/assets/images/images/faq_img_chimney_01.jpg'
import FaqChimneyImage2 from '@/assets/images/images/faq_img_chimney_02.jpg'
import FaqGuttersImage1 from '@/assets/images/images/faq_img_gutters_01.jpg'
import FaqGuttersImage2 from '@/assets/images/images/faq_img_gutters_02.jpg'
import Image from "next/image";

export default function Faq1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [limit, setLimit] = useState([5, 5, 5, 5]);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const imgs = [
    (
      <>
        <Image 
          src={FaqImage1}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
        <Image 
          src={FaqImage2}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
      </>
    ),
    (
      <>
        <Image 
          src={FaqRoofingImage1}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
        <Image 
          src={FaqRoofingImage2}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
      </>
    ),
    (
      <>
        <Image 
          src={FaqChimneyImage1}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
        <Image 
          src={FaqChimneyImage2}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
      </>
    ),
    (
      <>
        <Image 
          src={FaqGuttersImage1}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
        <Image 
          src={FaqGuttersImage2}
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".4s"
        />
      </>
    ),
  ]

  return (
    <>
      {faqs.map((faqSection, index) => (
        <section
          key={faqSection.title}
          className={`faq-area faq-bg ${
            (index + 1) % 2 != 0 ? "faq-bg-even" : ""
          }`}
          data-background={(index + 1) % 2 === 0 ? "/assets/img/bg/faq_bg.jpg" : null}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Our Faqs</span>
                  <h2 className="title">{faqSection.title}</h2>
                </div>
              </div>
            </div>
            <div
              className={`row align-items-start ${
                (index + 1) % 2 === 0 ? "flex-row-reverse" : ""
              } justify-content-center`}
            >
              <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                <div className="faq-img-wrap">
                  {imgs[index]}
                  <div
                    className="overlay-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h2 className="title">FAQ</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-wrap">
                  <div className="accordion">
                    {faqSection.children.map((faqElement, indx) =>
                      indx < limit[index] ? (
                        <div className="accordion-item" key={faqElement.title}>
                          <h2
                            className="accordion-header"
                            onClick={() => handleToggle(parseInt(`${index}${indx + 1}`))}
                          >
                            <button
                              className={
                                isActive.key === parseInt(`${index}${indx + 1}`)
                                  ? "accordion-button"
                                  : "accordion-button collapsed "
                              }
                            >
                              {faqElement.title}
                            </button>
                          </h2>
                          <div
                            className={
                              isActive.key === parseInt(`${index}${indx + 1}`)
                                ? "accordion-collapse collapse  show"
                                : "accordion-collapse collapse "
                            }
                          >
                            <div className="accordion-body">
                              <p>{faqElement.description}</p>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
                {limit[index] < faqSection.children.length ? (
                  <div
                    className="btn-no-arrow mt-25"
                    onClick={() => {
                      const newArr = [...limit];
                      newArr[index] = newArr[index] + 5;  
                      setLimit(newArr)
                    }}
                  >
                    Load more
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
