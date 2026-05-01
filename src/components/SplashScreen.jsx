import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './SplashScreen.css';
import logoSrc from '../assets/skillmerge-logo.png';
import DecryptedText from './DecryptedText';

export default function SplashScreen({ onComplete }) {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const sweepRef = useRef(null);
  const textRef = useRef(null);
  const logoImgRef = useRef(null);
  const lineRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // On mobile: fast fade-out, skip the heavy split animation
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      gsap.to(logoImgRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }
      });
      return;
    }

    // Desktop: full split-panel animation
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
      tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2');
    }

    tl.to(sweepRef.current, { left: '120%', top: '-20%', duration: 0.8, ease: 'power2.inOut' }, '-=0.2');
    tl.to(logoWrapperRef.current, { scale: 1.08, filter: 'drop-shadow(0px 0px 20px rgba(192, 38, 211, 0.8))', duration: 0.6, ease: 'power2.out' });

    tl.to([logoWrapperRef.current, textRef.current], { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, 'line');
    tl.to(lineRef.current, { strokeDashoffset: 0, duration: 0.8, ease: 'power3.inOut' }, 'line');
    tl.to(lineRef.current, { strokeWidth: 4, filter: 'drop-shadow(0 0 4px rgba(192, 38, 211, 0.6))', duration: 0.4, ease: 'power2.out' }, 'expand');

    tl.to(leftPanelRef.current, { x: '-100%', y: '-100%', duration: 1.2, ease: 'power4.inOut' }, 'split+=0.1');
    tl.to(rightPanelRef.current, { x: '100%', y: '100%', duration: 1.2, ease: 'power4.inOut' }, 'split+=0.1');
    tl.to(lineRef.current, { opacity: 0, duration: 0.4 }, 'split+=0.1');
  }, []);

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
      </div>
    </div>
  );
}
