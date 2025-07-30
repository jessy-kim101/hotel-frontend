import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-green-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10 bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Form Container */}
        <div className="bg-white p-8 w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Get In Touch</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Questions, comments, or feedback"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>
              Or email us at{' '}
              <a href="mailto:helpcenter@example.com" className="text-green-600 font-medium hover:underline">
                helpcenter@example.com
              </a>
            </p>
            <p className="mt-2">
              Follow us on{' '}
              <a href="https://facebook.com/example" className="text-green-600 font-medium hover:underline">
                Facebook
              </a>
            </p>
          </div>
        </div>

        {/* Optional Visual Panel */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-green-600 to-green-800 text-white p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">We’re here to help!</h2>
            <p className="text-lg">
              Reach out to our support team for any questions about reservations, rooms, or special packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
