import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Stepper, { Step } from '../components/Stepper';
import BorderGlowCard from '../components/BorderGlowCard';
import DecryptedText from '../components/DecryptedText';

const STATS = [
  { value: '500+', label: 'Students Trained' },
  { value: '95%', label: 'Placement Rate' },
  { value: '5', label: 'IT Domains Covered' },
  { value: '430+', label: 'Hours of Training' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0a0a0a', overflowX: 'hidden', paddingTop: '100px' }}>

      {/* Ambient glows */}
      <div style={{ position: 'fixed', top: '10%', right: '-15%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(132,0,255,0.12) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(192,38,211,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />


      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 8rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '1rem' }}>{'// OUR_MISSION'}</p>
          <h1 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            <DecryptedText
              text="About SkillMerge"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={40}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*"
              className="decrypted-revealed"
              encryptedClassName="decrypted-encrypted"
            />
          </h1>
          <p style={{ color: 'rgba(196,181,253,0.8)', fontSize: '1.15rem', maxWidth: '650px', lineHeight: 1.8, marginBottom: '4rem' }}>
            We are Kerala's first fully practical cybersecurity training institute, integrating cybersecurity expertise across the top 5 IT fields. Our mission: to bridge the gap between education and a successful tech career.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <BorderGlowCard
                backgroundColor="rgba(10,0,20,0.8)"
                borderRadius={16}
                glowColor="270 80 70"
                colors={['#a78bfa', '#c026d3', '#6b21e8']}
                glowIntensity={1.2}
                style={{ height: '100%' }}
              >
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #a78bfa, #c026d3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div style={{ color: 'rgba(196,181,253,0.7)', fontSize: '0.85rem', fontFamily: 'monospace', marginTop: '0.5rem', letterSpacing: '0.05em' }}>{s.label.toUpperCase()}</div>
                </div>
              </BorderGlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Why SkillMerge — Stepper ── */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '6rem' }}
        >
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// WHY_SKILLMERGE'}</p>
          <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '3rem' }}>What Sets Us Apart</h2>

          <Stepper
            initialStep={1}
            backButtonText="← Previous"
            nextButtonText="Next →"
            onFinalStepCompleted={() => {}}
          >
            <Step>
              <span className="stepper-step-tag">// STEP_01</span>
              <span className="stepper-step-icon">🏆</span>
              <h2>Kerala's First Hacker Academy</h2>
              <p>SkillMerge is Kerala's first fully practical cybersecurity training institute — the first academy to integrate cybersecurity expertise across the top 5 IT fields.</p>
              <ul>
                <li>First in Kerala to combine Cyber + Network + Cloud under one roof</li>
                <li>Pioneering hands-on training methodology since inception</li>
                <li>Recognized by Skill India &amp; NASSCOM as a model institute</li>
              </ul>
            </Step>
            <Step>
              <span className="stepper-step-tag">// STEP_02</span>
              <span className="stepper-step-icon">🎯</span>
              <h2>Practical-First Training</h2>
              <p>Every module is built around real-world attack/defense labs, live industry tools, and actual breach scenarios — zero fluff, only skills that matter on the job from day one.</p>
              <ul>
                <li>430+ hours of hands-on lab time across all programs</li>
                <li>Kali Linux, Metasploit, Burp Suite, Splunk &amp; more</li>
                <li>Live VAPT engagements on real infrastructure</li>
              </ul>
            </Step>
            <Step>
              <span className="stepper-step-tag">// STEP_03</span>
              <span className="stepper-step-icon">🤝</span>
              <h2>Placement Support</h2>
              <p>From resume building to mock interviews and corporate tie-ups, our dedicated placement cell works with top companies to get you hired before you even graduate.</p>
              <ul>
                <li>95%+ placement rate across all batches</li>
                <li>Partnerships with Aabasoft, IBM, Neural Networks &amp; more</li>
                <li>Lifetime alumni access to job postings and referrals</li>
              </ul>
            </Step>
            <Step>
              <span className="stepper-step-tag">// STEP_04</span>
              <span className="stepper-step-icon">📜</span>
              <h2>Globally Recognized Certifications</h2>
              <p>Courses certified by Skill India, NASSCOM, Microsoft, IBM, and CISCO — credentials that open doors to opportunities worldwide, not just locally.</p>
              <ul>
                <li>Government-backed Skill India certification</li>
                <li>Microsoft &amp; IBM technology partner programs</li>
                <li>CISCO Networking Academy alignment</li>
              </ul>
            </Step>
          </Stepper>
        </motion.div>

        {/* ── Address ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <BorderGlowCard
            backgroundColor="rgba(10,0,20,0.8)"
            borderRadius={20}
            glowColor="280 90 65"
            colors={['#c026d3', '#a78bfa', '#6b21e8']}
            glowIntensity={1.3}
            animated
          >
            <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div>
                <p className="mono" style={{ color: '#a78bfa', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{'// HEADQUARTERS'}</p>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>SkillMerge Hackers Academy</h3>
                <p style={{ color: 'rgba(196,181,253,0.75)', lineHeight: 1.8, margin: 0 }}>
                  Door No. 32/2496, 2nd Floor, Pocudyl Building,<br />
                  Opposite Nilambur Furniture, Palarivattom,<br />
                  Kochi, Kerala – 682025
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+919961100003" className="cyber-btn" style={{ textDecoration: 'none', padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}>📞 +91 99611 00003</a>
                <a href="mailto:info@skillmergeacademy.com" className="cyber-btn cyber-btn-outline" style={{ textDecoration: 'none', padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}>✉ info@skillmergeacademy.com</a>
              </div>
            </div>
          </BorderGlowCard>
        </motion.div>

      </div>
    </div>
  );
}
