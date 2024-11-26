"use client";

import React from "react";
import Link from "next/link";
import { useGetProject } from "@/lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

const ProjectDetails = ({ params }) => {
  const slug = decodeURIComponent(React.use(params).slug);
  const { data: project } = useGetProject(slug);

  return (
    <div>
      <section className="project-details-area pt-120">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-8">
              <div className="project-details-wrap">
                <div className="project-details-thumb">
                  {project.length ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_CMS_BASE}${project[0].image[0].url}`}
                      style={{ width: "100%", height: "auto" }}
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  ) : null}
                </div>
                <div className="project-details-content">
                  {project.length ? (
                    <>
                      <h2 className="title">{project[0].name}</h2>
                      <BlocksRenderer content={project[0].content} />{" "}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="project-sidebar">
                <div className="project-widget">
                  <h4 className="widget-title">Project Details</h4>
                  <div className="project-info-list">
                    <ul className="list-wrap">
                      <li>
                        <span>Year :</span>{" "}
                        {project.length ? project[0].year : null}
                      </li>
                      <li>
                        <span>Location :</span>{" "}
                        {project.length ? project[0].location : null}
                      </li>
                      <li>
                        <span>Category :</span>{" "}
                        {project.length ? (
                          <Link href={`/services/${project[0].service.slug}`}>
                            {project[0].service.title}
                          </Link>
                        ) : null}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project-widget">
                  <h4 className="widget-title">Need Our Help?</h4>
                  <div className="project-contact">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-phone-alt" />
                        <a href="tel:+17329253249">+1 732-925-3249</a>
                      </li>
                      <li>
                        <i className="fas fa-envelope" />
                        <a href="mailto:info@rdroofingandchimney.us">
                          info@rdroofingandchimney.us
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        28 Avenue E, <br /> Lodi 07644, United States
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
