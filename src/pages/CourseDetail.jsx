import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { COURSE_DATA } from '../data/courseData';
import EnrollModal from '../components/EnrollModal';
import './CourseDetail.css';

function TerminalBlock({ course }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const termRef = useRef(null);

  const lines = [
    { text: `Loading details for ${course.abbr}...`, color: '#6b7280', delay: 0 },
    { text: `Success: Course information retrieved.`, color: '#4ade80', delay: 400 },
    { text: ``, delay: 600 },
    { text: `--- ABOUT THIS PROGRAM ---`, color: course.color || '#a78bfa', delay: 800 },
    { text: course.overview, color: '#f9fafb', delay: 1000, wrap: true },
    { text: ``, delay: 1200 },
    { text: `--- QUICK FACTS ---`, color: course.color || '#a78bfa', delay: 1300 },
    { text: `• Duration   : ${course.duration}`, color: '#d1d5db', delay: 1500 },
    { text: `• Level      : ${course.tag}`, color: '#d1d5db', delay: 1700 },
    { text: `• Format     : ${course.mode.join(' and ')}`, color: '#d1d5db', delay: 1900 },
    { text: `• Total Time : ${course.hours}`, color: '#d1d5db', delay: 2100 },
    { text: ``, delay: 2200 },
    { text: `--- WHAT YOU WILL LEARN ---`, color: course.color || '#a78bfa', delay: 2300 },
    ...course.curriculum.map((item, i) => ({
      text: `• ${item}`,
      color: '#f9fafb',
      delay: 2500 + i * 150
    })),
    { text: ``, delay: 2500 + course.curriculum.length * 150 },
    { text: `--- INCLUDED BENEFITS ---`, color: course.color || '#a78bfa', delay: 2500 + course.curriculum.length * 150 + 200 },
    ...course.includes.map((item, i) => ({
      text: `★ ${item}`,
      color: '#4ade80',
      delay: 2500 + course.curriculum.length * 150 + 400 + i * 150
    })),
    { text: ``, delay: 2500 + course.curriculum.length * 150 + 400 + course.includes.length * 150 + 200 },
    { text: `Admissions open. Click "ENROLL NOW" below to apply.`, color: '#a78bfa', delay: 2500 + course.curriculum.length * 150 + 400 + course.includes.length * 150 + 400 },
  ];

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLine(0);
  }, [course.id]);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const timer = setTimeout(() => {
      setDisplayedLines(prev => [...prev, lines[currentLine]]);
      setCurrentLine(prev => prev + 1);
      if (termRef.current) {
        termRef.current.scrollTop = termRef.current.scrollHeight;
      }
    }, lines[currentLine].delay - (currentLine > 0 ? lines[currentLine - 1].delay : 0));
    return () => clearTimeout(timer);
  }, [currentLine, lines]);

  return (
    <div className="terminal-block" ref={termRef}>
      <div className="terminal-header">
        <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
        <span className="t-title mono">skillmerge — course_terminal</span>
      </div>
      <div className="terminal-body">
        {displayedLines.map((line, i) => (
          <div key={i} className="t-line" style={{ color: line.color || '#f9fafb', whiteSpace: line.wrap ? 'pre-wrap' : 'nowrap' }}>
            {line.text}
          </div>
        ))}
        {currentLine < lines.length && (
          <div className="t-line" style={{ color: '#a78bfa' }}>
            <span className="t-cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = COURSE_DATA[courseId];
  const [enrollOpen, setEnrollOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: '#0a0a0a', color: '#fff' }}>
        <p className="mono" style={{ color: '#f87171', fontSize: '1.2rem' }}>{`> ERROR: Course not found`}</p>
        <Link to="/courses"><button className="cyber-btn">← Back to Courses</button></Link>
      </div>
    );
  }

  const courseName = course.abbr ? `${course.title} (${course.abbr})` : course.title;

  return (
    <div className="course-detail-page">
      {/* Enrollment Modal */}
      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} preselectedCourse={courseName} />

      {/* Ambient */}
      <div className="cd-ambient" style={{ background: `radial-gradient(circle, ${course.color}22 0%, transparent 65%)` }} />

      <div className="cd-inner">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/courses" className="cd-back mono">← Back to all courses</Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="cd-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="cd-tag mono" style={{ borderColor: course.color, color: course.color }}>{course.tag}</span>
            <span className="cd-tag mono" style={{ borderColor: '#374151', color: '#9ca3af' }}>{course.duration}</span>
            {course.mode.map(m => <span key={m} className="cd-tag mono" style={{ borderColor: '#374151', color: '#6b7280' }}>{m}</span>)}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            <span style={{ color: course.color }}>[{course.abbr}]</span> {course.title}
          </h1>
          <p style={{ color: 'rgba(196,181,253,0.7)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.7 }}>{course.overview}</p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TerminalBlock key={courseId} course={course} />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="cd-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <button
            className="cyber-btn"
            style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            onClick={() => setEnrollOpen(true)}
          >
            ENROLL NOW →
          </button>
          <Link to="/courses">
            <button className="cyber-btn cyber-btn-outline">
              BROWSE ALL COURSES
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
