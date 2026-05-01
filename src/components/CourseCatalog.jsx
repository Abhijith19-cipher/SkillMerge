import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardSwap, { Card } from './CardSwap';
import EnrollModal from './EnrollModal';
import './CourseCatalog.css';

export const courses = [
  {
    id: '01',
    title: 'INTERNSHIP',
    abbr: '',
    desc: 'Real-world practical experience to jumpstart your cybersecurity career.',
    tag: 'Entry Level',
    color: '#22d3ee',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/INTERNSHIP.avif'
  },
  {
    id: '02',
    title: 'Advanced Diploma in Purple Teaming',
    abbr: 'ADPT',
    desc: 'Master both offensive (Red) and defensive (Blue) tactics.',
    tag: 'Advanced',
    color: '#f87171',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/Advance-Diploma-in-Purple-Teaming.avif'
  },
  {
    id: '03',
    title: 'Certified Cyber Security Associate',
    abbr: 'CCA',
    desc: 'Fundamental knowledge and practical skills for aspiring professionals.',
    tag: 'Beginner',
    color: '#4ade80',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/Certified-CyberSecurity-Associate.avif'
  },
  {
    id: '04',
    title: 'Certified Cyber Security Specialist',
    abbr: 'CCS',
    desc: 'Deep dive into specialized cybersecurity domains and advanced threat mitigation.',
    tag: 'Intermediate',
    color: '#facc15',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/Certified-CyberSecurity-Specialist.avif'
  },
  {
    id: '05',
    title: 'Certified Defensive Operator',
    abbr: 'CDO',
    desc: 'Focus on network defense, threat hunting, and incident response.',
    tag: 'Intermediate',
    color: '#a78bfa',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2026/01/CDO.avif'
  },
  {
    id: '06',
    title: 'Certified Network Associate',
    abbr: 'CNA',
    desc: 'Build a strong foundation in networking concepts and infrastructure.',
    tag: 'Beginner',
    color: '#4ade80',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/Certified-Network-Associate.avif'
  },
  {
    id: '07',
    title: 'Certified Network Specialist',
    abbr: 'CNS',
    desc: 'Advanced network administration, troubleshooting, and optimization.',
    tag: 'Intermediate',
    color: '#facc15',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/Certified-Network-Specialist.avif'
  },
  {
    id: '08',
    title: 'Certified Network Security Engineer',
    abbr: 'CNSE',
    desc: 'Design, implement, and manage robust network security architectures.',
    tag: 'Advanced',
    color: '#f87171',
    img: 'https://skillmergeacademy.com/wp-content/uploads/2025/12/Certified-Network-Security-Engineer.avif'
  },
];


export default function CourseCatalog() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  function openEnroll(course) {
    setSelectedCourse(course.abbr ? `${course.title} (${course.abbr})` : course.title);
    setEnrollOpen(true);
  }
  return (
    <section id="courses" className="catalog-section" style={{ display: 'flex', flexDirection: 'row', padding: '6rem 2rem', alignItems: 'center' }}>
      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} preselectedCourse={selectedCourse} />
      <div className="catalog-container" style={{ display: 'flex', width: '100%', maxWidth: '1200px', margin: '0 auto', gap: '4rem', alignItems: 'center' }}>
        {/* Left Side: Header */}
        <div className="catalog-left" style={{ flex: '1' }}>
          <div className="catalog-header">
            <h2 className="catalog-title neon-text">Our Programs</h2>
            <p className="catalog-subtitle" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Explore our diverse range of cybersecurity and IT courses designed to jumpstart your career. 
              Swipe through our premier certification tracks.
            </p>
            <Link to="/courses">
              <button className="cyber-btn mt-8" style={{ marginTop: '2rem' }}>
                Explore All Courses
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: CardSwap */}
        <div className="catalog-right" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="card-swap-wrapper" style={{ position: 'relative', width: '360px', height: '480px', margin: '0 auto' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
              width={360}
              height={460}
              easing="elastic"
            >
              {courses.map((course) => (
                <Card key={course.id} customClass="course-card">
                  <div style={{ 
                    height: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    background: `linear-gradient(160deg, rgba(15,0,32,0.95) 0%, rgba(30,0,60,0.9) 100%)`,
                    border: `1.5px solid ${course.color}44`,
                    borderTop: `3px solid ${course.color}`,
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxSizing: 'border-box'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                      <span style={{ color: course.color, fontFamily: 'monospace', fontSize: '0.85rem', opacity: 0.7 }}>{course.id}</span>
                      <span style={{ color: course.color, border: `1px solid ${course.color}55`, padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                        {course.tag}
                      </span>
                    </div>
                    
                    <div style={{ 
                      background: `url(${course.img}) center/cover no-repeat`,
                      border: `1px solid ${course.color}33`,
                      height: '160px',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      flexShrink: 0
                    }} />

                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff', lineHeight: 1.3 }}>
                      {course.title}{course.abbr && <span style={{ color: course.color, fontSize: '0.9rem' }}> ({course.abbr})</span>}
                    </h3>
                    <p style={{ color: 'rgba(196,181,253,0.7)', fontSize: '0.85rem', lineHeight: 1.5, flex: 1 }}>{course.desc}</p>
                    
                    <button
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        background: `${course.color}22`,
                        border: `1px solid ${course.color}66`,
                        borderRadius: '6px',
                        color: course.color,
                        fontSize: '0.8rem',
                        fontFamily: 'monospace',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'all 0.2s'
                      }}
                      onClick={() => openEnroll(course)}
                    >Enroll Now →</button>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
