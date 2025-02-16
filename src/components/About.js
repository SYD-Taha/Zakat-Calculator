import React from 'react';
import "./CSS/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Zakat Calculator</h1>
        <p className="about-intro">
          Zakat is one of the Five Pillars of Islam, a fundamental act of worship and social responsibility. 
          It is a form of obligatory charity that purifies wealth and ensures economic justice by redistributing 
          a portion of one's assets to those in need.
        </p>

        <h2>Why Use Our Zakat Calculator?</h2>
        <p>
          Our Zakat Calculator is designed to make the process of calculating your Zakat simple, accurate, and hassle-free. 
          Whether you have cash, gold, silver, business assets, or other savings, our tool helps you determine the exact amount you need to give.
        </p>

        <h3>Key Features:</h3>
        <ul className="features-list">
          <li>✅ <strong>Easy to Use:</strong> A user-friendly interface that guides you through each step of the calculation.</li>
          <li>✅ <strong>Comprehensive Calculation:</strong> Includes all eligible asset categories such as cash, gold, business inventory, and investments.</li>
          <li>✅ <strong>Accurate & Reliable:</strong> Uses the latest Nisab values for gold and silver to ensure precise calculations.</li>
          <li>✅ <strong>Instant Results:</strong> Get your Zakat amount calculated in seconds.</li>
        </ul>

        <h3>How It Works:</h3>
        <div className="steps">
          <p>1️⃣ <strong>Enter Your Assets:</strong> Provide details about your cash, gold, silver, business income, and other qualifying assets.</p>
          <p>2️⃣ <strong>Adjust for Liabilities:</strong> Deduct any outstanding debts or obligations.</p>
          <p>3️⃣ <strong>View Your Zakat Amount:</strong> The calculator will instantly compute the exact amount of Zakat due.</p>
        </div>

        <h2>Our Mission</h2>
        <p>
          We aim to empower individuals with the knowledge and tools to fulfill their Zakat obligations with ease. 
          By providing an efficient and accessible Zakat Calculator, we hope to encourage more people to contribute 
          towards social welfare and uplift those in need.
        </p>

        <h3>Who Should Use This Calculator?</h3>
        <ul className="users-list">
          <li>✔️ Individuals calculating their personal Zakat</li>
          <li>✔️ Business owners assessing Zakat on company assets</li>
          <li>✔️ Anyone who wants to ensure their Zakat is accurate and complete</li>
        </ul>

        <div className="cta-section">
          <h4>Start Calculating Your Zakat Today!</h4>
          <p>Take a step towards purifying your wealth and making a positive impact. Use our Zakat Calculator now and fulfill your religious and social duty with confidence.</p>
          <button className="calculate-btn">Calculate Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
