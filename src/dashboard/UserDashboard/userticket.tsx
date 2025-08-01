import React, { useState } from 'react';

const TicketsPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    alert('Thank you for your submission! We will review it shortly.');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Ticket submitted:', formData);
    // TODO: send to backend API
    setFormData({ subject: '', category: '', description: '' });
    alert('Thank you for your submission! We will review it shortly.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-purple-300 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-lg shadow-xl p-8 flex flex-col lg:flex-row gap-8">
        
        {/* Ticket Form Section */}
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">Submit a Ticket</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Short summary of your issue"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                required
              >
                <option value="">Select a category</option>
                <option value="booking">Booking Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="account">Account/Login Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none resize-none h-32"
                placeholder="Please describe your issue in detail"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 font-semibold"
            >
              Submit Ticket
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>
              Need urgent help? Email us at{' '}
              <a href="mailto:support@example.com" className="text-purple-700 underline">
                support@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
