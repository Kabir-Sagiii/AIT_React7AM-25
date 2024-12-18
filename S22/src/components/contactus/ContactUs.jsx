// import React from "react";

// function ContactUs() {
//   return (
//     <div
//       style={{
//         color: "red",
//         textAlign: "center",
//         fontSize: "37px",
//         marginTop: "100px",
//       }}
//     >
//       <h1>Component Under Implentation</h1>
//     </div>
//   );
// }

// export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.css"; // Optional: Include styles here

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    // Here you can handle the form submission, e.g., send data to a server
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="thank-you-message">
          Thank you for contacting us! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
