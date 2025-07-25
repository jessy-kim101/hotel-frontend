import React from 'react';

const AboutPage = () => (
  <div className="about-container">
    <style>{`
      .about-container {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f3f4f6;
        color: #1f2937;
        min-height: 100vh;
      }

      .about-header {
        background-color: #111827;
        color: white;
        text-align: center;
        padding: 60px 20px 40px;
      }

      .about-header h1 {
        font-size: 3rem;
        margin-bottom: 10px;
      }

      .about-header p {
        font-size: 1.25rem;
        opacity: 0.85;
      }

      .about-main {
        padding: 40px 20px;
        max-width: 1000px;
        margin: auto;
      }

      .about-section {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 40px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }

      .about-section h2 {
        font-size: 2rem;
        margin-bottom: 15px;
        color: #2d3748;
      }

      .about-section p {
        font-size: 1rem;
        line-height: 1.7;
        color: #4a5568;
      }

      .about-list {
        list-style: none;
        padding-left: 0;
        margin-top: 15px;
      }

      .about-list li {
        margin: 10px 0;
        padding-left: 1em;
        position: relative;
        color: #2b6cb0;
        font-weight: 500;
      }

      .about-list li::before {
        content: "✔";
        color: #10b981;
        position: absolute;
        left: 0;
      }

      .about-cta {
        background-color: #e0f2fe;
        padding: 40px 20px;
        text-align: center;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }

      .about-cta p {
        font-size: 1.25rem;
        font-weight: 500;
        color: #1e3a8a;
        margin-bottom: 20px;
      }

      .cta-button {
        background-color: #1d4ed8;
        color: white;
        padding: 12px 28px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }

      .cta-button:hover {
        background-color: #1e40af;
      }
    `}</style>

    {/* Header */}
    <header className="about-header">
      <h1>About Us</h1>
      <p>PANAROMA HOTEL RESORT</p>
    </header>

    {/* Main Content */}
    <main className="about-main">
      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To ensure you experience comfort and luxury during your stay at the Panorama Hotel Resort, we offer a range of
          services designed to make your visit unforgettable. From our spacious rooms with stunning views to our world-class
          dining options, every aspect of your stay is crafted with your comfort in mind.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="about-list">
          <li>Quality standards at affordable prices</li>
          <li>All-time support</li>
          <li>Professional hospitality services</li>
          <li>Easy accessibility</li>
          <li>24/7 Services</li>
        </ul>
      </section>

      {/* Policy */}
      <section className="about-section">
        <h2>Policy</h2>
        <p>
          We are committed to ensuring your stay is as comfortable as possible. Our policies are designed to provide you with
          the best experience, including flexible booking options, transparent pricing, and a commitment to customer
          satisfaction. We prioritize your needs and strive to exceed your expectations at every turn.
        </p>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <p>Always feel free to get in touch with us at any time.</p>
        <a href="/bookings" className="cta-button">
          Book Now
        </a>
      </div>
    </main>
  </div>
);

export default AboutPage;
