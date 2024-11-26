import useSWR, { preload } from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import qs from "qs";
import { useState, useEffect } from "react";

preload("posts", fetcher);

export const useGetBlogs = (currentPage = 1, showLimit = 20, filter) => {
  const query = useSWR(
    `posts?pagination[page]=${currentPage}&pagination[pageSize]=${showLimit}&populate=*${
      filter ? "&filters[title][$containsi]=" + filter : ""
    }`,
    fetcher
  );

  return {
    data: query.data ? query.data.data : [],
    meta: query.data ? query.data.meta : [],
  };
};

export const useGetBlog = (slug) => {
  const { data: blogs } = useGetBlogs(1, 20);

  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const query = useSWR(`posts?${ourQuery}&populate=*&fields=*`, fetcher);

  return {
    data: query.data ? query.data.data : [],
    meta: query.data ? query.data.meta : [],
    related:
      blogs
        .filter((blog) => blog.slug !== slug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2) || [],
  };
};

preload("projects", fetcher);

export const useGetProjects = (currentPage = 1, showLimit = 20) => {
  const query = useSWR(
    `projects?pagination[page]=${currentPage}&pagination[pageSize]=${showLimit}&populate=*&fields=*`,
    fetcher
  );

  return {
    data: query.data ? query.data.data : [],
    meta: query.data ? query.data.meta : [],
  };
};

export const useGetProject = (slug) => {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const query = useSWR(`projects?${ourQuery}&populate=*&fields=*`, fetcher);

  return {
    data: query.data ? query.data.data : [],
    meta: query.data ? query.data.meta : [],
  };
};

preload("services", fetcher);

export const useGetServices = (currentPage = 1, showLimit = 20) => {
  const query = useSWR(
    `services?pagination[page]=${currentPage}&pagination[pageSize]=${showLimit}&populate=*`,
    fetcher
  );

  return {
    data: query.data ? query.data.data : [],
    meta: query.data ? query.data.meta : [],
  };
};

export const useGetService = (slug) => {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const query = useSWR(`services?${ourQuery}&populate=*`, fetcher);

  return {
    data: query.data ? query.data.data : [],
    meta: query.data ? query.data.meta : [],
  };
};
