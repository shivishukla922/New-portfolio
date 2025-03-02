import React from "react";
import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "31e568d4-4a6c-4fa9-a244-3f243dcb288b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Contact Info</h1>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} />
              <p>shivishukla922@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} />
              <p>9115065583</p>
            </div>
            <div className="contact-detail">
              <img src={location} />
              <p> Noida ,India</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://github.com/shivishukla922"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaGithub size="50px" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivi922"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin size="50px" />
              </a>
            </div>
            <div className="constact-detail">
              <a
                href="https://drive.google.com/file/d/1Hj-c1HQs0xVMRcubS3PIdZJdUcBb25tk/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="resume-button">Resume</button>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=""> Your Name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="Email" placeholder=" Enter your email" name="email" />
          <label htmlFor=""> Write Your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="enter your message"
          ></textarea>
          <button className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
