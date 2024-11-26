"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { resend } from "@/lib/utils/resend";
import { useGetServices } from "@/lib/api";
import { Form } from "react-bootstrap";

const RequestService = ({ serviceSlug }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: services } = useGetServices();

  useEffect(() => {
    if (serviceSlug) {
      setValue("service", serviceSlug);
    }
  }, [serviceSlug, setValue]);

  const onSubmit = async (data) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send form data as JSON
    });

    const result = await response.json();

    if (result.success) {
      alert("Email sent successfully!");
    } else {
      throw new Error(result.error || "Failed to send email");
    }
  };

  return (
    <section className="appointment-area">
      {/* <div className="container"> */}
        <div
          className="appointment-inner mb-120"
          data-background="/assets/img/bg/appointment_bg.jpg"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="sub-title">
                  Does your roof require professional attention?
                </span>
                <h2 className="title">Request a Service</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="appointment-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          id="name"
                          type="text"
                          placeholder="First Name"
                          className={errors.firstName && "input-error"}
                          {...register("firstName", {
                            required: "First name is required",
                          })}
                        />
                        <label htmlFor="name">
                          <i className="fas fa-user" />
                        </label>
                        {errors.firstName && (
                          <p className="error">{errors.firstName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          className={errors.lastName && "input-error"}
                          {...register("lastName", {
                            required: "Last name is required",
                          })}
                        />
                        <label htmlFor="lastName">
                          <i className="fas fa-user" />
                        </label>
                        {errors.lastName && (
                          <p className="error">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          id="phone"
                          type="text"
                          placeholder="Phone Number"
                          className={errors.phone && "input-error"}
                          {...register("phone", {
                            required: "Phone number is required",
                          })}
                        />
                        <label htmlFor="phone">
                          <i className="fas fa-phone-alt" />
                        </label>
                        {errors.phone && (
                          <p className="error">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email Address"
                          className={errors.email && "input-error"}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+\.\S+$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        <label htmlFor="email">
                          <i className="fas fa-envelope" />
                        </label>
                        {errors.email && (
                          <p className="error">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          id="address"
                          type="text"
                          placeholder="Address"
                          className={errors.address && "input-error"}
                          {...register("address", {
                            required: "Address is required",
                          })}
                        />
                        <label htmlFor="address">
                          <i className="fas fa-map-marker-alt" />
                        </label>
                        {errors.address && (
                          <p className="error">{errors.address.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          id="city"
                          type="text"
                          placeholder="City"
                          className={errors.city && "input-error"}
                          {...register("city", {
                            required: "City is required",
                          })}
                        />
                        <label htmlFor="city">
                          <i className="fas fa-city" />
                        </label>
                        {errors.city && (
                          <p className="error">{errors.city.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <Form.Select
                          aria-label="Default select example"
                          style={{ outline: "none" }}
                          {...register("service")}
                          // defaulvalue={serviceSlug ?? undefined}
                        >
                          <option>Choose Service</option>
                          {services
                            ? services.map((service) => (
                                <option key={service.slug} value={service.slug}>
                                  {service.title}
                                </option>
                              ))
                            : null}
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea
                      id="message"
                      placeholder="Message"
                      className={errors.message && "input-error"}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="error">{errors.message.message}</p>
                    )}
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default RequestService;
