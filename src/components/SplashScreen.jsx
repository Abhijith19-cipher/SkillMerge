import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './SplashScreen.css';
import logoSrc from '../assets/skillmerge-logo.png';
import DecryptedText from './DecryptedText';
import { usePerformance } from '../context/PerformanceContext';

export default function SplashScreen({ onComplete }) {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const sweepRef = useRef(null);
  const textRef = useRef(null);
  const logoImgRef = useRef(null);
  const lineRef = useRef(null);

  const { isLiteMode, setLiteMode, hasChosen } = usePerformance();
  const [isVisible, setIsVisible] = useState(true);

  // If the user already made a choice previously, start the exit animation immediately.
  useEffect(() => {
    if (hasChosen) {
      if (isLiteMode) {
        playLiteExit();
      } else {
        playFullAnimation();
      }
    } else {
      // If no choice made yet, just fade in the logo and buttons gently.
      gsap.to(logoImgRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' });
      gsap.to(textRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
      gsap.to('.performance-buttons', { opacity: 1, y: 0, duration: 1, delay: 1 });
    }
  }, [hasChosen, isLiteMode]);

  const handleChoice = (lite) => {
    setLiteMode(lite);
    // The useEffect will trigger the correct exit animation now because hasChosen changes
  };

  const playLiteExit = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }
    });
  };

  const playFullAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }
    });

    if (!leftPanelRef.current || !rightPanelRef.current || !logoWrapperRef.current || !lineRef.current) return;

    gsap.set(lineRef.current, { strokeDasharray: 150, strokeDashoffset: 150, strokeWidth: 0.5, opacity: 1 });
    tl.to(logoImgRef.current, { opacity: 1, scale: 1, duration: 0.5 });
    
    if (textRef.current) {
      tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2");
    }
    
    tl.to('.performance-buttons', { opacity: 0, duration: 0.3 }, "-=0.8");
    tl.to(sweepRef.current, { left: "120%", top: "-20%", duration: 0.8, ease: "power2.inOut" }, "-=0.2");
    tl.to(logoWrapperRef.current, { scale: 1.08, filter: "drop-shadow(0px 0px 20px rgba(192, 38, 211, 0.8))", duration: 0.6, ease: "power2.out" });

    tl.to([logoWrapperRef.current, textRef.current], { opacity: 0, duration: 0.6, ease: "power2.inOut" }, "line");
    tl.to(lineRef.current, { strokeDashoffset: 0, duration: 0.8, ease: "power3.inOut" }, "line");
    tl.to(lineRef.current, { strokeWidth: 4, filter: "drop-shadow(0 0 4px rgba(192, 38, 211, 0.6))", duration: 0.4, ease: "power2.out" }, "expand");

    tl.to(leftPanelRef.current, { x: "-100%", y: "-100%", duration: 1.2, ease: "power4.inOut" }, "split+=0.1");
    tl.to(rightPanelRef.current, { x: "100%", y: "100%", duration: 1.2, ease: "power4.inOut" }, "split+=0.1");
    tl.to(lineRef.current, { opacity: 0, duration: 0.4 }, "split+=0.1");
  };

  if (!isVisible) return null;

  return (
    <div className="splash-screen" ref={containerRef}>
      <div className="split-panel left-panel" ref={leftPanelRef}>
        <div className="noise-overlay"></div>
      </div>
      <div className="split-panel right-panel" ref={rightPanelRef}>
        <div className="noise-overlay"></div>
      </div>

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="splash-line-svg">
        <line x1="100" y1="0" x2="0" y2="100" stroke="#c026d3" ref={lineRef} strokeDasharray="150" strokeDashoffset="150" strokeWidth="0.5" />
      </svg>

      <div className="splash-logo-wrapper" ref={logoWrapperRef}>
        <img src={logoSrc} alt="SkillMerge Logo" className="splash-img" ref={logoImgRef} style={{ opacity: 0, scale: 0.9 }} />
        <div className="splash-sweep" ref={sweepRef}></div>
      </div>

      <div ref={textRef} style={{ opacity: 0, transform: 'translateY(20px)', textAlign: 'center', zIndex: 10 }}>
        <h2 className="splash-welcome-text" style={{ margin: 0 }}>
          <DecryptedText
            text="WELCOME TO SKILLMERGE"
            animateOn="view"
            sequential
            revealDirection="start"
            speed={35}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
            className="splash-decrypted"
            encryptedClassName="splash-encrypted"
          />
        </h2>
        
        <div className="performance-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', opacity: 0, transform: 'translateY(10px)' }}>
          <button 
            onClick={() => handleChoice(false)}
            className="cyber-btn"
            style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
          >
            ENHANCED MODE
            <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.7, marginTop: '4px' }}>(3D & Animations)</span>
          </button>
          <button 
            onClick={() => handleChoice(true)}
            className="cyber-btn cyber-btn-outline"
            style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
          >
            LITE MODE
            <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.7, marginTop: '4px' }}>(Smooth & Fast)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
