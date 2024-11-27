"use client";

import Link from "next/link";
import { useGetBlog } from "@/lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { formatDate } from "@/lib/utils/helpers";
import RecentBlogs from "@/components/blog/RecentBlogs";
import Image from "next/image";

const BlogDetailsMain = ({slug}) => {
  const { data: blog, related } = useGetBlog(slug);

  return (
    <section className="blog-details-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="blog-details-wrap">
              <div className="blog-details-thumb">
                {blog.length ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CMS_BASE}${blog[0].cover[0].url}`}
                    style={{ width: "100%", height: "auto" }}
                    width={1000}
                    height={1000}
                    alt=""
                  />
                ) : null}
              </div>
              <div className="blog-details-content">
                <div className="blog-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-user" /> By Admin
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt" />
                      {blog.length
                        ? formatDate(new Date(blog[0].createdAt))
                        : null}
                    </li>
                  </ul>
                  {blog.length ? (
                    <>
                      <h2 className="title">{blog[0].title}</h2>
                      <BlocksRenderer content={blog[0].content} />
                    </>
                  ) : null}
                </div>
              </div>
              <div className="pev-next-post-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="post-item">
                      <div className="post-inner">
                        <div className="thumb">
                          <Link
                            href={`/blogs/${related.length && related[1].slug}`}
                          >
                            {related.length ? (
                              <Image
                                src={`${process.env.NEXT_PUBLIC_CMS_BASE}${related[0].cover[0].url}`}
                                style={{
                                  objectFit: "cover",
                                  width: "92px",
                                  height: "92px",
                                }}
                                width={200}
                                height={100}
                                alt=""
                              />
                            ) : null}
                          </Link>
                        </div>
                        <div className="content">
                          <h2 className="title">
                            <Link
                              href={`/blogs/${
                                related.length && related[1].slug
                              }`}
                            >
                              {related.length ? related[0].title : null}
                            </Link>
                          </h2>
                          <span>
                            <i className="far fa-calendar-alt" />
                            {related.length
                              ? formatDate(new Date(related[1].createdAt))
                              : null}
                          </span>
                        </div>
                      </div>
                      <div className="post-btn">
                        <Link
                          href={`/blogs/${related.length && related[1].slug}`}
                        >
                          <i className="fas fa-arrow-left" />
                          Prev
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="post-item next-post-item">
                      <div className="post-inner">
                        <div className="thumb">
                          <Link
                            href={`/blogs/${related.length && related[1].slug}`}
                          >
                            {related.length ? (
                              <Image
                                src={`${process.env.NEXT_PUBLIC_CMS_BASE}${related[1].cover[0].url}`}
                                style={{
                                  objectFit: "cover",
                                  width: "92px",
                                  height: "92px",
                                }}
                                width={200}
                                height={100}
                                alt=""
                              />
                            ) : null}
                          </Link>
                        </div>
                        <div className="content">
                          <h2 className="title">
                            <Link
                              href={`/blogs/${
                                related.length && related[1].slug
                              }`}
                            >
                              {related.length ? related[1].title : null}
                            </Link>
                          </h2>
                          <span>
                            <i className="far fa-calendar-alt" />
                            {related.length
                              ? formatDate(new Date(related[1].createdAt))
                              : null}
                          </span>
                        </div>
                      </div>
                      <div className="post-btn next-btn">
                        <Link
                          href={`/blogs/${related.length && related[1].slug}`}
                        >
                          <i className="fas fa-arrow-right" />
                          Next
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-10">
            <aside className="blog-sidebar">
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
                    Cracks in your chimney crown can lead to costly water damage
                    and compromise the safety of your home.
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
  );
}

export default BlogDetailsMain