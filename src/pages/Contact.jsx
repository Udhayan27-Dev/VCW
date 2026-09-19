import React, { useState } from 'react';
import ScrollReveal from '../components/UI/ScrollReveal';
import { useToast } from '../components/UI/Toast';
import './Contact.css';

const Contact = () => {
  const { addToast } = useToast ? useToast() : { addToast: () => {} };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)} ${numbers.slice(5, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    
    const phoneNum = formData.phone.replace(/\D/g, '');
    if (!phoneNum) {
      tempErrors.phone = 'Phone is required';
    } else if (!/^[6-9]\d{9}$/.test(phoneNum)) {
      tempErrors.phone = 'Invalid Indian phone number';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const contacts = JSON.parse(localStorage.getItem('vcw_contacts') || '[]');
      contacts.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('vcw_contacts', JSON.stringify(contacts));
      
      if(addToast) {
        addToast('Message sent successfully!', 'success');
      } else {
        alert('Message sent successfully!');
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">GET IN TOUCH</span>
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Reach out for a free consultation or visit our showroom.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="contact-form-container">
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Name*</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label>Phone*</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="98765 43210"
                      maxLength="11"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label>Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="Custom Curtains">Custom Curtains</option>
                      <option value="Window Blinds">Window Blinds</option>
                      <option value="Wallpapers">Wallpapers</option>
                      <option value="Mosquito Nets">Mosquito Nets</option>
                      <option value="Motorized Solutions">Motorized Solutions</option>
                      <option value="Full Home Package">Full Home Package</option>
                      <option value="Commercial Project">Commercial Project</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary btn-submit">Submit Message</button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="contact-info">
                <div className="info-card">
                  <h3>Visit Our Showroom</h3>
                  <p>Shop No: 1134, Thadagam Road, RS Puram, Coimbatore, Tamil Nadu 641002</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="link-text">Get Directions →</a>
                </div>

                <div className="info-card">
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                  <p className="text-small">Mon-Sat hours</p>
                </div>

                <div className="info-card">
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@vigneshwaracurtains.com">info@vigneshwaracurtains.com</a></p>
                  <p><a href="mailto:orders@vigneshwaracurtains.com">orders@vigneshwaracurtains.com</a></p>
                </div>

                <div className="info-card">
                  <h3>WhatsApp</h3>
                  <p>Quick responses during business hours</p>
                  <a
                    href="https://wa.me/919876543210?text=Hi, I would like to schedule a consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    Chat with Us
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="VCW Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3268482187647!2d76.9463996148008!3d11.011681992161482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzQyLjEiTiA3NsKwNTYnNTUuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="hours-section">
        <div className="container">
          <div className="hours-card">
            <h2>Business Hours</h2>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Monday - Saturday</td>
                  <td>9:30 AM - 8:30 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>10:30 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Holidays</td>
                  <td>By Appointment</td>
                </tr>
              </tbody>
            </table>
            <p className="walk-in-note">Walk-ins welcome! No appointment needed.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
