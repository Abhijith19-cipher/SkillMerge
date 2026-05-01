import React from 'react'
import { motion } from 'motion/react'
import { useIsMobile } from '../hooks/useIsMobile'
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
  const isMobile = useIsMobile()
  return (
    <section className="global-partners-section">
      <div className="partners-header">
        <p className="mono partners-tag">{'// GLOBAL_LEARNING_PARTNERS'}</p>
        <h2 className="partners-title">Industry Backed Certifications</h2>
      </div>

      {/* Marquee Container */}
      <div className={`marquee-container${isMobile ? ' lite-mode' : ''}`}>
        {!isMobile && <div className="marquee-overlay-left" />}
        {!isMobile && <div className="marquee-overlay-right" />}

        <div className="marquee-track">
          {/* First set */}
          <div className="marquee-content">
            {PARTNERS.map((partner) => (
              <div key={`set1-${partner.id}`} className="partner-logo-wrapper">
                <img src={partner.src} alt={partner.alt} className="partner-logo" />
              </div>
            ))}
          </div>
          {!isMobile && (
            <div className="marquee-content" aria-hidden="true">
              {PARTNERS.map((partner) => (
                <div key={`set2-${partner.id}`} className="partner-logo-wrapper">
                  <img src={partner.src} alt={partner.alt} className="partner-logo" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
