"use client";

import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const generateMailtoLink = () => {
    const { firstName, lastName, email, phone, subject, message } = formData;
    const body = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;
    return `mailto:info@rdconstruction.us?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  
  return (
    // <form action="#" className="contact-form">
    //   <div className="row">
    //     <div className="col-md-6">
    //       <div className="form-grp">
    //         <input id="firstName" type="text" placeholder="First Name*" />
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="form-grp">
    //         <input id="lastName" type="text" placeholder="Last Name*" />
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="form-grp">
    //         <input id="email" type="email" placeholder="Email Address*" />
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="form-grp">
    //         <input id="phone" type="text" placeholder="Phone Number*" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="form-grp">
    //     <input id="subject" type="text" placeholder="Subject" />
    //   </div>
    //   <div className="form-grp">
    //     <textarea id="message" placeholder="Your Message here" />
    //   </div>
    //   <a
    //     href="mailto:info@rdconstruction.us? cc=skywalker@starwars.com& bcc=leia@starwars.com& subject=May%20the%20Force%20be%20with%20you&body=May%20the%20Force%20be'%20with%20us%20all%3A%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Customer"
    //     className="btn"
    //     type="submit"
    //   >
    //     Send Message
    //   </a>
    // </form>
    <form className="contact-form">
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input
              id="firstName"
              type="text"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              id="lastName"
              type="text"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              id="email"
              type="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              id="phone"
              type="text"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-grp">
        <textarea
          id="message"
          placeholder="Your Message here"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <a href={generateMailtoLink()} className="btn" type="button">
        Send Message
      </a>
    </form>
  );
};

export default ContactUsForm;
