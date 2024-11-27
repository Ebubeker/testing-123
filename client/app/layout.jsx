import BackToTop from "@/components/elements/BackToTop";
import DataBg from "@/components/elements/DataBg";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageHead from "@/components/layout/PageHead";
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
  title: "RD - Roofing & Chimney - Expert Renovation Services in New Jersey",
  description:
    "At RD Roofing & Chimney, we are proud to be experienced renovators dedicated to transforming homes and bringing your visions to life. From new roofs to masonry work, we combine innovation with tradition to create projects that stand the test of time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DataBg />
        <Header headerCls="transparent-header" headerTop={false} />
        {children}
        <Footer />
        <BackToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
