'use client'

import React from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BlogPost from "@/components/blog/BlogPost";
import Link from "next/link";
import RecentBlogs from "@/components/blog/RecentBlogs";
import { useState } from "react";

const BlogMainPage = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Breadcrumb breadcrumbTitle="Blog" />
      <section className="inner-blog-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="row">
                <BlogPost
                  showItem={6}
                  showPagination
                  searchFilter={searchInput}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-10">
              <aside className="blog-sidebar">
                <div className="blog-widget">
                  <div className="sidebar-search">
                    <h4 className="widget-title">Search</h4>
                    <form action="#">
                      <input
                        id="search"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <RecentBlogs />
                <div
                  className="blog-widget widget-bg"
                  data-background="/assets/img/images/faq_img01.jpg"
                >
                  <h4 className="widget-title">Need Help</h4>
                  <div className="sidebar-content">
                    <h4 className="title">
                      Is your chimney leaking or showing signs of deterioration?
                    </h4>
                    <p>
                      Cracks in your chimney crown can lead to costly water
                      damage and compromise the safety of your home.
                    </p>
                    <Link href="/contact" className="btn btn-two">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogMainPage