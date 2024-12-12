"use client";

import { useGetBlogs } from "@/lib/api";
import { useEffect, useState } from "react";
import BlogCard1 from "./BlogCard1";
import Pagination from "./Pagination";
import Skeleton from "../common/Skeleton";

export default function BlogPost({ showItem, showPagination, searchFilter }) {
  const [currentPage, setCurrentPage] = useState(1);
  const showLimit = showItem;
  const paginationItem = 4;

  const { data: blogs, meta } = useGetBlogs(currentPage, showLimit, searchFilter);

  const [pagination, setPagination] = useState([]);
  const [limit, setLimit] = useState(showLimit);
  const pages = meta?.pagination?.pageCount || 0;

  useEffect(() => {
    if (meta?.pagination?.pageCount) {
      createPagination();
    }
  }, [limit, meta]);

  const createPagination = () => {
    const totalPages = meta.pagination.pageCount;
    const arr = new Array(totalPages).fill().map((_, idx) => idx + 1);
    setPagination(arr);
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedProducts = blogs?.slice(startIndex, endIndex) || [];

  const start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  const end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    if (currentPage < pages) setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  return (
    <>
      {/* {getPaginatedProducts.length === 0 && <h3>No Products Found</h3>} */}
      {blogs.length
        ? blogs.map((item, i) => <BlogCard1 key={i} item={item} />)
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

      {showPagination && (
        <Pagination
          getPaginationGroup={getPaginationGroup}
          currentPage={currentPage}
          pages={pages}
          next={next}
          prev={prev}
          handleActive={handleActive}
        />
      )}
    </>
  );
}
