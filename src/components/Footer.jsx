import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSrc from '../assets/skillmerge-logo.png';

const COURSE_LINKS = [
  { label: 'ADPT — Advanced Diploma in Purple Teaming', id: 'adpt' },
  { label: 'CCA — Certified Cybersecurity Associate', id: 'cca' },
  { label: 'CCS — Certified Cybersecurity Specialist', id: 'ccs' },
  { label: 'CDO — Certified Defensive Operator', id: 'cdo' },
  { label: 'CNA — Certified Network Associate', id: 'cna' },
  { label: 'CNS — Certified Network Specialist', id: 'cns' },
  { label: 'CNSE — Certified Network Security Engineer', id: 'cnse' },
  { label: 'Internship', id: 'internship' },
];

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Placement', to: '/placement' },
  { label: 'Hire From Us', to: '/hire' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{
      background: 'linear-gradient(to bottom, #070710 0%, #03020a 100%)',
      borderTop: '1px solid rgba(107, 33, 232, 0.2)',
      padding: '4rem 2rem 2rem',
    }}>
      {/* Top glow line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #6b21e8 30%, #c026d3 70%, transparent 100%)',
        marginBottom: '3.5rem',
        boxShadow: '0 0 20px rgba(107,33,232,0.4)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand Column */}
          <div>
            <img src={logoSrc} alt="SkillMerge" style={{ height: '48px', marginBottom: '1rem', objectFit: 'contain' }} />
            <p style={{ color: 'rgba(196,181,253,0.6)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '280px', marginBottom: '1.25rem' }}>
              We empower aspiring professionals with job-ready IT skills and certifications, bridging the gap between education and a successful tech career.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'FB', href: 'https://www.facebook.com/profile.php?id=61563365234885', color: '#3b82f6' },
                { label: 'IG', href: 'https://www.instagram.com/skillmergeindia/', color: '#ec4899' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', borderRadius: '8px',
                  border: `1px solid ${s.color}44`,
                  color: s.color, fontFamily: 'monospace', fontSize: '0.7rem', fontWeight: '700',
                  textDecoration: 'none', transition: 'all 0.2s',
                  background: `${s.color}11`,
                }}
                  onMouseEnter={e => e.currentTarget.style.background = `${s.color}25`}
                  onMouseLeave={e => e.currentTarget.style.background = `${s.color}11`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.12em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              {'// QUICK_LINKS'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {NAV_LINKS.map(link => (
                <li key={link.to}>
                  <Link to={link.to} style={{ color: 'rgba(196,181,253,0.65)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'monospace' }}
                    onMouseEnter={e => e.target.style.color = '#a78bfa'}
                    onMouseLeave={e => e.target.style.color = 'rgba(196,181,253,0.65)'}
                  >
                    {'> '}{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.12em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              {'// COURSES'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {COURSE_LINKS.map(c => (
                <li key={c.id}>
                  <button onClick={() => navigate(`/courses/${c.id}`)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'rgba(196,181,253,0.65)', fontSize: '0.82rem', fontFamily: 'monospace',
                    padding: 0, textAlign: 'left', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#c084fc'}
                    onMouseLeave={e => e.target.style.color = 'rgba(196,181,253,0.65)'}
                  >
                    {'> '}{c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.12em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              {'// CONTACT_US'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: '📞', label: '+91 99611 00003', href: 'tel:+919961100003' },
                { icon: '✉️', label: 'info@skillmergeacademy.com', href: 'mailto:info@skillmergeacademy.com' },
              ].map(item => (
                <a key={item.label} href={item.href} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'rgba(196,181,253,0.65)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'monospace' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(196,181,253,0.65)'}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
              <div style={{ color: 'rgba(196,181,253,0.55)', fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'monospace' }}>
                📍 Door No. 32/2496, 2nd Floor<br />
                Pocudyl Building, Palarivattom<br />
                Kochi, Kerala – 682025
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#4b5563' }}>
            © 2026 SkillMerge Hackers Academy · All Rights Reserved
          </span>
          <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#4b5563' }}>
            Kerala's First Practical Cybersecurity Institute
          </span>
        </div>
      </div>
    </footer>
  );
}
