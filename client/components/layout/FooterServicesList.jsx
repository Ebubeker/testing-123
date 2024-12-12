"use client";

import React from "react";
import { useGetServices } from "@/lib/api";
import Skeleton from "../common/Skeleton";
import Link from "next/link";

const FooterServicesList = () => {
  const { data: services } = useGetServices(1, 5);

  return (
    <>
      {services.length ? services.map((service) => (
        <li key={service.slug}>
          <Link href={`/services/${service.slug}`}>
            <i className="fas fa-angle-double-right" />
            {service.title}
          </Link>
        </li>
      )) : (
        <Skeleton />
      )}
    </>
  );
};

export default FooterServicesList;
