import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import VerticalMarquee from '../components/VerticalMarquee';
import BorderGlowCard from '../components/BorderGlowCard';
import DecryptedText from '../components/DecryptedText';

const ALL_STORIES = [
  { src: '/success-stories/Abdulla-P-N.avif', name: 'Abdulla P N', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Abhirami-S-R.avif', name: 'Abhirami S R', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Adithyan-A-S.avif', name: 'Adithyan A S', placement: 'Placed at Spider Technosoft Pvt Ltd' },
  { src: '/success-stories/Adithyan-as.avif', name: 'Adithyan A S', placement: 'Placed at Spider Technosoft' },
  { src: '/success-stories/Ajanya-Aji.avif', name: 'Ajanya Aji', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Anaswar-K-Shine.avif', name: 'Anaswar K Shine', placement: 'Placed at Neural Networks' },
  { src: '/success-stories/Archana-k.avif', name: 'Archana K', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Arjun.avif', name: 'Arun', placement: 'Placed at IBM Banglore' },
  { src: '/success-stories/Athira-A-Raj.avif', name: 'Athira A Raj', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Binoy-Varghese.avif', name: 'Binoy Varghese', placement: 'Placed at Reliance Retail' },
  { src: '/success-stories/Devilekshmi-D.avif', name: 'Devilekshmi D', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/FATHIMA-HIBA.avif', name: 'Fathima Hiba C P', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Fathima-Sathar.avif', name: 'Fathima Sathar', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Gouri-L-S.avif', name: 'Gouri L S', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Harris.avif', name: 'Harris', placement: 'Placed at Bright Technologies' },
  { src: '/success-stories/Kailas-Nath.U.avif', name: 'Kailas Nath U', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Muhammed-Jasmal.avif', name: 'Muhammed Jasmal U K', placement: 'Placed at Neural Networks' },
  { src: '/success-stories/Nafeesa-Hidha.avif', name: 'Nafeesa Hidha', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Nivedhya-T-B.avif', name: 'Nivedhya T B', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Rosmy-Antu.avif', name: 'Rosmy Antu', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/SNEHA.C.avif', name: 'Sneha C', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Stiniya-PS.avif', name: 'Stiniya PS', placement: 'Placed at Aabasoft' },
  { src: '/success-stories/Surya.avif', name: 'Surya', placement: 'Placed at IBM Banglore' },
  { src: '/success-stories/SYED-ALI-SHAJAHAN.avif', name: 'Syed Ali Shajahan', placement: 'Placed at Spider Technosoft' },
  { src: '/success-stories/Varun-V-.avif', name: 'Varun V', placement: 'Placed at Spider Technosoft' },
];

const COMPANIES = [
  'Aabasoft', 'IBM Bangalore', 'Neural Networks', 'Spider Technosoft',
  'Bright Technologies', 'Reliance Retail', 'Spider Technosoft Pvt Ltd',
];

const TESTIMONIALS = [
  {
    name: 'Shihad Shabeer',
    text: "I'm studying ADPT Course in SMHA. I have recently won a scholarship exam and am studying the course for free. This is the best ethical hacking / cybersecurity institute to learn from. Our trainer is very supportive & friendly. They conduct events that create a true campus environment.",
    course: 'ADPT Student',
  },
  {
    name: 'Muhammed Anvarsha NK',
    text: 'The hands-on labs and real-world attack simulations at SkillMerge gave me skills I could immediately apply. The placement support was exceptional — I landed my role at a leading tech firm within weeks of graduating.',
    course: 'CCA Graduate',
  },
];

export default function Placement() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0a0a0a', overflowX: 'hidden', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', top: '5%', right: '-15%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(132,0,255,0.1) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* ── Hero ── */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '1rem' }}>{'// ALUMNI_SUCCESS'}</p>
            <h1 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              <DecryptedText
                text="Placement & Success"
                animateOn="view"
                sequential
                revealDirection="start"
                speed={40}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*"
                className="decrypted-revealed"
                encryptedClassName="decrypted-encrypted"
              />
            </h1>
            <p style={{ color: 'rgba(196,181,253,0.8)', fontSize: '1.1rem', maxWidth: '650px', lineHeight: 1.8, marginBottom: '2rem' }}>
              Discover the success stories of our students who have launched their careers with top companies in India and abroad.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}
          >
            {[
              { val: '25+', label: 'Students Placed' },
              { val: '7+', label: 'Partner Companies' },
              { val: '95%', label: 'Placement Rate' },
              { val: '100%', label: 'Practical Training' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.1 * i }}>
                <BorderGlowCard backgroundColor="rgba(10,0,20,0.8)" borderRadius={14} glowColor="270 80 70" colors={['#a78bfa', '#c026d3', '#6b21e8']} glowIntensity={1.1}>
                  <div style={{ padding: '1.5rem 2rem', minWidth: '150px' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, background: 'linear-gradient(135deg,#a78bfa,#c026d3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.val}</div>
                    <div style={{ color: 'rgba(196,181,253,0.6)', fontSize: '0.8rem', fontFamily: 'monospace', marginTop: '0.25rem' }}>{s.label.toUpperCase()}</div>
                  </div>
                </BorderGlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Success Stories Marquee ── */}
        <div style={{ width: '100%', background: 'linear-gradient(to bottom, #0f0019, #0a0a0a)', padding: '3rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 2rem' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// MEET_OUR_ALUMNI'}</p>
              <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '2rem' }}>Our Success Stories</h2>
            </motion.div>
          </div>
          <VerticalMarquee items={ALL_STORIES} />
        </div>

        {/* ── Hiring Companies ── */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// HIRING_PARTNERS'}</p>
            <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '3rem' }}>Companies Our Alumni Join</h2>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '5rem' }}>
            {COMPANIES.map((c, i) => (
              <motion.div key={c} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ background: 'rgba(107,33,232,0.15)', border: '1px solid rgba(107,33,232,0.4)', borderRadius: '100px', padding: '0.6rem 1.6rem', color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                {c}
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// TESTIMONIALS'}</p>
            <h2 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '3rem' }}>What Our Students Say</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <BorderGlowCard backgroundColor="rgba(10,0,20,0.8)" borderRadius={20} glowColor="270 80 70" colors={['#a78bfa', '#c026d3', '#818cf8']} glowIntensity={1.1} style={{ height: '100%' }}>
                  <div style={{ padding: '2.5rem', position: 'relative' }}>
                    <div style={{ fontSize: '3rem', color: 'rgba(167,139,250,0.3)', fontFamily: 'Georgia, serif', position: 'absolute', top: '1.5rem', left: '2rem', lineHeight: 1 }}>"</div>
                    <p style={{ color: 'rgba(196,181,253,0.85)', lineHeight: 1.8, marginBottom: '1.5rem', marginTop: '1rem', fontSize: '0.95rem' }}>{t.text}</p>
                    <div style={{ borderTop: '1px solid rgba(132,0,255,0.2)', paddingTop: '1rem' }}>
                      <div style={{ color: '#fff', fontWeight: 600 }}>{t.name}</div>
                      <div style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.8rem' }}>{t.course}</div>
                    </div>
                  </div>
                </BorderGlowCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BorderGlowCard backgroundColor="rgba(8,0,18,0.85)" borderRadius={24} glowColor="285 100 65" colors={['#c026d3', '#a78bfa', '#6b21e8']} glowIntensity={1.4} animated>
              <div style={{ textAlign: 'center', padding: '4rem' }}>
                <p className="mono" style={{ color: '#a78bfa', fontSize: '0.9rem', marginBottom: '1rem' }}>{'// START_YOUR_JOURNEY'}</p>
                <h3 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>Ready to be our next success story?</h3>
                <p style={{ color: 'rgba(196,181,253,0.7)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                  Join the hacker academy. Master real skills. Get placed in top companies.
                </p>
                <a href="https://skillmergeacademy.com/courses/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjcxNCIsInRvZ2dsZSI6ZmFsc2V9" target="_blank" rel="noopener noreferrer">
                  <button className="cyber-btn" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>ENROLL NOW →</button>
                </a>
              </div>
            </BorderGlowCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
