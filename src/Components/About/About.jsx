import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="fade-in">About Us</h1>
      <p className="fade-in">Welcome to our website! We are dedicated to providing the best service possible.</p>
      
      <section className="mission fade-in">
        <h2>Our Mission</h2>
        <p>To deliver innovative solutions that empower our customers and enhance their experiences.</p>
      </section>

      <section className="values fade-in">
        <h2>Our Values</h2>
        <p>Integrity, innovation, and collaboration are at the core of everything we do.</p>
      </section>

      <section className="offerings fade-in">
        <h2>What We Offer</h2>
        <ul>
          <li>Custom software development</li>
          <li>Consulting services</li>
          <li>24/7 customer support</li>
        </ul>
      </section>

      <section className="team fade-in">
        <h2>Our Team</h2>
        <p>We have a diverse team of professionals with expertise in various fields, ready to tackle any challenge.</p>
      </section>

      <button className="learn-more">Learn More</button>
    </div>
  );
};

export default About;
