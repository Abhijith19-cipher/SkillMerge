import React from 'react';
import { motion } from 'motion/react';
import { usePerformance } from '../context/PerformanceContext';

const ICONS = [
  { name: 'Kali Linux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Windows', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
  { name: 'Apple', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'Bash', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'Ubuntu', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

export default function LiquidSoftwareStack() {
  const { isLiteMode } = usePerformance();

  return (
    <section style={{ padding: '6rem 2rem', background: '#0a0a0a', textAlign: 'center', overflow: 'hidden' }}>
      <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// TOOL_STACK'}</p>
      <h2 className="neon-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem' }}>Software We Train On</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {ICONS.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            style={{
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '10px',
              /* Liquid Glass Effect */
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px 0 rgba(132, 0, 255, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Liquid inner glow blob */}
            {!isLiteMode && (
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 90, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{
                  position: 'absolute',
                  top: '-30%',
                  left: '-30%',
                  width: '160%',
                  height: '160%',
                  background: 'radial-gradient(circle, rgba(132,0,255,0.15) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} 
              />
            )}
            
            <img src={icon.url} alt={icon.name} style={{ width: '45px', height: '45px', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))', zIndex: 1 }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontFamily: 'monospace', zIndex: 1, marginTop: '5px' }}>{icon.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
