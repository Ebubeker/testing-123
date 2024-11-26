"use client";

import { useGetProjects } from "@/lib/api";
import Link from "next/link";
import { useState } from "react";

export default function Project1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const { data: recentProjects } = useGetProjects(1, 4);

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
      <section
        className="project-area project-bg"
        data-background="/assets/img/bg/project_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">Our Projects</span>
                <h2 className="title tg-element-title">Explore Our Projects</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="view-all-btn text-end mb-50">
                <Link href="/project" className="btn">
                  All Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {recentProjects
                ? recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="project-item wow fadeInUp"
                      data-wow-delay=".2s"
                      onMouseEnter={() => handleToggle(1)}
                      onMouseLeave={() => handleToggle(1)}
                    >
                      <div className="project-content">
                        <div className="left-side-content">
                          <span>Projects V1</span>
                          <h2 className="title">
                            <Link href={`/projects/${project.slug}`}>
                              {project.name}
                            </Link>
                          </h2>
                        </div>
                        <div className="project-link">
                          <Link href="/project-details">
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
