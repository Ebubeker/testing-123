"use client";

import { useGetBlogs } from "@/lib/api";
import Link from "next/link";
import { formatDate } from "@/lib/utils/helpers";
import Image from "next/image";

const RecentBlogs = () => {
  const { data: recentBlogs } = useGetBlogs(1, 3);

  return (
    <div className="blog-widget">
      <h4 className="widget-title">Recent Blogs</h4>
      <div className="rc-post-wrap">
        {recentBlogs
          ? recentBlogs.map((recentBlog) => (
              <div className="rc-post-item" key={recentBlog.id}>
                <div className="rc-post-thumb">
                  <Link href={`/blog/${recentBlog.slug}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CMS_BASE}${recentBlog.cover[0].url}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                      }}
                      width={200}
                      height={200}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="rc-post-content">
                  <h5 className="title">
                    <Link href={`/blog/${recentBlog.slug}`}>
                      {recentBlog.title}
                    </Link>
                  </h5>
                  <span>
                    <i className="fas fa-calendar-alt" />
                    {formatDate(new Date(recentBlog.createdAt))}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default RecentBlogs;
