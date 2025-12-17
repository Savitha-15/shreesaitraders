import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We are here to assist you with all your construction material needs.
      </p>

      <div className="contact-wrapper">

        {/* LEFT SIDE – CONTACT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p><strong>Phone:</strong> +91 9976943630</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:shreesaitraderskpm@gmail.com">
              shreesaitraderskpm@gmail.com
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/shreesaitraders_?igsh=dGk3YjNiNDJkdW40"
              target="_blank"
              rel="noreferrer"
            >
              shreesaitraders_
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/share/14TPgdTpcTw/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>

          <p>
            <strong>Address:</strong><br />
            No.163, Vedapatti Road, Krishnapura (Post),<br />
            Madathukulam (TK), Tamil Nadu.
          </p>

          <h3>Business Hours</h3>
          <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form
            action="https://formspree.io/f/mvgeekao"
            method="POST"
          >
            {/* Optional but recommended */}
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}
