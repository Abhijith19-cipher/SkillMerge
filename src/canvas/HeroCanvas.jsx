import Spline from '@splinetool/react-spline';

/**
 * HeroCanvas Component
 * ────────────────────
 * Renders a 3D scene from Spline.
 * This replaces the previous Three.js / R3F implementation.
 */
export default function HeroCanvas() {
  return (
    <Spline scene="https://prod.spline.design/vsjUon0-pinss9IW/scene.splinecode" />
  );
}
