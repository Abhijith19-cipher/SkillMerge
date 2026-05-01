import React from 'react'
import { motion } from 'motion/react'
import './GlobalPartners.css'

// Import partner images
import ciscoLogo from '../assets/partners/CISCO (1).avif'
import comptiaLogo from '../assets/partners/CompTIA.avif'
import itsLogo from '../assets/partners/ITSlogo.avif'
import nasscomLogo from '../assets/partners/NASSCOM.avif'

const PARTNERS = [
  { id: 'cisco', src: ciscoLogo, alt: 'Cisco Partner' },
  { id: 'comptia', src: comptiaLogo, alt: 'CompTIA Partner' },
  { id: 'its', src: itsLogo, alt: 'ITS Partner' },
  { id: 'nasscom', src: nasscomLogo, alt: 'NASSCOM Partner' },
]

export default function GlobalPartners() {
  return (
    <section className="global-partners-section">
      <div className="partners-header">
        <p className="mono partners-tag">{'// GLOBAL_LEARNING_PARTNERS'}</p>
        <h2 className="partners-title">Industry Backed Certifications</h2>
      </div>

      {/* Marquee Container */}
      <div className="marquee-container">
        {/* Left/Right fade overlays */}
        <div className="marquee-overlay-left"></div>
        <div className="marquee-overlay-right"></div>

        <div className="marquee-track">
          {/* Render two identical sets of logos for infinite scrolling */}
          <div className="marquee-content">
            {PARTNERS.map((partner) => (
              <div key={`set1-${partner.id}`} className="partner-logo-wrapper">
                <img src={partner.src} alt={partner.alt} className="partner-logo" />
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {PARTNERS.map((partner) => (
              <div key={`set2-${partner.id}`} className="partner-logo-wrapper">
                <img src={partner.src} alt={partner.alt} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
