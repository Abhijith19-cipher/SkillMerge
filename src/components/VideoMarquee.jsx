import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePerformance } from '../context/PerformanceContext';
import './VideoMarquee.css';

const VIDEOS = [
  { src: '/success-videos/BestCyberforrensictraining.mp4',      label: 'BEST CYBER FORENSIC TRAINING', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/3-scaled.avif' },
  { src: '/success-videos/everythingiseasy.mp4',                 label: 'EVERYTHING IS EASY', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/SKMG-000017-scaled.avif' },
  { src: '/success-videos/Expertmentorfriendlyfaculty.mp4',      label: 'EXPERT MENTORS', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/SKMG-000012-scaled.avif' },
  { src: '/success-videos/Gainedtrueskillaincybersecurity.mp4',  label: 'TRUE CYBER SKILLS', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/2-scaled.avif' },
  { src: '/success-videos/Handsoninternship.mp4',                label: 'HANDS-ON INTERNSHIP', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/4-scaled.avif' },
  { src: '/success-videos/Ifcybersecurityonlychooseskillmerge.mp4', label: 'ONLY SKILLMERGE', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/1-scaled.avif' },
  { src: '/success-videos/Learnfromexperts.mp4',                 label: 'LEARN FROM EXPERTS', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/SKMG-000016-scaled.avif' },
  { src: '/success-videos/Master_Cybersecurity_From_Zero_To_Hero.mp4', label: 'ZERO TO HERO', poster: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/5-scaled.avif' },
];

const HACKING_TEXTS = [
  'SYSTEM BREACHED', 'ACCESS GRANTED', 'ENCRYPTING DATA',
  'BYPASSING FIREWALL', 'INITIATING OVERRIDE', 'DECRYPTING...',
  'PROXY ROUTED', 'ROOT ACCESS'
];

function VideoItem({ video, isTop, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`marquee-video-item ${isTop ? 'align-top' : 'align-bottom'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(video.src)}
    >
      {isHovered ? (
        <video
          src={video.src}
          className="marquee-video"
          muted
          loop
          playsInline
          autoPlay
          poster={video.poster}
        />
      ) : (
        <div className="marquee-video-placeholder" style={{ padding: 0 }}>
          <img src={video.poster} alt={video.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
      <div className="video-hover-overlay">
        <span className="play-icon">▶</span>
      </div>
    </div>
  );
}

export default function VideoMarquee() {
  const [activeVideo, setActiveVideo] = useState(null);
  const { isLiteMode } = usePerformance();
  // Only duplicate items if not in Lite mode to save memory/DOM nodes
  const marqueeItems = isLiteMode ? VIDEOS : [...VIDEOS, ...VIDEOS];
  const textItems = [...HACKING_TEXTS, ...HACKING_TEXTS, ...HACKING_TEXTS];

  return (
    <section className="video-marquee-section">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <p className="section-tag mono" style={{ textAlign: 'center' }}>{'// CAMPUS_LIFE'}</p>
        <h2 className="neon-text" style={{ textAlign: 'center' }}>Video Gallery</h2>
      </div>
      <div className={`video-marquee-container ${isLiteMode ? 'lite-mode' : ''}`}>
        <div className="video-marquee-track">
          {marqueeItems.map((video, idx) => {
            const isTop = idx % 2 === 0;
            const text = textItems[idx % textItems.length];
            return (
              <React.Fragment key={idx}>
                <div className="marquee-separator mono">
                  <span className="separator-dot" />
                  {text}
                  <span className="separator-dot" />
                </div>
                <VideoItem
                  video={video}
                  isTop={isTop}
                  onClick={setActiveVideo}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-video-btn mono" onClick={() => setActiveVideo(null)}>
                [X] CLOSE
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="modal-video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
