import React from 'react';
import Stack from './Stack';
import { motion } from 'motion/react';

const REVIEWS = [
  {
    name: 'Vrindha Vrr',
    photo: 'https://ui-avatars.com/api/?name=Vrindha+Vrr&background=6b21e8&color=fff&size=120&bold=true',
    rating: 5,
    text: 'I had a great learning experience at SkillMerge Hackers Academy. The trainers are highly knowledgeable and provide practical-oriented cyber security training. The classes are well-structured and easy to understand, even for beginners. Highly recommended for anyone interested in cyber security and ethical hacking!',
    course: 'Cybersecurity Training',
    color: '#a78bfa',
  },
  {
    name: 'Muhammed Sinan K',
    photo: 'https://ui-avatars.com/api/?name=Muhammed+Sinan&background=0891b2&color=fff&size=120&bold=true',
    rating: 5,
    text: 'I joined SkillMerge Hackers Academy to learn cyber security and ethical hacking, and it has been a great decision. The classes are practical and easy to understand, even for beginners. The trainers are friendly and always ready to help.',
    course: 'Ethical Hacking',
    color: '#22d3ee',
  },
  {
    name: 'Asha',
    photo: 'https://ui-avatars.com/api/?name=Asha&background=059669&color=fff&size=120&bold=true',
    rating: 5,
    text: 'I had a great internship experience at SkillMerge Hackers Academy. The practical sessions in VAPT, ethical hacking, and cybersecurity were very informative. The mentors provided proper guidance and cleared all doubts.',
    course: 'Cybersecurity Internship',
    color: '#4ade80',
  },
  {
    name: 'Fathima Farhath',
    photo: 'https://ui-avatars.com/api/?name=Fathima+Farhath&background=dc2626&color=fff&size=120&bold=true',
    rating: 5,
    text: 'I was looking for a good cyber security institute in Kochi, and SkillMerge Hackers Academy exceeded my expectations. The ethical hacking training is industry oriented, with practical sessions and career guidance.',
    course: 'Cybersecurity Course',
    color: '#f87171',
  },
  {
    name: 'Sooraj Unni',
    photo: 'https://ui-avatars.com/api/?name=Sooraj+Unni&background=d97706&color=fff&size=120&bold=true',
    rating: 5,
    text: 'I had a very good learning experience at SkillMerge Hackers Academy. The ethical hacking and cyber security course is well structured with practical training and expert guidance.',
    course: 'Ethical Hacking',
    color: '#facc15',
  },
  {
    name: 'NISHAN',
    photo: 'https://ui-avatars.com/api/?name=NISHAN&background=7c3aed&color=fff&size=120&bold=true',
    rating: 5,
    text: 'The best academy for learning CYBERSECURITY & ETHICAL HACKING! I am learning ADPT course in 2025 batch. The tutors are friendly and their classes are very interesting.',
    course: 'ADPT',
    color: '#f472b6',
  },
  {
    name: 'Ayush Sanil',
    photo: 'https://ui-avatars.com/api/?name=Ayush+Sanil&background=0284c7&color=fff&size=120&bold=true',
    rating: 5,
    text: 'Excellent internship experience at SkillMerge Hacker Academy. Hands-on training in ethical hacking and cybersecurity with experienced instructors.',
    course: 'Cybersecurity Internship',
    color: '#34d399',
  },
  {
    name: 'Manjima Manikandan',
    photo: 'https://ui-avatars.com/api/?name=Manjima&background=9333ea&color=fff&size=120&bold=true',
    rating: 5,
    text: 'An Academy that strengthens the security. Fantastic learning environment with mentors who are genuinely passionate about cybersecurity education.',
    course: 'Cybersecurity',
    color: '#c084fc',
  },
];

