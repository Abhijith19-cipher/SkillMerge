import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import BorderGlowCard from '../components/BorderGlowCard';
import DecryptedText from '../components/DecryptedText';

const CONTACT_ITEMS = [
  {
    icon: '📍',
    label: 'HEADQUARTERS',
    content: 'SkillMerge Hackers Academy\nDoor No. 32/2496, 2nd Floor,\nPocudyl Building, Opposite Nilambur Furniture,\nPalarivattom, Kochi, Kerala – 682025',
    link: null,
  },
  {
    icon: '📞',
    label: 'PHONE',
    content: '+91 99611 00003',
    link: 'tel:+919961100003',
  },
  {
    icon: '✉️',
    label: 'EMAIL',
    content: 'info@skillmergeacademy.com',
    link: 'mailto:info@skillmergeacademy.com',
  },
  {
    icon: '🌐',
    label: 'SOCIAL',
    content: 'Facebook  •  Instagram',
    link: null,
    socials: [
      { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61563365234885' },
      { name: 'Instagram', url: 'https://www.instagram.com/skillmergeindia/' },
    ],
  },
];

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Compose mailto link with form data
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.open(`mailto:info@skillmergeacademy.com?subject=${subject}&body=${body}`);
    setSent(true);
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0a0a0a', overflowX: 'hidden', paddingTop: '100px' }}>

      {/* Ambient */}
      <div style={{ position: 'fixed', top: '5%', right: '-15%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(132,0,255,0.1) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 8rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '1rem' }}>{'// COMM_LINK'}</p>
          <h1 className="neon-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            <DecryptedText
              text="Contact Us"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={40}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*"
              className="decrypted-revealed"
              encryptedClassName="decrypted-encrypted"
            />
          </h1>
          <p style={{ color: 'rgba(196,181,253,0.8)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.8, marginBottom: '4rem' }}>
            Ready to launch your cybersecurity career? Reach out and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <BorderGlowCard backgroundColor="rgba(10,0,20,0.8)" borderRadius={16} glowColor="270 80 70" colors={['#a78bfa', '#c026d3', '#6b21e8']} glowIntensity={1.1}>
                  <div style={{ padding: '1.8rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.6rem', flexShrink: 0, lineHeight: 1 }}>{item.icon}</span>
                    <div>
                      <p className="mono" style={{ color: '#a78bfa', fontSize: '0.75rem', marginBottom: '0.5rem', letterSpacing: '0.08em' }}>{item.label}</p>
                      {item.link ? (
                        <a href={item.link} style={{ color: 'rgba(196,181,253,0.85)', textDecoration: 'none', lineHeight: 1.7, display: 'block' }}>
                          {item.content}
                        </a>
                      ) : item.socials ? (
                        <div style={{ display: 'flex', gap: '1rem' }}>
                          {item.socials.map(s => (
                            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                              style={{ color: '#a78bfa', textDecoration: 'none', fontFamily: 'monospace', fontSize: '0.9rem', border: '1px solid rgba(167,139,250,0.3)', borderRadius: '8px', padding: '0.35rem 0.9rem' }}>
                              {s.name}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p style={{ color: 'rgba(196,181,253,0.85)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-line' }}>{item.content}</p>
                      )}
                    </div>
                  </div>
                </BorderGlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BorderGlowCard backgroundColor="rgba(10,0,20,0.85)" borderRadius={20} glowColor="275 90 68" colors={['#c026d3', '#a78bfa', '#818cf8']} glowIntensity={1.3}>
              <div style={{ padding: '2.5rem' }}>
              <p className="mono" style={{ color: '#a78bfa', fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.08em' }}>{'// WRITE_A_MESSAGE'}</p>
              <h2 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '2rem' }}>Send us a message</h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '3rem 0' }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'rgba(196,181,253,0.7)' }}>Your mail client should have opened. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: false },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.06em' }}>
                        {f.label.toUpperCase()} {f.required && <span style={{ color: '#f87171' }}>*</span>}
                      </label>
                      <input
                        name={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                        value={form[f.name]} onChange={handleChange}
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(132,0,255,0.3)',
                          borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff',
                          fontFamily: 'monospace', fontSize: '0.95rem', outline: 'none',
                          boxSizing: 'border-box', transition: 'border-color 0.3s',
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.06em' }}>
                      MESSAGE <span style={{ color: '#f87171' }}>*</span>
                    </label>
                    <textarea
                      name="message" required rows={5} placeholder="Tell us about your goals or what you'd like to know..."
                      value={form.message} onChange={handleChange}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(132,0,255,0.3)',
                        borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff',
                        fontFamily: 'monospace', fontSize: '0.95rem', outline: 'none', resize: 'vertical',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="cyber-btn"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                  >
                    SEND MESSAGE →
                  </motion.button>
                </form>
              )}
              </div>
            </BorderGlowCard>
          </motion.div>
        </div>

        {/* Google Maps embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ marginTop: '4rem', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(132,0,255,0.3)', height: '320px' }}
        >
          <iframe
            title="SkillMerge Location"
            width="100%" height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.305!3d9.984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8a5b1d1b1b%3A0x1b1b1b1b1b1b1b1b!2sPalarivattom%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
          />
        </motion.div>
      </div>
    </div>
  );
}
