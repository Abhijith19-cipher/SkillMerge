import React from 'react';
import FlowingMenu from './FlowingMenu';

const partnerItems = [
  { 
    link: '#', 
    text: 'Affiliations', 
    images: [
      '/partners/Affliations/Futureskills1.avif',
      '/partners/Affliations/NASSCOM.avif',
      '/partners/Affliations/NCVET1.avif',
      '/partners/Affliations/Skill_India1.avif',
      '/partners/Affliations/comtia1.avif'
    ] 
  },
  { 
    link: '#', 
    text: 'Certification Partners', 
    images: [
      '/partners/certificate partner/CISCO.avif',
      '/partners/certificate partner/Fics1.avif',
      '/partners/certificate partner/IBM1.avif',
      '/partners/certificate partner/ITSlogo.avif',
      '/partners/certificate partner/Microsoft1.avif'
    ] 
  },
  { 
    link: '#', 
    text: 'Trusted Companies', 
    images: [
      '/partners/trusted companies/EME.avif',
      '/partners/trusted companies/ISHKHAN.avif',
      '/partners/trusted companies/JBG.avif',
      '/partners/trusted companies/SkillMerge-2.avif'
    ] 
  }
];

export default function PartnerMenu() {
  return (
    <section style={{ width: '100%', position: 'relative', background: '#0a0a0a', borderTop: '1px solid rgba(107,33,232,0.3)', paddingBottom: '4rem' }}>
      <div style={{ padding: '4rem 2rem 2rem', textAlign: 'center' }}>
        <p className="section-tag mono" style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{'// PARTNERS_&_AFFILIATIONS'}</p>
        <h2 className="neon-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Our Network</h2>
      </div>
      
      {/* Make the height responsive based on items count or just a fixed large box */}
      <div style={{ width: '100%', height: '400px', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <FlowingMenu 
          items={partnerItems} 
          speed={25} 
          textColor="rgba(196,181,253,0.7)"
          bgColor="#0a0a0a"
          marqueeBgColor="#6b21e8"
          marqueeTextColor="#fff"
          borderColor="rgba(255,255,255,0.05)"
        />
      </div>
    </section>
  );
}
