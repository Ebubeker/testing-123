"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

import Logo from "@/assets/images/logo/logo.png";
import Logo2 from "@/assets/images/logo/logo_02.png";
import Image from "next/image";

export default function Header({ headerCls, headerTop }) {
  const [scroll, setScroll] = useState(0);

  const pathname = usePathname();

  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => {
    setToggled(!isToggled);
    !isToggled
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    document.body.classList.remove("mobile-menu-visible");
  }, [pathname]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`menu-area  ${scroll ? "sticky-menu" : ""} ${
            headerCls ? headerCls : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo different-logo">
                      <Link href="/">
                        <Image
                          src={pathname === "/" ? Logo2 : Logo}
                          alt="RD Roofing & Chimney Logo"
                          style={{
                            maxHeight: "90px",
                            width: "auto",
                            padding: "10px 0",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="logo d-none">
                      <Link href="/">
                        <Image
                          src={Logo}
                          alt="RD Roofing & Chimney Logo"
                          style={{
                            maxHeight: "90px",
                            width: "auto",
                            padding: "10px 0",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link href="/contact" className="btn">
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                      <Image
                          src={Logo}
                          alt="RD Roofing & Chimney Logo"
                          style={{
                            maxHeight: "55px",
                            width: "auto",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar />
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
