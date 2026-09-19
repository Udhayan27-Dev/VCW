import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/UI/ScrollReveal';
import FilterTabs from '../components/UI/FilterTabs';
import './Catalogue.css';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'curtains', label: 'Curtain Fabrics' },
  { id: 'blinds', label: 'Blind Systems' },
  { id: 'wallpapers', label: 'Wallpapers' },
  { id: 'motorized', label: 'Motorized' },
];

const PRODUCTS = [
  {
    id: 1,
    badge: 'BESTSELLER',
    category: 'curtains',
    image: '/assets/images/curtains-bedroom.png',
    categoryLabel: 'CURTAIN FABRIC',
    title: 'Royal Velvet Blackout',
    price: '₹450/sq ft',
    description: 'Luxurious velvet curtains that provide total light control and insulation.',
  },
  {
    id: 2,
    badge: 'NEW',
    category: 'blinds',
    image: '/assets/images/blinds-modern.png',
    categoryLabel: 'BLIND SYSTEM',
    title: 'Zebra Combi Blinds',
    price: '₹180/sq ft',
    description: 'Modern alternating opaque and sheer stripes for flexible light filtering.',
  },
  {
    id: 3,
    badge: '',
    category: 'curtains',
    image: '/assets/images/curtains-dining.png',
    categoryLabel: 'CURTAIN FABRIC',
    title: 'Sage Linen Sheer',
    price: '₹280/sq ft',
    description: 'Lightweight linen sheers offering privacy while letting in soft natural light.',
  },
  {
    id: 4,
    badge: 'PREMIUM',
    category: 'wallpapers',
    image: '/assets/images/wallpaper-room.png',
    categoryLabel: 'WALLPAPER',
    title: 'Damask Gold Collection',
    price: '₹120/sq ft',
    description: 'Elegant textured damask patterns with subtle gold accents.',
  },
  {
    id: 5,
    badge: '',
    category: 'blinds',
    image: '/assets/images/roller-blinds-office.png',
    categoryLabel: 'BLIND SYSTEM',
    title: 'Sunscreen Roller Blinds',
    price: '₹140/sq ft',
    description: 'Durable UV-blocking roller blinds ideal for sun-facing rooms.',
  },
  {
    id: 6,
    badge: 'SMART HOME',
    category: 'motorized',
    image: '/assets/images/blinds-modern.png',
    categoryLabel: 'MOTORIZED SYSTEM',
    title: 'Somfy Motorized Track',
    price: '₹8,500/unit',
    description: 'Ultra-quiet motorized curtain tracks with remote and app control.',
  },
  {
    id: 7,
    badge: '',
    category: 'curtains',
    image: '/assets/images/hero-main.png',
    categoryLabel: 'CURTAIN FABRIC',
    title: 'Ivory Ripple Fold',
    price: '₹350/sq ft',
    description: 'Contemporary wave fold curtains in a versatile ivory hue.',
  },
  {
    id: 8,
    badge: '',
    category: 'blinds',
    image: '/assets/images/mosquito-net.png',
    categoryLabel: 'MESH SYSTEM',
    title: 'Pleated Mesh Screen',
    price: '₹95/sq ft',
    description: 'Retractable pleated mosquito nets that are nearly invisible when open.',
  },
];

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showGate, setShowGate] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    const hasAccess = localStorage.getItem('catalogueAccess');
    const skipped = sessionStorage.getItem('catalogueSkip');
    if (!hasAccess && !skipped) {
      setShowGate(true);
    }
  }, []);

  const handleGateSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      localStorage.setItem('catalogueAccess', 'true');
      setShowGate(false);
    }
  };

  const handleGateSkip = () => {
    sessionStorage.setItem('catalogueSkip', 'true');
    setShowGate(false);
  };

  const filteredProducts = PRODUCTS.filter(
    (product) => activeTab === 'all' || product.category === activeTab
  );

  return (
    <div className="catalogue-page">
      <AnimatePresence>
        {showGate && (
          <motion.div
            className="gate-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="gate-modal"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2>Access Our Exclusive Catalogue</h2>
              <p>Enter your details to unlock our full premium collection.</p>
              <form onSubmit={handleGateSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <button type="submit" className="btn-primary">Unlock Catalogue</button>
              </form>
              <button type="button" className="btn-skip" onClick={handleGateSkip}>
                Skip for now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="page-hero">
        <div className="container">
          <span className="hero-label">E-CATALOGUE</span>
          <h1 className="hero-title">Explore Our Collections</h1>
          <p className="hero-subtitle">
            Browse our extensive range of premium fabrics, blinds, and wallpapers
          </p>
        </div>
      </section>

      <section className="catalogue-content">
        <div className="container">
          <FilterTabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

          <motion.div layout className="product-grid">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="product-card"
                >
                  <div className="product-image">
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <span className="category-label">{product.categoryLabel}</span>
                    <h3>{product.title}</h3>
                    <p className="product-desc">{product.description}</p>
                    <div className="product-bottom">
                      <span className="product-price">{product.price}</span>
                      <a
                        href={`https://wa.me/919876543210?text=${encodeURIComponent(
                          `Hi, I am interested in the ${product.title} from your E-Catalogue. Can you provide more details?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-enquire"
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ScrollReveal>
        <section className="catalogue-cta">
          <div className="container">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Our experts can help you find the perfect match for your space.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Visit Showroom</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Catalogue;
