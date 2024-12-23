"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import { useGetProjects } from "@/lib/api";
import Image from "next/image";

const ProjectMainPage = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [limit, setLimit] = useState(6);

  const { data: recentProjects, meta } = useGetProjects(1, limit);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Breadcrumb breadcrumbTitle="Projects" />
      <section className="inner-project-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Projects</span>
                <h2 className="title">Our Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {recentProjects.length ? (
                recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-item project-item-page wow fadeInUp"
                    data-wow-delay=".2s"
                    onMouseEnter={() => handleToggle(1)}
                    onMouseLeave={() => handleToggle(1)}
                  >
                    <div className="project-content">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CMS_BASE}${project.image[0].url}`}
                        width={100}
                        height={100}
                        alt="Project Image"
                        className="image-projects"
                        style={{
                          objectFit: 'cover',
                          overflowClipMargin: 'unset',
                          borderRadius: '6px',
                          marginRight: '30px'
                        }}
                      />
                      <div className="left-side-content">
                        <Link
                          className="span-link"
                          href={`/services/${project.service.slug}`}
                        >
                          {project.service.title}
                        </Link>
                        <h2 className="title">
                          <Link href={`/projects/${project.slug}`}>
                            {project.name}
                          </Link>
                        </h2>
                      </div>
                      <div className="project-link">
                        <Link href={`/projects/${project.slug}`}>
                          <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <h3
                    style={{
                      color: "#000000bb",
                      textAlign: "center",
                      fontWeight: "400",
                    }}
                  >
                    No projects
                  </h3>
                </>
              )}
            </div>
          </div>
          {meta.length && meta.pagination.total > limit ? (
            <div
              className="btn-no-arrow mt-25"
              onClick={() => setLimit(limit + 6)}
            >
              Load more{" "}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default ProjectMainPage;
