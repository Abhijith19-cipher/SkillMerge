import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COURSES = [
  'Advanced Diploma in Purple Teaming (ADPT)',
  'Certified Cyber Security Associate (CCA)',
  'Certified Cyber Security Specialist (CCS)',
  'Certified Defensive Operator (CDO)',
  'Certified Network Associate (CNA)',
  'Certified Network Specialist (CNS)',
  'Certified Network Security Engineer (CNSE)',
  'Internship Program',
];

const BOOT_LINES = [
  { text: '> INITIALIZING SECURE ADMISSION PORTAL...', color: '#6b7280', delay: 0 },
  { text: '> ENCRYPTION LAYER: AES-256 ✓', color: '#4ade80', delay: 350 },
  { text: '> CONNECTING TO SKILLMERGE SERVER...', color: '#6b7280', delay: 650 },
  { text: '> CONNECTION ESTABLISHED ✓', color: '#4ade80', delay: 950 },
  { text: '> FORM READY — FILL IN YOUR DETAILS BELOW', color: '#a78bfa', delay: 1200 },
];

function BootSequence({ onDone }) {
  const [lines, setLines] = useState([]);
  const idx = useRef(0);

  useEffect(() => {
    const run = () => {
      if (idx.current >= BOOT_LINES.length) { onDone(); return; }
      const item = BOOT_LINES[idx.current];
      const wait = idx.current === 0 ? 0 : (item.delay - BOOT_LINES[idx.current - 1].delay);
      const t = setTimeout(() => {
        setLines(p => [...p, item]);
        idx.current += 1;
        run();
      }, wait);
      return t;
    };
    const t = run();
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', padding: '1.5rem' }}>
      {lines.map((l, i) => (
        <div key={i} style={{ color: l.color, marginBottom: '0.35rem' }}>{l.text}</div>
      ))}
      {lines.length < BOOT_LINES.length && (
        <span style={{ color: '#a78bfa', animation: 'blink 1s step-end infinite' }}>█</span>
      )}
    </div>
  );
}

export default function EnrollModal({ open, onClose, preselectedCourse = '' }) {
  const [booted, setBooted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: preselectedCourse, message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [typing, setTyping] = useState({});

  // Reset on open
  useEffect(() => {
    if (open) {
      setBooted(false);
      setSubmitted(false);
      setForm(f => ({ ...f, course: preselectedCourse }));
    }
  }, [open, preselectedCourse]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    setTyping(p => ({ ...p, [name]: true }));
    setTimeout(() => setTyping(p => ({ ...p, [name]: false })), 600);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Admission Enquiry — ${form.course || 'General'} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCourse: ${form.course}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@skillmergeacademy.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            backdropFilter: 'blur(6px)',
          }}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto',
              background: '#080010',
              border: '1px solid rgba(107,33,232,0.5)',
              borderRadius: '16px',
              boxShadow: '0 0 60px rgba(107,33,232,0.3), 0 0 120px rgba(192,38,211,0.1)',
              position: 'relative',
            }}
          >
            {/* Terminal title bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.8rem 1.2rem',
              borderBottom: '1px solid rgba(107,33,232,0.3)',
              background: 'rgba(107,33,232,0.08)',
              position: 'sticky', top: 0, zIndex: 1,
            }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f87171', display: 'inline-block', cursor: 'pointer' }} onClick={onClose} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#facc15', display: 'inline-block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ flex: 1, textAlign: 'center', fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(167,139,250,0.7)' }}>
                skillmerge — admission_terminal v2.0
              </span>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}>✕</button>
            </div>

            {/* Scan line overlay */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, borderRadius: '16px',
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(107,33,232,0.025) 2px, rgba(107,33,232,0.025) 4px)',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Boot sequence */}
              {!booted && <BootSequence onDone={() => setBooted(true)} />}

              {/* Form */}
              {booted && !submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  style={{ padding: '1.5rem' }}
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#a78bfa', marginBottom: '0.25rem' }}>{'// SECURE_ENROLLMENT_FORM'}</p>
                    <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0', fontFamily: 'var(--font-heading, monospace)', letterSpacing: '0.08em' }}>
                      APPLY FOR ADMISSION
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Fields */}
                    {[
                      { name: 'name', label: 'FULL_NAME', type: 'text', placeholder: 'John Doe', required: true },
                      { name: 'email', label: 'EMAIL_ADDRESS', type: 'email', placeholder: 'you@example.com', required: true },
                      { name: 'phone', label: 'PHONE_NUMBER', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: false },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.72rem', color: '#a78bfa', marginBottom: '0.35rem', letterSpacing: '0.07em' }}>
                          <span style={{ color: '#22d3ee' }}>❯</span> {f.label} {f.required && <span style={{ color: '#f87171' }}>*</span>}
                          {typing[f.name] && <span style={{ color: '#4ade80', fontSize: '0.65rem' }}>WRITING...</span>}
                        </label>
                        <input
                          name={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                          value={form[f.name]} onChange={handleChange}
                          style={{
                            width: '100%', background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${typing[f.name] ? 'rgba(34,211,238,0.6)' : 'rgba(107,33,232,0.35)'}`,
                            borderRadius: '8px', padding: '0.65rem 0.9rem', color: '#e2e8f0',
                            fontFamily: 'monospace', fontSize: '0.9rem', outline: 'none',
                            boxSizing: 'border-box', transition: 'border-color 0.2s',
                          }}
                        />
                      </div>
                    ))}

                    {/* Course select */}
                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.72rem', color: '#a78bfa', marginBottom: '0.35rem', letterSpacing: '0.07em' }}>
                        <span style={{ color: '#22d3ee' }}>❯</span> SELECT_COURSE <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <select
                        name="course" required value={form.course} onChange={handleChange}
                        style={{
                          width: '100%', background: '#0d0020',
                          border: '1px solid rgba(107,33,232,0.35)', borderRadius: '8px',
                          padding: '0.65rem 0.9rem', color: form.course ? '#e2e8f0' : '#6b7280',
                          fontFamily: 'monospace', fontSize: '0.87rem', outline: 'none', boxSizing: 'border-box',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="">-- Select a program --</option>
                        {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.72rem', color: '#a78bfa', marginBottom: '0.35rem', letterSpacing: '0.07em' }}>
                        <span style={{ color: '#22d3ee' }}>❯</span> YOUR_MESSAGE
                      </label>
                      <textarea
                        name="message" rows={3} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your background or any questions you have..."
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.03)',
                          border: `1px solid ${typing.message ? 'rgba(34,211,238,0.6)' : 'rgba(107,33,232,0.35)'}`,
                          borderRadius: '8px', padding: '0.65rem 0.9rem', color: '#e2e8f0',
                          fontFamily: 'monospace', fontSize: '0.9rem', outline: 'none', resize: 'vertical',
                          boxSizing: 'border-box', transition: 'border-color 0.2s',
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      style={{
                        width: '100%', padding: '0.85rem',
                        background: 'linear-gradient(135deg, #6b21e8, #c026d3)',
                        border: '1px solid rgba(192,38,211,0.5)',
                        borderRadius: '8px', color: '#fff',
                        fontFamily: 'monospace', fontSize: '0.9rem', letterSpacing: '0.12em',
                        cursor: 'pointer', marginTop: '0.5rem',
                        boxShadow: '0 0 20px rgba(107,33,232,0.4)',
                      }}
                    >
                      ❯ SUBMIT_APPLICATION
                    </motion.button>

                    <p style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#6b7280', textAlign: 'center', margin: 0 }}>
                      🔒 Your data is encrypted. We'll contact you within 24 hrs.
                    </p>
                  </form>
                </motion.div>
              )}

              {/* Success state */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: '3rem 2rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <p style={{ fontFamily: 'monospace', color: '#4ade80', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{'> APPLICATION_SENT SUCCESSFULLY'}</p>
                  <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontFamily: 'monospace' }}>ACCESS REQUEST LOGGED</h3>
                  <p style={{ color: 'rgba(196,181,253,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    Your mail client should have opened with your application.<br />
                    Our team will get back to you within <span style={{ color: '#a78bfa' }}>24 hours</span>.
                  </p>
                  <button onClick={onClose} className="cyber-btn" style={{ marginTop: '2rem', padding: '0.7rem 2rem' }}>
                    CLOSE TERMINAL
                  </button>
                </motion.div>
              )}
            </div>

            <style>{`
              @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
