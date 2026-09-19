import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/UI/PageHero';
import ScrollReveal from '../components/UI/ScrollReveal';
import { getAssetUrl } from '../utils/imageUtils';
import './Services.css';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={onClick} aria-expanded={isOpen}>
        {title}
        <span className="accordion-icon">+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="accordion-body-wrapper"
            style={{ overflow: 'hidden' }}
          >
            <div className="accordion-body">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Services = () => {
  const location = useLocation();
  const [openCollection, setOpenCollection] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const services = [
    {
      id: 'curtains',
      image: '/images/gallery/curtains-bedroom.png',
      title: 'Custom Curtains',
      description: 'From sheer elegance to blackout luxury — every curtain crafted to perfection. Ripple fold, pinch pleat, eyelet, and motorized options available.'
    },
    {
      id: 'blinds',
      image: '/images/gallery/blinds-modern.png',
      title: 'Window Blinds',
      description: 'Roller, zebra, venetian, vertical, roman, and honeycomb blinds. Modern light control solutions for every room.'
    },
    {
      id: 'wallpapers',
      image: '/images/gallery/wallpaper-room.png',
      title: 'Designer Wallpapers',
      description: 'Transform your walls with premium wallpaper collections. Textured, 3D, damask, floral, and contemporary patterns.'
    },
    {
      id: 'mosquito-nets',
      image: '/images/services/mosquito-net.png',
      title: 'Mosquito Nets & Mesh',
      description: 'Sliding, pleated, and roller mosquito screens for windows and doors. Protect your family without blocking airflow.'
    },
    {
      id: 'motorized',
      image: '/images/gallery/roller-blinds-office.png',
      title: 'Motorized & Smart Solutions',
      description: 'Automate your curtains and blinds with Somfy motors. Compatible with Alexa, Google Home, and smart home systems.'
    },
    {
      id: 'consultation',
      image: '/images/hero/hero-main.png',
      title: 'Free Home Consultation',
      description: 'Our design specialists visit your home with 500+ fabric swatches, take precise measurements, and provide expert styling advice.'
    }
  ];

  const collections = [
    {
      title: 'Types of Curtains We Offer',
      content: (
        <ul>
          <li><strong>Sheer Curtains:</strong> Filter natural light while maintaining privacy.</li>
          <li><strong>Blackout Curtains:</strong> Complete darkness for bedrooms and home theaters.</li>
          <li><strong>Velvet & Silk:</strong> Premium luxurious feel for living rooms and formal spaces.</li>
          <li><strong>Linen & Cotton:</strong> Breathable, natural fabrics for a contemporary, airy look.</li>
          <li><strong>Styles:</strong> Eyelet, Pinch Pleat, Ripple Fold, Goblet, and Box Pleat.</li>
        </ul>
      )
    },
    {
      title: 'Types of Blinds',
      content: (
        <ul>
          <li><strong>Zebra Blinds:</strong> Dual-layered fabric for flexible light control.</li>
          <li><strong>Roller Blinds:</strong> Sleek, minimalist design available in screen and blackout fabrics.</li>
          <li><strong>Venetian Blinds:</strong> Classic wood or aluminum slats for precise tilting.</li>
          <li><strong>Roman Blinds:</strong> Elegant fabric folds that combine curtain softness with blind functionality.</li>
          <li><strong>PVC Balcony Blinds:</strong> Weather-resistant outdoor blinds for rain and sun protection.</li>
        </ul>
      )
    },
    {
      title: 'Wallpaper Collections',
      content: (
        <ul>
          <li><strong>Textured & 3D:</strong> Add depth and character to accent walls.</li>
          <li><strong>Damask & Vintage:</strong> Classic patterns for traditional elegance.</li>
          <li><strong>Floral & Botanical:</strong> Bring nature indoors with vibrant or subtle floral prints.</li>
          <li><strong>Contemporary & Geometric:</strong> Modern lines and shapes for a bold statement.</li>
          <li><strong>Custom Murals:</strong> Personalized wall art scaled to your exact dimensions.</li>
        </ul>
      )
    },
    {
      title: 'Commercial Solutions',
      content: (
        <ul>
          <li><strong>Corporate Offices:</strong> Screen blinds for glare reduction and professional aesthetics.</li>
          <li><strong>Hotels:</strong> Flame-retardant blackout curtains and luxurious sheers.</li>
          <li><strong>Hospitals:</strong> Anti-microbial and easy-to-clean cubicle tracks and blinds.</li>
          <li><strong>Restaurants:</strong> Acoustic curtains and ambient light control solutions.</li>
        </ul>
      )
    }
  ];

  const faqs = [
    {
      question: 'Do you provide free measurement in Coimbatore?',
      answer: 'Yes, we offer free in-home consultation and precise measurement services across Coimbatore and surrounding areas.'
    },
    {
      question: 'How long does custom curtain stitching take?',
      answer: '5-7 working days depending on fabric and design complexity.'
    },
    {
      question: 'What types of blinds are best for Coimbatore weather?',
      answer: 'For intense sunlight, we recommend blackout roller blinds or zebra blinds. For balconies, PVC exterior blinds are highly durable.'
    },
    {
      question: 'Do you offer motorized curtain solutions?',
      answer: 'Yes, we provide advanced motorized tracks and smart motors from Somfy and other leading brands, compatible with home automation.'
    },
    {
      question: 'What areas in Coimbatore do you serve?',
      answer: 'We serve all areas in and around Coimbatore including RS Puram, Peelamedu, Vadavalli, Saravanampatti, and nearby towns like Tiruppur and Pollachi.'
    }
  ];

  const steps = [
    { num: '01', title: 'Book', desc: 'Schedule a free home visit at your convenience.' },
    { num: '02', title: 'Design', desc: 'Select fabrics from 500+ samples with our experts.' },
    { num: '03', title: 'Craft', desc: 'Your window treatments are stitched to precise measurements.' },
    { num: '04', title: 'Install', desc: 'Professional installation by our trained technicians.' }
  ];

  return (
    <div className="services-page">
      <PageHero 
        label="OUR SERVICES"
        title="Crafting Beautiful Spaces"
        subtitle="Comprehensive window treatment solutions tailored for your home and office"
      />

      <section className="section services-grid-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">WHAT WE DO</span>
              <h2 className="section-title">Our Premium Offerings</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid services-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div id={service.id} className="service-card">
                  <div className="service-image-wrapper">
                    <img src={getAssetUrl(service.image)} alt={service.title} className="service-image" />
                    <div className="service-overlay">
                      <Link to="/contact" className="btn btn-primary">Get Quote</Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface process-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">OUR PROCESS</span>
              <h2 className="section-title">4 Simple Steps to Beautiful Windows</h2>
            </div>
          </ScrollReveal>
          
          <div className="process-steps">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="process-step">
                  <div className="step-number">{step.num}</div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                  {index < steps.length - 1 && <div className="step-line"></div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section collections-section">
        <div className="container container-narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">DETAILS</span>
              <h2 className="section-title">Explore Our Collections</h2>
            </div>
          </ScrollReveal>
          
          <div className="accordion-wrapper">
            {collections.map((col, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <AccordionItem 
                  title={col.title} 
                  isOpen={openCollection === index} 
                  onClick={() => setOpenCollection(openCollection === index ? null : index)}
                >
                  {col.content}
                </AccordionItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface faq-section">
        <div className="container container-narrow">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">QUESTIONS</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          
          <div className="accordion-wrapper">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <AccordionItem 
                  title={faq.question} 
                  isOpen={openFAQ === index} 
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <p>{faq.answer}</p>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark cta-section text-center">
        <div className="container">
          <ScrollReveal>
            <h2 className="cta-title">Let's Create Something Beautiful Together</h2>
            <p className="cta-subtitle">Schedule your free consultation today.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">WhatsApp Us</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
