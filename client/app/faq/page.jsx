import React from 'react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Faq1 from '@/components/sections/Faq1'

export const metadata = {
  title: "RD - Roofing & Chimney | FAQ",
  description:
    "Find answers to all your roofing and chimney questions in the RD Roofing & Chimney FAQ blog. Get expert insights on maintenance, repairs, costs, and more to make informed decisions for your home.",
  openGraph: {
    images: ["/faqOg.png"],
  },
};

const FAQPage = () => {
  return (
    <>
      <Breadcrumb breadcrumbTitle="FAQ"/>
      <Faq1 />
    </>
  )
}

export default FAQPage