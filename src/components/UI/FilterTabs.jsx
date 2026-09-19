import React from 'react';
import { motion } from 'framer-motion';

const FilterTabs = ({ tabs, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-tabs" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`filter-tab ${activeFilter === tab.value ? 'active' : ''}`}
          onClick={() => onFilterChange(tab.value)}
          style={{ position: 'relative', background: 'none', border: 'none', padding: '8px 16px', fontSize: '1rem', fontFamily: 'DM Sans', cursor: 'pointer', color: activeFilter === tab.value ? '#222' : '#666' }}
        >
          {tab.label}
          {activeFilter === tab.value && (
            <motion.div 
              layoutId="activeTabIndicator" 
              className="tab-indicator" 
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#B5805A' }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
