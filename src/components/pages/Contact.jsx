import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '/src/components/styles/contact.css';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Navbar from '/src/components/pages/Navbar'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zbol91k', 'template_hexy2g9', form.current, 'lJljO44KwJ0QgCxgL')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <section className="contact-section">
      <Navbar />
      <div className="contact-box">
        <h2 className="contact-title">GET IN TOUCH</h2>
        <div className="contact-content">

          {/* Left side */}
          <div className="contact-left">
            <div className="contact-item">
              <MdOutlineMail size="20px" />
              <span>kritikabaghel.30@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneVolume size="18px" />
              <span>+91 9810617895</span>
            </div>
            <div className="contact-item">
              <TfiLocationPin size="20px" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="contact-item">
              <FaLinkedin size="18px" />
              <a href="https://www.linkedin.com/in/krit06/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/krit06/
              </a>
            </div>
            <div className="contact-item">
              <FaGithub size="18px" />
              <a href="https://github.com/30kritika" target="_blank" rel="noopener noreferrer">
                https://github.com/30kritika
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Name" required />
              <input type="email" name="user_email" placeholder="Email" required />
              <textarea name="message" placeholder="Write your message here" rows="5" required />
              <button type="submit">Send</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
