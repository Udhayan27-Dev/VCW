import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-container newsletter-container">
          <div className="newsletter-text">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on new collections and special offers.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-container footer-grid">
          <div className="footer-column brand-column">
            <Link to="/" className="footer-logo">VCW</Link>
            <p className="brand-desc">
              Transforming spaces with elegant curtains, blinds, and interior solutions. 
              Quality craftsmanship for your home and office since 2024.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-9.658a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/catalogue">E-Catalogue</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#curtains">Custom Curtains</Link></li>
              <li><Link to="/services#blinds">Window Blinds</Link></li>
              <li><Link to="/services#upholstery">Sofa Upholstery</Link></li>
              <li><Link to="/services#wallpaper">Wallpapers</Link></li>
              <li><Link to="/services#installation">Installation Services</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Visit Our Showroom</h4>
            <ul className="contact-info">
              <li>
                <strong>Address:</strong><br />
                Shop No: 1134, Thadagam Road,<br />
                RS Puram, Coimbatore,<br />
                Tamil Nadu 641002
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:info@vigneshwaracurtains.com">info@vigneshwaracurtains.com</a>
              </li>
              <li>
                <strong>Hours:</strong><br />
                Mon-Sat: 9:30 AM - 8:30 PM<br />
                Sun: 10:30 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-bar">
          <p>&copy; 2024 Vigneshwara Curtains Works &amp; Services. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
