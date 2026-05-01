import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact" style={{ position: 'relative', width: '100%', minHeight: '80vh', padding: '6rem 2rem', background: '#0a0a0a', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', width: '100%', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Contact Details */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{ padding: '3rem', borderRadius: '24px', background: 'rgba(20, 10, 40, 0.4)', border: '1px solid rgba(132, 0, 255, 0.3)', boxShadow: '0 0 30px rgba(132, 0, 255, 0.1)' }}
          >
            <p className="section-tag mono" style={{ marginBottom: '1rem' }}>{'// INITIATE_CONNECTION'}</p>
            <h2 className="neon-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Get in Touch</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'var(--font-mono, monospace)', color: 'var(--text-muted)' }}>
              <div>
                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>EMAIL_SECURE_LINE:</strong>
                <p style={{ marginTop: '0.25rem', color: '#c4b5fd' }}>contact@skillmergeacademy.com</p>
              </div>
              
              <div>
                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>HQ_COORDINATES:</strong>
                <p style={{ marginTop: '0.25rem', color: '#c4b5fd' }}>Cyber District, Node 42<br/>Tech City, Future State</p>
              </div>

              <div>
                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>COMM_FREQUENCY:</strong>
                <p style={{ marginTop: '0.25rem', color: '#c4b5fd' }}>+1 (555) 019-8423</p>
              </div>
              
              <button className="cyber-btn" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
                SEND MESSAGE
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Spline Model */}
        <div style={{ flex: '1.5', minWidth: '350px', height: '600px', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(132, 0, 255, 0.15) 0%, transparent 60%)',
              pointerEvents: 'none',
              zIndex: 0
            }}></div>
            <Suspense fallback={<div className="cyber-loading" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>}>
              <Spline scene="https://prod.spline.design/FvjRW-qms7aDAy09/scene.splinecode" style={{ width: '100%', height: '100%', zIndex: 10, position: 'relative' }} />
            </Suspense>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
