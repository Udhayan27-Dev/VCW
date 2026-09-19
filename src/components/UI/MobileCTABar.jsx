import React from 'react';
import { Link } from 'react-router-dom';

const MobileCTABar = () => {
  return (
    <div className="mobile-cta-bar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#fff',
      display: 'none',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      zIndex: 9500
    }}>
      <style>{`
        @media (max-width: 768px) {
          .mobile-cta-bar { display: flex !important; }
        }
        .cta-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px 0;
          color: #333;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          border-right: 1px solid #eee;
        }
        .cta-item:last-child { border-right: none; }
        .cta-item svg { margin-bottom: 4px; color: #B5805A; }
      `}</style>
      <a href="tel:+919876543210" className="cta-item" aria-label="Call Us">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>Call</span>
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="cta-item" aria-label="WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span>Chat</span>
      </a>
      <Link to="/contact" className="cta-item" aria-label="Contact">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>Mail</span>
      </Link>
    </div>
  );
};

export default MobileCTABar;
