"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DataBg() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-background]");

    
    elements.forEach((element) => {
      console.log(element.getAttribute(
        "data-background"
      ))
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-background"
      )})`;
    });
  }, [pathname]);
  return <></>;
}
