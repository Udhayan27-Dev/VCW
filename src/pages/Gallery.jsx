import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/UI/ScrollReveal';
import FilterTabs from '../components/UI/FilterTabs';
import Lightbox from '../components/UI/Lightbox';
import './Gallery.css';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'curtains', label: 'Curtains' },
  { id: 'blinds', label: 'Blinds' },
  { id: 'wallpapers', label: 'Wallpapers' },
  { id: 'commercial', label: 'Commercial' },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'curtains',
    image: '/assets/images/curtains-bedroom.png',
    title: 'Royal Velvet Drapes',
    location: 'RS Puram Residence',
    spanRow: 2,
  },
  {
    id: 2,
    category: 'blinds',
    image: '/assets/images/blinds-modern.png',
    title: 'Zebra Day & Night Blinds',
    location: 'Saravanampatti Apartment',
    spanRow: 1,
  },
  {
    id: 3,
    category: 'curtains',
    image: '/assets/images/curtains-dining.png',
    title: 'Sage Ripple Fold',
    location: 'Race Course Villa',
    spanRow: 1,
  },
  {
    id: 4,
    category: 'commercial',
    image: '/assets/images/roller-blinds-office.png',
    title: 'Corporate Roller Blinds',
    location: 'Avinashi Road Office',
    spanRow: 2,
  },
  {
    id: 5,
    category: 'wallpapers',
    image: '/assets/images/wallpaper-room.png',
    title: 'Damask Gold Wallpaper',
    location: 'Peelamedu Penthouse',
    spanRow: 1,
  },
  {
    id: 6,
    category: 'curtains',
    image: '/assets/images/hero-main.png',
    title: 'Sheer Elegance',
    location: 'Vadavalli Duplex',
    spanRow: 2,
  },
  {
    id: 7,
    category: 'blinds',
    image: '/assets/images/mosquito-net.png',
    title: 'Sliding Mesh Screens',
    location: 'Singanallur Home',
    spanRow: 1,
  },
  {
    id: 8,
    category: 'curtains',
    image: '/assets/images/curtains-dining.png',
    title: 'Modern Minimalist Drapes',
    location: 'Ganapathy Villa',
    spanRow: 1,
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  const currentLightboxItem = filteredItems[lightboxIndex];

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-label">OUR PORTFOLIO</span>
          <h1 className="hero-title">Inspiration Gallery</h1>
          <p className="hero-subtitle">
            Browse our collection of stunning installations across Coimbatore homes and offices
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <FilterTabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`gallery-item ${item.spanRow === 2 ? 'span-2' : ''}`}
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{item.title}</h3>
                      <p>{item.location}</p>
                      <span className="view-icon">👁️</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={filteredItems.map(item => item.image)}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
          title={currentLightboxItem?.title}
        />
      )}

      <ScrollReveal>
        <section className="gallery-cta">
          <div className="container">
            <h2>Like What You See?</h2>
            <p>Let's create something beautiful for your space.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Book Consultation</Link>
              <Link to="/catalogue" className="btn-secondary">View E-Catalogue</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Gallery;
