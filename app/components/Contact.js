'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

      if (response.ok) {
        setMessage('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Let's Connect
        </motion.h2>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-form bg-white rounded-3xl p-8 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500 transition-colors duration-300 outline-none text-lg"
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
              className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500 transition-colors duration-300 outline-none text-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500 transition-colors duration-300 outline-none text-lg resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-4 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 disabled:bg-blue-300 transition-colors duration-300 shadow-md"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
          {message && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-lg font-medium text-gray-700"
            >
              {message}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
