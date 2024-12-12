"use client";

import Link from "next/link";
import { useState } from "react";
import { useGetServices } from "@/lib/api";
import Image from "next/image";
import Skeleton from "../common/Skeleton";

export default function Services1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const { data: services } = useGetServices();

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
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">What We Do</span>
                <h2 className="title tg-element-title">Service Areas</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.length ? (
              services.map((service, index) => (
                <Link
                  href={`/services/${service.slug}`}
                  className="col-lg-4 col-md-6 col-sm-10"
                  key={service.slug}
                >
                  <div
                    className="services-item wow fadeInUp"
                    style={{ minHeight: "350px" }}
                    data-wow-delay=".4s"
                    onMouseEnter={() => handleToggle(index)}
                    onMouseLeave={() => handleToggle(index)}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CMS_BASE}${service.image[0].url}`}
                      alt=""
                      width={1000}
                      height={1000}
                      className="service-image-no-hover"
                    />
                    <div className="services-content">
                      <h2
                        className="title"
                        style={{
                          display: `${
                            isActive.key == index ? "none" : "block"
                          }`,
                          width: "75%",
                        }}
                      >
                        {service.title}
                      </h2>
                      <h2 className="number">0{index + 1}</h2>
                    </div>
                    <div
                      className="services-overlay-content"
                      style={{
                        display: `${isActive.key == index ? "block" : "none"}`,
                      }}
                    >
                      <h2 className="title">{service.name}</h2>
                      <p>{service.description}</p>
                      <p className="read-more">
                        Read More <i className="fas fa-arrow-right" />
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : Array.from({length: 3}).map((_, indx) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-10"
                  key={indx}
                >
                  <div
                    className="services-item wow fadeInUp"
                    style={{ minHeight: "350px" }}
                    data-wow-delay=".4s"
                    onMouseEnter={() => handleToggle(indx)}
                    onMouseLeave={() => handleToggle(indx)}
                  >
                    <div className="service-image-no-hover">
                      <Skeleton width="100%" height="100%"/>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
