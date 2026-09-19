import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PageHero.css';

const PageHero = ({ label, title, subtitle }) => {
  return (
    <section className="page-hero">
      <div className="container page-hero-container">
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="separator">&gt;</span>
            <span className="current">{label}</span>
          </div>
          <span className="hero-label">{label}</span>
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
