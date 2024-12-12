"use client";

import { useGetBlogs } from "@/lib/api";
import Link from "next/link";
import { formatDate } from "@/lib/utils/helpers";
import Image from "next/image";
import Skeleton from "../common/Skeleton";

export default function Blog1() {
  const { data: blogs } = useGetBlogs(1, 3);

  return (
    <>
      <section className="blog-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {blogs.length
              ? blogs.map((blog) => (
                  <div className="col-xl-4 col-md-6" key={blog.id}>
                    <div className="blog-post-item">
                      <div className="blog-post-thumb">
                        <Link href={`/blog/${blog.slug}`}>
                          <Image
                            src={`${process.env.NEXT_PUBLIC_CMS_BASE}${blog.cover[0].url}`}
                            style={{
                              width: "100%",
                              height: "auto",
                              aspectRatio: "1 / 1",
                              objectFit: "cover",
                            }}
                            width={1000}
                            height={1000}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="blog-post-content">
                        <div className="blog-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="fas fa-calendar-alt" />
                              {formatDate(new Date(blog.createdAt))}
                            </li>
                          </ul>
                        </div>
                        <h2 className="title">
                          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h2>
                        <Link href={`/blog/${blog.slug}`} className="link-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : Array.from({ length: 3 }).map((_, indx) => (
                  <div className="col-xl-4 col-md-6" key={indx}>
                    <div className="blog-post-item">
                      <div className="blog-post-thumb">
                        <div>
                          <div
                            style={{
                              width: "100%",
                              height: "auto",
                              aspectRatio: "1 / 1",
                              objectFit: "cover",
                            }}
                          >
                            <Skeleton width="100%" height="100%" />
                          </div>
                        </div>
                      </div>
                      <div className="blog-post-content">
                        <div className="blog-meta">
                          <ul className="list-wrap">
                            <li>
                              <i className="fas fa-calendar-alt" />
                              <Skeleton width="70px" height="20px" />
                            </li>
                          </ul>
                        </div>
                        <div className="mb-10">
                          <Skeleton width="80%" height="35px" />
                        </div>
                        <div>
                          <Skeleton width="100%" height="23px" />
                        </div>
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
