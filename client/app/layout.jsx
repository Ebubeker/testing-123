import BackToTop from "@/components/elements/BackToTop";
import DataBg from "@/components/elements/DataBg";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/fontawesome-all.min.css";
import "@/assets/css/odometer.css";
import "@/assets/css/tg-cursor.css";
import "@/assets/css/default.css";
import "@/assets/css/jarallax.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";

export const metadata = {
  title: "RD - Roofing & Chimney | Expert Renovation Services in New Jersey",
  description:
    "At RD Roofing & Chimney, we are proud to be experienced renovators dedicated to transforming homes and bringing your visions to life. From new roofs to masonry work, we combine innovation with tradition to create projects that stand the test of time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-G58W33X788`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G58W33X788');
          `}
        </Script>
      </head>
      <body>
        <DataBg />
        <Header headerCls="transparent-header" headerTop={false} />
        {children}
        <Footer />
        <BackToTop />
        <SpeedInsights />
      </body>
      {/* <GoogleTagManager gtmId="GTM-XYZ" /> */}
    </html>
  );
}
