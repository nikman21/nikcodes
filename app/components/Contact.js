'use client';

import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Get in Touch</h2>
        <form className="contact-form bg-gray-50 rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
          </div>
          <div className="mb-6">
            <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
          </div>
          <div className="mb-6">
            <textarea name="message" rows="4" placeholder="Your Message" required className="contact-input"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <style jsx>{`
        .contact-form {
          transition: background-color 0.3s ease;
          background-color: #fff; /* Ensures form stands out against the light background */
        }

        .contact-input {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }

        .contact-input:focus {
          border-color: #60efff;
          outline: none;
        }

        .submit-btn {
          width: 100%;
          background-color: #0061ff;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #0051cc;
        }
      `}</style>
    </section>
  );
}

export default Contact;
