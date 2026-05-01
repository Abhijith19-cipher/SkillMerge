import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop — mounts once inside <Router>.
 * Every time the route pathname changes (including on first load / refresh),
 * it instantly scrolls the window back to the very top.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use 'instant' so there's no smooth-scroll lag on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null; // renders nothing
}
