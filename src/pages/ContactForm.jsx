import React from "react";
import "../styles/styles.css";

export default function Contact() {
  return (
    <div className="contact-form" data-aos="fade-left">
      <h2>Send Us a Message</h2>

      <form action="https://formspree.io/f/mvgeekao" method="POST">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
        />

        {/* Product Select */}
        <select name="product" required>
          <option value="">Select Product</option>
          <option value="Cement">Cement</option>
          <option value="Steel">Steel</option>
          <option value="Sheet">Sheet</option>
          <option value="Cutter">Cutter</option>
          <option value="Roof">Roof</option>
          <option value="Pipe">Pipe</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
