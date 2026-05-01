import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import BorderGlowCard from '../components/BorderGlowCard';
import DecryptedText from '../components/DecryptedText';

const WHY_HIRE = [
  { icon: '🛡️', title: 'Battle-Tested Talent', desc: 'Our graduates have logged 400+ hours of real attack/defense labs — they walk in ready to contribute from day one, not after months of on-boarding.' },
  { icon: '📜', title: 'Certified & Verified', desc: 'All candidates hold industry-recognised certifications (Skill India, NASSCOM, CISCO, IBM, Microsoft) so your compliance team can rest easy.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Our placement cell pre-screens every candidate for technical aptitude, communication, and culture fit — saving you weeks of recruiting overhead.' },
  { icon: '🔒', title: 'Specialized Domains', desc: 'From SOC analysts and ethical hackers to network security engineers — we train across 5 IT security domains to meet diverse hiring needs.' },
];

const PROCESS = [
  { step: '01', title: 'Share Requirements', desc: 'Tell us your team size, required skills, experience level, and timeline.' },
  { step: '02', title: 'We Shortlist', desc: 'Our placement cell handpicks graduates who match your exact profile from our verified pool.' },
  { step: '03', title: 'Interviews', desc: 'Conduct technical rounds at your convenience — in-person, online, or via our campus.' },
  { step: '04', title: 'Hire & Onboard', desc: 'Select candidates, and we handle all paperwork. Simple, fast, zero fees.' },
];

const DOMAINS = [
  { label: 'Ethical Hacking & VAPT', color: '#f87171' },
  { label: 'SOC Analysis', color: '#a78bfa' },
  { label: 'Incident Response', color: '#22d3ee' },
  { label: 'Network Security', color: '#4ade80' },
  { label: 'Digital Forensics', color: '#facc15' },
  { label: 'Cloud Security', color: '#f472b6' },
  { label: 'Penetration Testing', color: '#fb923c' },
  { label: 'Threat Intelligence', color: '#818cf8' },
];

export default function HireUs() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0a0a0a', overflowX: 'hidden', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', top: '5%', right: '-15%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(132,0,255,0.1) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(192,38,211,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 8rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '1rem' }}>{'// RECRUIT_TALENT'}</p>
          <h1 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            <DecryptedText
              text="Hire From Us"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={40}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*"
              className="decrypted-revealed"
              encryptedClassName="decrypted-encrypted"
            />
          </h1>
          <p style={{ color: 'rgba(196,181,253,0.8)', fontSize: '1.15rem', maxWidth: '680px', lineHeight: 1.8, marginBottom: '3rem' }}>
            In an era of evolving digital threats, your organisation needs a defence team it can trust. We provide a direct pipeline to highly trained cybersecurity professionals equipped with the latest skills in threat mitigation, network defence, and compliance. Our candidates are vetted, certified, and ready to protect your infrastructure from day one.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <a href="mailto:info@skillmergeacademy.com" className="cyber-btn" style={{ textDecoration: 'none', padding: '0.9rem 2.5rem' }}>📧 Contact Placement Cell</a>
            <a href="tel:+919961100003" className="cyber-btn cyber-btn-outline" style={{ textDecoration: 'none', padding: '0.9rem 2.5rem' }}>📞 +91 99611 00003</a>
          </div>
        </motion.div>

        {/* ── Why Hire ── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// WHY_HIRE_FROM_US'}</p>
          <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '3rem' }}>Why Hire Our Graduates?</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {WHY_HIRE.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <BorderGlowCard backgroundColor="rgba(10,0,20,0.75)" borderRadius={20} glowColor="270 80 70" colors={['#a78bfa', '#c026d3', '#6b21e8']} glowIntensity={1.1} style={{ height: '100%' }}>
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(196,181,253,0.75)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{w.desc}</p>
                </div>
              </BorderGlowCard>
            </motion.div>
          ))}
        </div>

        {/* ── Talent Domains ── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// AVAILABLE_TALENT'}</p>
          <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '2rem' }}>Domains We Cover</h2>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '6rem' }}>
          {DOMAINS.map((d, i) => (
            <motion.div key={d.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ border: `1px solid ${d.color}55`, background: `${d.color}15`, borderRadius: '100px', padding: '0.65rem 1.6rem', color: d.color, fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {d.label}
            </motion.div>
          ))}
        </div>

        {/* ── Process ── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// HOW_IT_WORKS'}</p>
          <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '3rem' }}>Simple 4-Step Process</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {PROCESS.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>
              <BorderGlowCard backgroundColor="rgba(10,0,20,0.75)" borderRadius={20} glowColor="275 85 68" colors={['#818cf8', '#a78bfa', '#c026d3']} glowIntensity={1.0} style={{ height: '100%' }}>
                <div style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(107,33,232,0.2)', position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'monospace', lineHeight: 1 }}>{p.step}</div>
                  <h3 style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '0.08em' }}>STEP {p.step}</h3>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{p.title}</h4>
                  <p style={{ color: 'rgba(196,181,253,0.75)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{p.desc}</p>
                </div>
              </BorderGlowCard>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <BorderGlowCard backgroundColor="rgba(8,0,18,0.85)" borderRadius={24} glowColor="285 100 65" colors={['#c026d3', '#a78bfa', '#6b21e8']} glowIntensity={1.4} animated>
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              <p className="mono" style={{ color: '#a78bfa', fontSize: '0.9rem', marginBottom: '1rem' }}>{'// READY_TO_BUILD_YOUR_TEAM'}</p>
              <h3 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Build your security team today</h3>
              <p style={{ color: 'rgba(196,181,253,0.75)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Reach out to our placement cell and tell us what you need. We'll match you with the right talent from our certified, job-ready pool.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="mailto:info@skillmergeacademy.com" className="cyber-btn" style={{ textDecoration: 'none', padding: '0.9rem 2.5rem' }}>📧 Email Us Now</a>
                <a href="tel:+919961100003" className="cyber-btn cyber-btn-outline" style={{ textDecoration: 'none', padding: '0.9rem 2.5rem' }}>📞 Call Us</a>
              </div>
            </div>
          </BorderGlowCard>
        </motion.div>
      </div>
    </div>
  );
}
