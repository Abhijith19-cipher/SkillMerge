import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePerformance } from '../context/PerformanceContext';
import './VerticalMarquee.css';

export default function VerticalMarquee({ items }) {
  const [selectedStory, setSelectedStory] = useState(null);
  const { isLiteMode } = usePerformance();

  // Split items into 3 columns
  const col1 = [];
  const col2 = [];
  const col3 = [];

  items.forEach((item, i) => {
    if (i % 3 === 0) col1.push(item);
    else if (i % 3 === 1) col2.push(item);
    else col3.push(item);
  });

  const renderCol = (colItems, direction) => {
    // Duplicate array for seamless scrolling, only if not in lite mode
    const renderedItems = isLiteMode ? colItems : [...colItems, ...colItems];
    return (
      <div className={`vm-col ${direction}`}>
        <div className="vm-track">
          {renderedItems.map((item, idx) => (
            <div 
              key={idx} 
              className="vm-item glass-card"
              onClick={() => setSelectedStory(item)}
            >
              <img src={item.src} alt={item.name} loading="lazy" />
              <div className="vm-item-overlay">
                <span>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`vm-container ${isLiteMode ? 'lite-mode' : ''}`}>
        {renderCol(col1, 'up')}
        {renderCol(col2, 'down')}
        {renderCol(col3, 'up')}
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div 
            className="vm-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div 
              className="vm-modal-content glass-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="vm-close-btn mono" onClick={() => setSelectedStory(null)}>
                [X]
              </button>
              <img src={selectedStory.src} alt={selectedStory.name} className="vm-modal-img" />
              <div className="vm-modal-info">
                <h3 className="neon-text">{selectedStory.name}</h3>
                <p className="mono" style={{ color: 'var(--accent)' }}>{selectedStory.placement}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
