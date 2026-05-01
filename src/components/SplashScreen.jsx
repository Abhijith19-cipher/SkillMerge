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
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    try {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }
      });

      if (!leftPanelRef.current || !rightPanelRef.current || !logoWrapperRef.current || !lineRef.current) {
        return;
      }

      // Initial setup for the diagonal line
      gsap.set(lineRef.current, { strokeDasharray: 150, strokeDashoffset: 150, strokeWidth: 0.5, opacity: 1 });

      // 1. Initial fade in for the logo
      tl.fromTo(logoImgRef.current, { opacity: 0, scale: 0.9 }, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out"
      });

      // 1.5. Fade in and slide up the welcome text
      if (textRef.current) {
        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)"
        }, "-=0.8");
      }

      // 2. Diagonal light sweep across the logo
      tl.to(sweepRef.current, {
        left: "120%",
        top: "-20%",
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.2");

      // 3. Logo scales slightly and glows
      tl.to(logoWrapperRef.current, {
        scale: 1.08,
        filter: "drop-shadow(0px 0px 20px rgba(192, 38, 211, 0.8))",
        duration: 0.6,
        ease: "power2.out"
      });

      // Text gets an extra glow pulse
      if (textRef.current) {
        tl.to(textRef.current, {
          textShadow: "0 0 10px rgba(192, 38, 211, 0.8), 0 0 20px rgba(192, 38, 211, 0.6)",
          duration: 0.4,
          yoyo: true,
          repeat: 1
        }, "-=0.6");
      }

      // 4. Fade out logo and text WHILE the line is drawing
      tl.to([logoWrapperRef.current, textRef.current], {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "line");

      // Draw the diagonal line
      tl.to(lineRef.current, { strokeDashoffset: 0, duration: 0.8, ease: "power3.inOut" }, "line");
      
      // Expand the line thickness slightly (low glow)
      tl.to(lineRef.current, { strokeWidth: 4, filter: "drop-shadow(0 0 4px rgba(192, 38, 211, 0.6))", duration: 0.4, ease: "power2.out" }, "expand");

      // Hold briefly
      tl.to({}, { duration: 0.2 });

      // 5. Split the screen diagonally
      tl.to(leftPanelRef.current, {
        x: "-100%",
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut"
      }, "split+=0.1");

      tl.to(rightPanelRef.current, {
        x: "100%",
        y: "100%",
        duration: 1.2,
        ease: "power4.inOut"
      }, "split+=0.1");
      
      // Line fades out during split
      tl.to(lineRef.current, {
        opacity: 0,
        duration: 0.4
      }, "split+=0.1");

    } catch (err) {
      setErrorMsg(err.toString() + "\n" + err.stack);
    }
  }, [onComplete]);

  if (errorMsg) return <div style={{ color: 'red', zIndex: 99999, position: 'absolute' }}><pre>{errorMsg}</pre></div>;

  if (!isVisible) return null;

  return (
    <div className="splash-screen" ref={containerRef}>
      {/* Two panels for the background transition (diagonal split) */}
      <div className="split-panel left-panel" ref={leftPanelRef}>
        <div className="noise-overlay"></div>
      </div>
      <div className="split-panel right-panel" ref={rightPanelRef}>
        <div className="noise-overlay"></div>
      </div>

      {/* Diagonal Line SVG Overlay */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="splash-line-svg">
        <line x1="100" y1="0" x2="0" y2="100" stroke="#c026d3" ref={lineRef} />
      </svg>

      {/* Centered Logo Container */}
      <div className="splash-logo-wrapper" ref={logoWrapperRef}>
        <img src={logoSrc} alt="SkillMerge Logo" className="splash-img" ref={logoImgRef} />
        {/* The Light Sweep Div overlaid on the logo */}
        <div className="splash-sweep" ref={sweepRef}></div>
      </div>

      {/* Welcome Text */}
      <h2 className="splash-welcome-text" ref={textRef}>
        <DecryptedText
          text="WELCOME TO SKILLMERGE HACKERS ACADEMY"
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
  );
}
