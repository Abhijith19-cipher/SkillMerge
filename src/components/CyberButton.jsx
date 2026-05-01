import React, { useState, useCallback } from 'react';

const TERMINAL_SEQUENCES = [
  ['> INITIALIZING...', '> CONNECTING TO SERVER...', '> ACCESS GRANTED ✓'],
  ['> LOADING MODULES...', '> DECRYPTING...', '> READY ✓'],
  ['> RUNNING SCRIPT...', '> BYPASSING FIREWALL...', '> EXECUTE ✓'],
  ['> ESTABLISHING TUNNEL...', '> PROXY ROUTED...', '> ONLINE ✓'],
];

let seqIndex = 0;

export default function CyberButton({ children, onClick, className = '', style = {}, variant = 'primary', id }) {
  const [phase, setPhase] = useState('idle'); // idle | running | done
  const [lines, setLines] = useState([]);

  const handleClick = useCallback(async (e) => {
    if (phase === 'running') return;
    setPhase('running');
    setLines([]);

    const seq = TERMINAL_SEQUENCES[seqIndex % TERMINAL_SEQUENCES.length];
    seqIndex++;

    for (let i = 0; i < seq.length; i++) {
      await new Promise(r => setTimeout(r, 280));
      setLines(prev => [...prev, seq[i]]);
    }

    await new Promise(r => setTimeout(r, 200));
    setPhase('done');
    await new Promise(r => setTimeout(r, 700));
    setPhase('idle');
    setLines([]);
    onClick?.(e);
  }, [phase, onClick]);

  const isOutline = variant === 'outline';

  return (
    <button
      id={id}
      className={`cyber-btn ${isOutline ? 'cyber-btn-outline' : ''} ${className}`}
      style={{
        position: 'relative',
        overflow: 'visible',
        ...style
      }}
      onClick={handleClick}
    >
      {/* Button label — fades during run */}
      <span style={{ opacity: phase === 'running' ? 0 : 1, transition: 'opacity 0.15s' }}>
        {children}
      </span>

      {/* Terminal overlay popup */}
      {phase !== 'idle' && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.95)',
          border: '1px solid rgba(132,0,255,0.6)',
          borderRadius: '6px',
          padding: '8px 14px',
          minWidth: '220px',
          textAlign: 'left',
          zIndex: 1000,
          pointerEvents: 'none',
          boxShadow: '0 0 20px rgba(132,0,255,0.25)',
        }}>
          <div style={{ fontSize: '10px', color: '#6b21e8', fontFamily: 'monospace', marginBottom: '4px', opacity: 0.7 }}>
            skillmerge@terminal:~$
          </div>
          {lines.map((line, i) => (
            <div key={i} style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: line.includes('✓') ? '#4ade80' : '#c4b5fd',
              lineHeight: '1.6',
              animation: 'termFadeIn 0.2s ease'
            }}>
              {line}
              {i === lines.length - 1 && phase === 'running' && (
                <span style={{ animation: 'blink 0.7s step-end infinite', color: '#a78bfa' }}>█</span>
              )}
            </div>
          ))}
        </div>
      )}
    </button>
  );
}
