import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/UI/PageHero';
import ScrollReveal from '../components/UI/ScrollReveal';
import Counter from '../components/UI/Counter';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <PageHero 
        label="ABOUT US"
        title="Our Story"
        subtitle="A decade of transforming Coimbatore homes with elegance and craftsmanship"
      />

      {/* Company Story Section */}
      <section className="about-section story-section">
        <div className="container">
          <div className="story-grid">
            <ScrollReveal direction="right" className="story-image-col">
              <div className="image-wrapper">
                <img src="/images/hero/hero-main.png" alt="VCW Curtains Workmanship" className="story-image" />
                <div className="copper-border"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="story-text-col">
              <span className="section-label">SINCE 2010</span>
              <h2 className="section-title">Weaving Dreams Into Reality</h2>
              <div className="story-content">
                <p>
                  Vigneshwara Curtains Works & Services was founded with a single vision — to bring world-class window treatment solutions to the homes and offices of Coimbatore. What started as a small workshop has grown into one of the most trusted names in curtain and blind craftsmanship in Tamil Nadu.
                </p>
                <p>
                  Our founder's passion for fabrics and design excellence has been the driving force behind every stitch, every fold, and every installation. Today, we serve over 5,000 happy homes across Coimbatore, from RS Puram to Saravanampatti, with the same dedication to quality that defined our first day.
                </p>
                <p className="signature">— The Vigneshwara Family</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section mission-vision-section bg-surface">
        <div className="container">
          <div className="mission-grid">
            <ScrollReveal direction="up" delay={0.1} className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To deliver premium, custom-crafted window solutions that combine aesthetics, functionality, and durability — making luxury accessible to every Coimbatore home.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2} className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To be South India's most trusted name in window treatments, setting new standards in design innovation and customer experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section stats-section bg-dark">
        <div className="container">
          <div className="stats-grid">
            <ScrollReveal direction="up" delay={0.1} className="stat-item">
              <Counter end={10} suffix="+" className="stat-number" />
              <p className="stat-label">Years of Excellence</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="stat-item">
              <Counter end={5000} suffix="+" className="stat-number" />
              <p className="stat-label">Happy Homes</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3} className="stat-item">
              <Counter end={500} suffix="+" className="stat-number" />
              <p className="stat-label">Fabric Varieties</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4} className="stat-item">
              <Counter end={15000} suffix="+" className="stat-number" />
              <p className="stat-label">Windows Transformed</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-section values-section">
        <div className="container">
          <ScrollReveal direction="up" className="section-header text-center">
            <span className="section-label">WHAT DRIVES US</span>
            <h2 className="section-title">Our Core Values</h2>
          </ScrollReveal>
          
          <div className="values-grid">
            <ScrollReveal direction="up" delay={0.1} className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>We never compromise on materials or craftsmanship</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2} className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Customer Delight</h3>
              <p>Your satisfaction is our greatest achievement</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Constantly evolving with the latest trends and technology</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4} className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>Transparent pricing, honest advice, no hidden costs</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="about-section showroom-section bg-surface">
        <div className="container">
          <ScrollReveal direction="up" className="section-header text-center">
            <span className="section-label">VISIT US</span>
            <h2 className="section-title">Our Showroom</h2>
          </ScrollReveal>
          
          <div className="showroom-grid">
            <ScrollReveal direction="right" className="showroom-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3916.326264906059!2d76.94503761480112!3d11.014101992161474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858f700000001%3A0xc00e1cc38a16c141!2sR.S.+Puram%2C+Coimbatore%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1560000000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VCW Location"
              ></iframe>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="showroom-details">
              <div className="details-card">
                <div className="detail-item">
                  <h4>Location</h4>
                  <p>Shop No: 1134, Thadagam Road,<br/>RS Puram, Coimbatore,<br/>Tamil Nadu 641002</p>
                </div>
                
                <div className="detail-item">
                  <h4>Business Hours</h4>
                  <p>Mon-Sat: 9:30 AM - 8:30 PM<br/>Sun: 10:30 AM - 6:00 PM</p>
                </div>
                
                <div className="detail-item">
                  <h4>Contact Info</h4>
                  <p>
                    <a href="tel:+919876543210">+91 98765 43210</a><br/>
                    <a href="mailto:info@vigneshwaracurtains.com">info@vigneshwaracurtains.com</a>
                  </p>
                </div>
                
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
