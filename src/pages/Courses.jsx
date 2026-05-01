import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { COURSE_DATA } from '../data/courseData';
import CourseReviewsSection from '../components/CourseReviewsSection';
import MagicBento from '../components/MagicBento';
import Lanyard from '../components/Lanyard';

export default function Courses() {
  const navigate = useNavigate();
  const courses = Object.values(COURSE_DATA);

  const bentoItems = courses.map(c => ({
    color: 'rgba(15, 0, 32, 0.6)',
    title: c.abbr ? `${c.title} (${c.abbr})` : c.title,
    description: c.overview,
    label: c.tag,
    tagColor: c.color,
    courseId: c.id,
    duration: c.duration,
    hours: c.hours,
    img: c.img,
    onClick: () => navigate(`/courses/${c.id}`)
  }));

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0a0a0a', overflowX: 'hidden' }}>
      
      {/* ── Hero Banner with Lanyard ── */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(132,0,255,0.18) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(192,38,211,0.1) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 10, padding: '0 4rem', flex: '0 0 50%', maxWidth: '580px' }}
        >
          <p className="section-tag mono" style={{ marginBottom: '1rem', color: '#a78bfa' }}>{'// SKILLMERGE_ACADEMY'}</p>
          <h1 className="neon-text" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Become a<br />
            <span style={{ color: '#c026d3' }}>Skillmergian</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(196, 181, 253, 0.75)', lineHeight: 1.7, maxWidth: '420px', marginBottom: '2.5rem' }}>
            Join the elite hacker academy. Master offensive and defensive cybersecurity through
            industry-led programs built for real-world impact.
          </p>

          {/* Scroll down indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            onClick={() => document.getElementById('course-grid')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              gap: '0.4rem', cursor: 'pointer', color: '#6b7280',
              fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.08em'
            }}
          >
            <span>↓ scroll down to explore</span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #6b21e8, transparent)', marginLeft: '5px' }} />
          </motion.div>
        </motion.div>

        {/* Right: Big Lanyard — z-index 5, below menu (z-index ~100) */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '55vw', height: '100vh', zIndex: 5, minWidth: '300px' }}>
          <Lanyard position={[0, 0, 20]} gravity={[0, -25, 0]} fov={18} />
        </div>
      </div>

      {/* ── Course Grid ── */}
      <div id="course-grid" style={{ position: 'relative', zIndex: 5, padding: '2rem 2rem 4rem', background: 'linear-gradient(to bottom, #0a0a0a 0%, #0f0019 100%)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem', textAlign: 'center' }}
          >
            <p className="section-tag mono">{'// CERTIFICATION_TRACKS'}</p>
            <h2 className="neon-text" style={{ marginTop: '0.5rem' }}>All Programs</h2>
          </motion.div>

          {/* Magic Bento Grid */}
          <MagicBento 
            items={bentoItems}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>

      {/* ── Google Reviews + People's Choice ── */}
      <CourseReviewsSection />
    </div>
  );
}
