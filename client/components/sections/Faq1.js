"use client";

import { useState } from "react";
import { faqs } from "@/assets/data/data";
import FaqImage1 from '@/assets/images/images/faq_img01.jpg'
import FaqImage2 from '@/assets/images/images/faq_img02.jpg'
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
  return (
    <>
      {faqs.map((faqSection, index) => (
        <section
          key={faqSection.title}
          className="faq-area faq-bg"
          data-background="/assets/img/bg/faq_bg.jpg"
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
