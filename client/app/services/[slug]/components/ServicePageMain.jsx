'use client';

import React from "react";
import { useGetService, useGetServices } from "@/lib/api";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import RequestService from "@/components/email-forms/RequestService";
import Image from "next/image";

const ServicePageMain = ({slug}) => {
  const { data: service } = useGetService(slug);
  const { data: services } = useGetServices(1, 20);

  return (
    <div>
      <section className="services-details-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="services-details-wrap">
                <div className="services-details-thumb">
                  {service.length ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CMS_BASE}${service[0].image[0].url}`}
                      style={{ width: "100%", height: "auto" }}
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  ) : null}
                </div>
                <div className="services-details-content">
                  {service.length ? (
                    <>
                      <h2 className="title">{service[0].title}</h2>
                      <BlocksRenderer content={service[0].content} />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <aside className="services-sidebar">
                <div className="services-widget">
                  <h4 className="widget-title">Check our other service</h4>
                  <div className="our-services-list">
                    <ul className="list-wrap">
                      {services
                        ? services.map((serv) => (
                            <li key={serv.slug}>
                              <Link href={`/services/${serv.slug}`}>
                                {serv.title}
                                <i className="fas fa-arrow-right" />
                              </Link>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-115 container">
        <RequestService
          serviceSlug={service.length ? service[0].slug : undefined}
        />
      </div>
    </div>
  );
}

export default ServicePageMain