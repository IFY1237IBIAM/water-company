import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Have questions or need water delivery? Reach out to us and we’ll respond quickly.
      </p>

      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button>Send Message</button>
        </form>

        {/* Company Info */}
        <div className="contact-info">
          <p><strong>📍 Address:</strong> 123 Aqua Street, Lagos, Nigeria</p>
          <p><strong>📞 Phone:</strong> +234 800 123 4567</p>
          <p><strong>📧 Email:</strong> support@aquaflow.com</p>
          <p><strong>🕒 Hours:</strong> Mon - Sat: 8am - 6pm</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
