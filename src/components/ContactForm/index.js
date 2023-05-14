import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Figure } from "react-bootstrap";
import contact from "../../assets/images/contact-us.jpg"

function ContactForm() {

  const siteKey = process.env.REACT_APP_SITE_KEY;
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message || !captchaToken) {
      alert("Please fill in all fields and complete the CAPTCHA.");
      return;
    }
    window.location.href = `mailto:info@melken-solutions.com?subject=New contact form submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <>
     <hr/>
      <Row id="contactUs">
        <Col>
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
            <ReCAPTCHA
              sitekey='6LeqFhMaAAAAADLKElH-VSTZon-Ldmld2TOMe4aV'
              onChange={handleCaptchaChange}
            />
            <button type="submit">Send</button>
          </form> 
        </Col>
        <Col>
        <Figure>
          <Figure.Image
            width={471}
            height={400 }
            alt=""
            src={contact}
          />
        </Figure>
        
        </Col>
      </Row> 
    </>
  );
}

export default ContactForm;