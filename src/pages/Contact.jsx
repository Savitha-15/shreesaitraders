import React from "react";
import "../styles/styles.css";

export default function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title" data-aos="fade-down">Contact Us</h1>
      <p className="contact-subtitle" data-aos="fade-up">
        We are here to assist you with all your construction material needs.
      </p>

      <div className="contact-wrapper">

        <div className="contact-info" data-aos="fade-right">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> +91 9976943630</p>
          <p><strong>Email:</strong> shreesaitraderskpm@gmail.com</p>
          <p><strong>Instagram:</strong></p>
          <p><strong>Facebook:</strong></p>
          <p><strong>Address:</strong><br />No.163, Vedapatti Road, Krishnapura (Post), Madathukulam (TK), Tamil Nadu.</p>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <h2>Send Us a Message</h2>

          <form action="https://formspree.io/f/mvgeekao" method="POST">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}
