import React, { useState } from "react";

function ContactUa() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:info@melken-solutions.com?subject=Website Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <h1 id="contactUs" mbr-section-title mbr-fonts-style mbr-pt-1 mbr-bold display-1>
      Connect With Us
    </h1>
    <hr></hr>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default ContactUa;