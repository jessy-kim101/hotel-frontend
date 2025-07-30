import React, { useState } from 'react';

const BookingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
     alert('Thank you for your message! We will get back to you soon.');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-lg shadow-xl p-8 flex flex-col lg:flex-row gap-8">

        {/* Form Container */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Booking Help</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none h-32"
                placeholder="Questions, comments, or feedback"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Send
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>
              Or email{' '}
              <a href="mailto:helpcenter@example.com" className="text-blue-700 underline">
                helpcenter@example.com
              </a>
            </p>
            <p className="mt-2">
              Follow us on{' '}
              <a href="https://facebook.com/example" className="text-blue-700 underline">
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;