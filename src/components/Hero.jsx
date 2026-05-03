import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import logoSrc from '../assets/logo.svg'
import PixelBlast from './PixelBlast'
import Shuffle from './Shuffle'
import AnimatedContent from './AnimatedContent'
import { useIsMobile } from '../hooks/useIsMobile'
import './Hero.css'

const MAIN_HEADINGS = [
  "Kerala's No.1 ethical hacking course provider",
  "Kerala's first career-focused cybersecurity academy",
  "Training the next generation of cybersecurity professionals",
]

const SUB_TEXTS = [
  ">_ MASTER CYBERSECURITY",
  ">_ SECURE YOUR FUTURE",
  ">_ BECOME AN EXPERT",
  ">_ ADVANCE YOUR CAREER",
  ">_ INDUSTRY RECOGNIZED",
  ">_ PLACEMENT ASSISTANCE",
  ">_ HANDS-ON TRAINING",
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}
const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 22 } },
}

function AnimatedHeroTexts({ isMobile }) {
  const [lineIdx, setLineIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIdx((prev) => (prev + 1) % MAIN_HEADINGS.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-texts-container">
      <div className="hero-heading-wrapper">
        {isMobile ? (
          <h1 className="hero-heading-shuffle" style={{ textAlign: 'center', transition: 'opacity 0.5s', opacity: 1 }}>
            {MAIN_HEADINGS[lineIdx]}
          </h1>
        ) : (
          <Shuffle
            key={`main-${lineIdx}`}
            text={MAIN_HEADINGS[lineIdx]}
            tag="h1"
            className="hero-heading-shuffle"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0}
            rootMargin="0px"
            triggerOnce={false}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
            textAlign="center"
          />
        )}
      </div>

      <div className="hero-subtext-wrapper">
        <img src={logoSrc} alt="SkillMerge" className="hero-subtext-icon" />
        {isMobile ? (
          <h2 className="hero-subtext-shuffle mono" style={{ textAlign: 'left', transition: 'opacity 0.5s', opacity: 1 }}>
            {SUB_TEXTS[lineIdx]}
          </h2>
        ) : (
          <Shuffle
            key={`sub-${lineIdx}`}
            text={SUB_TEXTS[lineIdx]}
            tag="h2"
            className="hero-subtext-shuffle mono"
            shuffleDirection="up"
            duration={0.3}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.025}
            threshold={0}
            rootMargin="0px"
            triggerOnce={false}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
            textAlign="left"
          />
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="hero-section">
      {/* Background — skip on mobile to save GPU */}
      {!isMobile && (
        <div className="hero-pixelblast-bg">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#501da7"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent={true}
          />
        </div>
      )}

      <motion.div
        className="hero-overlay"
        variants={container}
        initial={isMobile ? "show" : "hidden"}
        animate="show"
      >
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="elastic.out(1, 0.5)"
          initialOpacity={0}
          animateOpacity={true}
          scale={0.9}
          threshold={0.1}
          delay={isMobile ? 0 : 0.4}
        >
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="mono">APPLICATIONS NOW OPEN</span>
          </div>
        </AnimatedContent>

        <AnimatedHeroTexts isMobile={isMobile} />

        <motion.div className="hero-cta-row" variants={isMobile ? {} : item}>
          <a href="#courses" className="hero-cta-primary">Explore Courses</a>
          <a href="#contact" className="hero-cta-secondary">Get In Touch</a>
        </motion.div>
      </motion.div>

      {!isMobile && (
        <motion.div
          className="hero-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="scroll-chevron" />
          <span className="mono">SCROLL</span>
        </motion.div>
      )}
    </section>
  )
}
