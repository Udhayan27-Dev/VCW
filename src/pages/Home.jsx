import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Counter from '../components/UI/Counter';
import ScrollReveal from '../components/UI/ScrollReveal';
import TestimonialCarousel from '../components/UI/TestimonialCarousel';
import { getAssetUrl } from '../utils/imageUtils';
import './Home.css';

const Home = () => {
  // Hero animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const services = [
    {
      title: 'Custom Curtains',
      tag: 'Bespoke Craftsmanship',
      image: '/images/gallery/curtains-bedroom.png',
      desc: "Exquisite tailored fabrics and perfect pleats designed to elevate your home's interior elegance.",
      link: '/services#curtains'
    },
    {
      title: 'Window Blinds',
      tag: 'Modern Light Control',
      image: '/images/gallery/blinds-modern.png',
      desc: 'Precision zebra, motorized, roller, and vertical blinds offering versatile privacy and sunlight control.',
      link: '/services#blinds'
    },
    {
      title: 'Designer Wallpapers',
      tag: 'Textured Elegance',
      image: '/images/gallery/wallpaper-room.png',
      desc: 'Transform plain accent walls into breathtaking artistic focal points with our luxury wallpapers.',
      link: '/services#wallpapers'
    },
    {
      title: 'Mosquito Nets',
      tag: 'Invisible Shield',
      image: '/images/services/mosquito-net.png',
      desc: 'Sleek, durable insect protection nets engineered for unobtrusive views and fresh ventilation.',
      link: '/services#mosquito-nets'
    }
  ];

  const roadmapSteps = [
    {
      step: '01',
      phase: 'SELECTION',
      title: 'Premium Fabrics',
      tagline: 'Uncompromising Quality',
      desc: 'We source only the finest materials, ensuring long-lasting durability, fade-resistance, and unparalleled touch and drape elegance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
      )
    },
    {
      step: '02',
      phase: 'PRECISION',
      title: 'Expert Craftsmanship',
      tagline: 'Bespoke Tailoring',
      desc: 'Meticulous attention to detail in every pleat and hem, creating bespoke window treatments tailored precisely to your measurements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m14 14-4-4"></path><path d="m9 9 1 1"></path></svg>
      )
    },
    {
      step: '03',
      phase: 'FITTING',
      title: 'Free Installation',
      tagline: 'White-Glove Fitting',
      desc: 'Our experienced installation master team ensures flawless fitting, smooth track operation, and immaculate setup at zero extra cost.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
      )
    },
    {
      step: '04',
      phase: 'CARE',
      title: 'After-Sale Support',
      tagline: 'Lifetime Support',
      desc: 'We build lasting relationships. Enjoy complete peace of mind with our dedicated maintenance guidance and long-term care support.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      )
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero-label label-text" variants={itemVariants}>
              PREMIUM WINDOW SOLUTIONS IN COIMBATORE
            </motion.span>
            <motion.h1 className="hero-title" variants={itemVariants}>
              Elegance Woven Into Every Thread
            </motion.h1>
            <motion.p className="hero-desc" variants={itemVariants}>
              Transform your living spaces with bespoke curtains, designer blinds, and luxurious window treatments. Handcrafted with passion since 2010.
            </motion.p>
            <motion.div className="hero-actions" variants={itemVariants}>
              <Link to="/gallery" className="btn btn-primary">Explore Collection</Link>
              <Link to="/contact" className="btn btn-outline">Free Consultation</Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src={getAssetUrl('/images/hero/hero-main.png')} alt="Luxurious Curtains" className="hero-image" />
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="trust-section bg-surface section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="trust-grid">
              <div className="trust-item">
                <Counter end={10} suffix="+" />
                <p>Years Experience</p>
              </div>
              <div className="trust-item">
                <Counter end={5000} suffix="+" />
                <p>Happy Homes</p>
              </div>
              <div className="trust-item">
                <Counter end={500} suffix="+" />
                <p>Fabric Choices</p>
              </div>
              <div className="trust-item">
                <Counter end={100} suffix="%" />
                <p>Satisfaction</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="services-section bg-surface section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center">
              <span className="label-text">WHAT WE DO</span>
              <h2 className="section-title">Our Premium Services</h2>
            </div>
          </ScrollReveal>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link to={service.link} className="service-card-redesigned">
                  <div className="service-card-image-wrapper">
                    <img src={getAssetUrl(service.image)} alt={service.title} loading="lazy" />
                    <div className="service-card-overlay" />
                    <span className="service-card-number">0{index + 1}</span>
                    <span className="service-card-tag">{service.tag}</span>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.desc}</p>
                    <div className="service-card-footer">
                      <span className="service-card-cta">Explore Collection</span>
                      <div className="service-card-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us / Roadmap Journey */}
      <section className="why-us-section roadmap-section bg-white section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center">
              <span className="label-text">OUR QUALITY ROADMAP</span>
              <h2 className="section-title">Craftsmanship That Speaks</h2>
              <p className="section-subtitle">
                A 4-step benchmark path driving perfection from fabric selection to long-term care.
              </p>
            </div>
          </ScrollReveal>

          <div className="roadmap-wrapper">
            {/* Connected progress path line */}
            <div className="roadmap-path-line" />

            <div className="roadmap-steps-grid">
              {roadmapSteps.map((stepItem, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="roadmap-card-item">
                    {/* Node marker on the line */}
                    <div className="roadmap-node-marker">
                      <div className="roadmap-node-icon">{stepItem.icon}</div>
                      <span className="roadmap-node-badge">{stepItem.step}</span>
                    </div>

                    {/* Milestone Card */}
                    <div className="roadmap-card-content">
                      <div className="roadmap-card-header">
                        <span className="roadmap-phase-tag">{stepItem.phase}</span>
                        <span className="roadmap-step-num">STAGE {stepItem.step}</span>
                      </div>
                      <h3 className="roadmap-card-title">{stepItem.title}</h3>
                      <span className="roadmap-card-tagline">{stepItem.tagline}</span>
                      <p className="roadmap-card-desc">{stepItem.desc}</p>
                      <div className="roadmap-card-accent-bar" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Steps */}
      <section className="process-section bg-surface section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center">
              <span className="label-text">OUR PROCESS</span>
              <h2 className="section-title">From Vision to Reality</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="process-wrapper">
              <div className="process-line"></div>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4 className="step-title">Consultation</h4>
                  <p className="step-desc">Free in-home visit & measurement</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4 className="step-title">Design</h4>
                  <p className="step-desc">Choose fabrics & style</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4 className="step-title">Fabrication</h4>
                  <p className="step-desc">Custom stitching & crafting</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4 className="step-title">Installation</h4>
                  <p className="step-desc">Professional fitting & setup</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="testimonials-section bg-white section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center">
              <span className="label-text">CLIENT LOVE</span>
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content text-center">
              <h2>Ready to Transform Your Space?</h2>
              <p>Book a free in-home consultation and let us bring your vision to life.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary cta-btn">Book Free Consultation</Link>
                <a href="tel:+919876543210" className="btn btn-outline cta-btn-outline">Call Now: +91 98765 43210</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
