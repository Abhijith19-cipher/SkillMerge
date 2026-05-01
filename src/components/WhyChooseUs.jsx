import React, { useState, useEffect, useRef } from 'react'
import { motion, useSpring, AnimatePresence } from 'motion/react'
import './WhyChooseUs.css'
import BorderGlow from './BorderGlow'

const FEATURES = [
  {
    title: "Hands-On Training",
    desc: "Learn by doing through fully practical lab sessions. We focus on real-world skills using industry-standard tools, not just classroom theory, so you are ready for real jobs."
  },
  {
    title: "Placement Support",
    desc: "Get structured career support from our team. We help with resume building, interview preparation, and job guidance to support your entry into the cybersecurity industry."
  },
  {
    title: "Live Project Experience",
    desc: "Work on real-time projects and practical scenarios. This helps you build a strong portfolio that clearly shows your skills to employers."
  },
  {
    title: "Dedicated Mentorship",
    desc: "Learn with guidance from experienced professionals. Our mentors support you in improving both technical skills and professional communication."
  },
  {
    title: "Industry-Relevant Skills",
    desc: "Train in skills that companies actually use. Our programs cover ethical hacking, cyber defense, secure development, networking, and SOC fundamentals."
  },
  {
    title: "Clear Career Direction",
    desc: "We help you plan your growth in cybersecurity. Our training prepares you for roles such as SOC Analyst, Network Security Engineer, and related security positions."
  }
];

export default function WhyChooseUs() {
  const terminalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for cursor position
  const cursorX = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to viewport
      cursorX.set(e.clientX - 40); // Offset by half the cursor width (80px)
      cursorY.set(e.clientY - 40);
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, cursorX, cursorY]);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleTerminalClick = () => {
    if (isTyping || isVideoOpen) return;
    
    setIsTyping(true);
    setTypedText("");
    
    const textToType = "./play_video.sh --source=./assets/Skillmerge.mp4";
    let currentText = "";
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        currentText += textToType.charAt(i);
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsVideoOpen(true);
          setIsTyping(false);
          setTypedText(""); // Reset after opening
        }, 600); // Wait briefly before popping the modal
      }
    }, 40);
  };

  return (
    <section className="why-choose-section">
      <div className="section-header">
        <p className="mono section-tag">{'// ACADEMY_FEATURES'}</p>
        <h2 className="section-title">Why Choose SkillMerge Hackers Academy</h2>
      </div>

      <BorderGlow
        edgeSensitivity={25}
        glowColor="270 80 75"
        backgroundColor="#0f0a19"
        borderRadius={12}
        glowRadius={50}
        glowIntensity={1.2}
        coneSpread={30}
        animated={true}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
        fillOpacity={0.35}
        className="terminal-border-glow"
      >
        <div 
          className="terminal-wrapper"
          ref={terminalRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleTerminalClick}
        >
          {/* Custom Watch Reel Cursor */}
          <motion.div 
            className="watch-reel-cursor"
            style={{ x: cursorX, y: cursorY, willChange: 'transform' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <div className="reel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>
            <span className="reel-text">WATCH REEL</span>
          </motion.div>

          {/* Terminal Window */}
          <div className="hacker-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title mono">root@skillmerge:~</span>
            </div>

            <div className="terminal-body">
              <p className="terminal-prompt mono">
                <span className="prompt-arrow">➜</span> <span className="prompt-cmd">./execute_features.sh</span>
              </p>
              <p className="terminal-output mono loading-text">Loading Academy Specifications...</p>

              <div className="terminal-grid">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="terminal-feature-item">
                    <div className="feature-icon-wrapper">
                      <span className="star-icon">★</span>
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-desc">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="terminal-prompt mono mt-prompt">
                <span className="prompt-arrow" style={{ marginRight: '0.5rem' }}>➜</span>
                <span className="prompt-cmd">{typedText}</span>
                <span className="prompt-arrow blinking">_</span>
              </p>
            </div>
          </div>
        </div>
      </BorderGlow>

      {/* Embedded Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking inside modal */
            >
              <button className="close-video-btn mono" onClick={() => setIsVideoOpen(false)}>
                [X] CLOSE
              </button>
              <div className="iframe-wrapper">
                <video
                  key={isVideoOpen ? 'open' : 'closed'}
                  src="/Skillmerge.mp4"
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px', background: '#000', display: 'block' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
