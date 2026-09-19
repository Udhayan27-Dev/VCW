import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFAB from '../UI/WhatsAppFAB';
import ScrollToTop from '../UI/ScrollToTop';
import MobileCTABar from '../UI/MobileCTABar';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout-wrapper">
      <Navbar />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      
      <WhatsAppFAB />
      <ScrollToTop />
      <MobileCTABar />
    </div>
  );
};

export default Layout;
