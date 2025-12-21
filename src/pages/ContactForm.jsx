import React, { useState } from "react";
import "../styles/styles.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const messages = [
    "✅ Your enquiry has been submitted!",
    "📩 Thanks for contacting us. We'll reach you soon.",
    "🌟 Message received successfully!",
    "👍 We have received your request."
  ];

  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mvgeekao", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="contact-form">
      <h2>Send Us a Message</h2>

      {submitted && (
        <div className="popup-message">
          {randomMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <p>
          <strong>Name:</strong>
          <input type="text" name="name" placeholder="Full Name" required />
        </p>

        <p>
          <strong>Email Id:</strong>
          <input type="email" name="email" placeholder="Email Address" required />
        </p>

        <p>
          <strong>Mobile Number:</strong>
          <input type="text" name="phone" placeholder="Phone Number" required />
        </p>

        <p>
          <strong>Select the products:</strong>
          <select name="product" required>
            <option value="">Select Product</option>
            <option value="Cement">Cement</option>
            <option value="Steel">Steel</option>
            <option value="Sheet">Sheet</option>
            <option value="Cutter">Cutter</option>
            <option value="Roof">Roof</option>
            <option value="Pipe">Pipe</option>
          </select>
        </p>

        <p>
          <strong>Message:</strong>
          <textarea name="message" rows="5" placeholder="Your Message" required />
        </p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
