import { useEffect, useRef, useState, useCallback } from 'react';
import './Carousel.css';

/* ─── Course data for the carousel cards ─── */
const ITEMS = [
  {
    title: 'INTERNSHIP',
    description: 'Real-world practical experience to jumpstart your cybersecurity career alongside senior professionals.',
    tag: 'Entry Level',
    tagColor: '#22d3ee',
    icon: '🛡️',
  },
  {
    title: 'ADPT',
    description: 'Advanced Diploma in Purple Teaming — master both Red & Blue tactics for full-spectrum security expertise.',
    tag: 'Advanced',
    tagColor: '#f87171',
    icon: '⚔️',
  },
  {
    title: 'CCA',
    description: 'Certified Cyber Security Associate — fundamental knowledge & practical skills to enter the industry.',
    tag: 'Beginner',
    tagColor: '#4ade80',
    icon: '🔐',
  },
  {
    title: 'CCS',
    description: 'Certified Cyber Security Specialist — advanced threat mitigation strategies used by top-tier security teams.',
    tag: 'Intermediate',
    tagColor: '#facc15',
    icon: '🔍',
  },
  {
    title: 'CDO',
    description: 'Certified Defensive Operator — threat hunting, incident response, and network defense mastery.',
    tag: 'Intermediate',
    tagColor: '#a78bfa',
    icon: '🛡',
  },
  {
    title: 'CNA',
    description: 'Certified Network Associate — strong foundation in networking concepts essential for any security professional.',
    tag: 'Beginner',
    tagColor: '#4ade80',
    icon: '🌐',
  },
  {
    title: 'CNS',
    description: 'Certified Network Specialist — advanced network administration, troubleshooting and optimization.',
    tag: 'Intermediate',
    tagColor: '#facc15',
    icon: '📡',
  },
  {
    title: 'CNSE',
    description: 'Certified Network Security Engineer — design and manage robust network security architectures.',
    tag: 'Advanced',
    tagColor: '#f87171',
    icon: '⚡',
  },
];

export default function Carousel({
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = false,
  round = false,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const itemWidth = baseWidth;
  const gap = 16;
  const totalWidth = itemWidth + gap;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(null);

  const count = ITEMS.length;

  const clampIndex = useCallback(
    (idx) => {
      if (loop) return ((idx % count) + count) % count;
      return Math.max(0, Math.min(idx, count - 1));
    },
    [count, loop]
  );

  const goTo = useCallback(
    (idx) => {
      const clamped = clampIndex(idx);
      setCurrentIndex(clamped);
      setTranslateX(-clamped * totalWidth);
    },
    [clampIndex, totalWidth]
  );

  /* Autoplay */
  useEffect(() => {
    if (!autoplay) return;
    if (pauseOnHover && isHovered) return;
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = loop ? (prev + 1) % count : Math.min(prev + 1, count - 1);
        setTranslateX(-next * totalWidth);
        return next;
      });
    }, autoplayDelay);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, autoplayDelay, pauseOnHover, isHovered, loop, count, totalWidth]);

  /* Drag — mouse */
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };
  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = totalWidth / 4;
    if (dragOffset < -threshold) goTo(currentIndex + 1);
    else if (dragOffset > threshold) goTo(currentIndex - 1);
    else goTo(currentIndex);
    setDragOffset(0);
  };

  /* Drag — touch */
  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };
  const onTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - startX);
  };
  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = totalWidth / 4;
    if (dragOffset < -threshold) goTo(currentIndex + 1);
    else if (dragOffset > threshold) goTo(currentIndex - 1);
    else goTo(currentIndex);
    setDragOffset(0);
  };

  const finalTranslate = translateX + dragOffset;

  return (
    <div
      className={`carousel-container${round ? ' round' : ''}`}
      ref={containerRef}
      style={{ width: itemWidth + 32, userSelect: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); onMouseUp(); }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          transform: `translateX(${finalTranslate}px)`,
          transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
          gap: `${gap}px`,
        }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={`carousel-item${round ? ' round' : ''}`}
            style={{ width: itemWidth, minHeight: round ? itemWidth : 340 }}
          >
            {/* Header */}
            <div className={`carousel-item-header${round ? ' round' : ''}`}>
              <div className="carousel-icon-container">
                <span style={{ fontSize: 16 }}>{item.icon}</span>
              </div>
            </div>

            {/* Content */}
            <div className="carousel-item-content">
              <span
                className="carousel-item-tag"
                style={{ color: item.tagColor, borderColor: `${item.tagColor}55` }}
              >
                {item.tag}
              </span>
              <div className="carousel-item-title">{item.title}</div>
              <div className="carousel-item-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className={`carousel-indicators-container${round ? ' round' : ''}`}>
        <div className="carousel-indicators">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              className={`carousel-indicator ${i === currentIndex ? 'active' : 'inactive'}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
