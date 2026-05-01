/* ─── Ambient Gradient Background ─── */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 20% -10%, rgba(180, 151, 207, 0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 110%, rgba(82, 39, 255, 0.14) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 70%),
          linear-gradient(160deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(180,151,207,0.06) 100%)
        `,
      }}
    />
  );
}
