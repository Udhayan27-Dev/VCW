import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ end, suffix = '', prefix = '', label, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      spring.set(end);
    }
  }, [isInView, end, spring]);

  return (
    <div className="counter-item" ref={ref}>
      <div className="counter-number" style={{ fontFamily: 'DM Serif Display', fontSize: '3rem', color: '#222' }}>
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      {label && <div className="counter-label" style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#666', marginTop: '8px' }}>{label}</div>}
    </div>
  );
};

export default Counter;
