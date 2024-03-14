'use client';
import React, { useState } from 'react';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    console.log(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        
        }),
      });
      //console.log(response.body);

      if (response.ok) {
        setMessage('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const error = await response.json();
        setMessage(`Failed to send message: ${error.message}`);
      }
    } catch (error) {
      setMessage(`Failed to send message: ${error.toString()}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Get in Touch</h2>
        <form className="contact-form bg-gray-50 rounded-lg p-8 shadow" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 border border-gray-300 rounded-md"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {message && <p className="mt-4">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
