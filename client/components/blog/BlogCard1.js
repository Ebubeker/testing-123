import Link from "next/link";
import { formatDate } from "@/lib/utils/helpers";
import Image from "next/image";

export default function BlogCard1({ item }) {
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="blog-post-item">
          <div className="blog-post-thumb">
            <Link href={`/blog/${item.slug}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CMS_BASE}${item.cover[0].url}`}
                style={{ width: "100%", height: "auto", aspectRatio: "1 / 1", objectFit: 'cover' }}
                width={1000}
                height={1000}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-post-content">
            {/* <Link href="/blog" className="tag">{item.category}</Link> */}
            <div className="blog-meta">
              <ul className="list-wrap">
                <li>
                  <i className="far fa-user" /> By RD
                </li>
                <li>
                  <i className="fas fa-calendar-alt" />
                  {formatDate(new Date(item.createdAt))}
                </li>
              </ul>
            </div>
            <h2 className="title">
              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
            </h2>
            <Link href={`/blog/${item.slug}`} className="link-btn">
              Read More
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