function ReviewCard({ review }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(145deg, #0f0019 0%, #1a0030 100%)',
      border: `1px solid ${review.color}44`,
      borderTop: `3px solid ${review.color}`,
      borderRadius: '16px',
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxSizing: 'border-box',
    }}>
      {/* Avatar + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <img
          src={review.photo}
          alt={review.name}
          style={{ width: '52px', height: '52px', borderRadius: '50%', border: `2px solid ${review.color}`, objectFit: 'cover', flexShrink: 0 }}
        />
        <div>
          <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>{review.name}</div>
          <div style={{ color: review.color, fontFamily: 'monospace', fontSize: '0.68rem', marginTop: '2px' }}>{review.course}</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
          {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#facc15', fontSize: '14px' }}>★</span>)}
        </div>
      </div>

      {/* Review text */}
      <p style={{ color: 'rgba(196,181,253,0.8)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0, flex: 1 }}>
        "{review.text}"
      </p>

      {/* Google badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#FFC107"/>
          <path d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.3 6.3 14.7z" fill="#FF3D00"/>
          <path d="M24 46c5.5 0 10.5-1.8 14.4-4.9l-6.6-5.6C29.7 37.1 26.9 38 24 38c-6 0-10.7-3.9-11.8-9.1l-7 5.4C8 41 15.4 46 24 46z" fill="#4CAF50"/>
          <path d="M44.5 20H24v8.5h11.8c-.7 2.6-2.2 4.8-4.3 6.4l6.6 5.6C42.2 36.8 46 31 46 24c0-1.3-.2-2.7-.5-4z" fill="#1976D2"/>
        </svg>
        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#6b7280' }}>Google Review · Verified</span>
      </div>
    </div>
  );
}

export default function CourseReviewsSection() {
  const stackCards = REVIEWS.map((review, i) => (
    <ReviewCard key={i} review={review} />
  ));

  return (
    <div style={{ padding: '5rem 2rem 6rem', background: 'linear-gradient(to bottom, #0f0019 0%, #070710 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-tag mono">{'// GOOGLE_REVIEWS'}</p>
          <h2 className="neon-text" style={{ marginTop: '0.5rem' }}>People's Choice</h2>
          <p style={{ color: 'rgba(196,181,253,0.6)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            What our alumni say · Verified Google Reviews
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#facc15', fontSize: '1.4rem' }}>★</span>)}
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '1.2rem', marginLeft: '0.5rem' }}>5.0</span>
            <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>· {REVIEWS.length}+ reviews on Google</span>
          </div>
        </motion.div>

        {/* Stack + Side reviews layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4rem',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {/* Draggable Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', flex: '1 1 340px' }}
          >
            <div style={{ width: '340px', height: '300px', position: 'relative' }}>
              <Stack
                randomRotation
                sensitivity={150}
                sendToBackOnClick
                autoplay
                autoplayDelay={3500}
                pauseOnHover
                cards={stackCards}
                animationConfig={{ stiffness: 220, damping: 22 }}
              />
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
              {'> drag or click to cycle reviews'}
            </p>
          </motion.div>

          {/* Scrollable list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '420px', overflowY: 'auto', flex: '1 1 340px',
              scrollbarWidth: 'thin', scrollbarColor: 'rgba(107,33,232,0.4) transparent' }}
          >
            {REVIEWS.map((review, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                padding: '0.875rem', borderRadius: '10px',
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${review.color}22`,
                borderLeft: `3px solid ${review.color}`,
              }}>
                <img
                  src={review.photo}
                  alt={review.name}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${review.color}66`, objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontWeight: '600', color: '#fff', fontSize: '0.85rem' }}>{review.name}</div>
                  <div style={{ color: 'rgba(196,181,253,0.7)', fontSize: '0.78rem', lineHeight: 1.5, marginTop: '3px' }}>
                    "{review.text.substring(0, 90)}..."
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Google link */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://www.google.com/search?q=skillmerge+hackers+academy"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn cyber-btn-outline"
            style={{ display: 'inline-block', fontSize: '0.85rem', padding: '0.6rem 1.75rem', textDecoration: 'none' }}
          >
            View All Reviews on Google →
          </a>
        </div>
      </div>
    </div>
  );
}
