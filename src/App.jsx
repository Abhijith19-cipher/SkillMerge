import { useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlobalPartners from './components/GlobalPartners'
import CourseCatalog from './components/CourseCatalog'
import WhyChooseUs from './components/WhyChooseUs'
import SplashScreen from './components/SplashScreen'
import HackerBackground from './components/HackerBackground'
import VideoMarquee from './components/VideoMarquee'
import VerticalMarquee from './components/VerticalMarquee'
import LiquidSoftwareStack from './components/LiquidSoftwareStack'
import PartnerMenu from './components/PartnerMenu'
import ContactSection from './components/ContactSection'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CoursesPage from './pages/Courses'
import CourseDetailPage from './pages/CourseDetail'
import AboutPage from './pages/About'
import PlacementPage from './pages/Placement'
import ContactPage from './pages/Contact'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './App.css'

/* ═══ 3D Scene Components ═══ */
function CyberSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh scale={2.2}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#6b21e8"
          emissive="#c026d3"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#6b21e8" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#c026d3" />
      <pointLight position={[0, -5, -5]} intensity={0.5} color="#e879f9" />
      <Stars radius={80} depth={60} count={window.innerWidth < 768 ? 400 : 1500} factor={3} saturation={0.5} fade speed={1.5} />
      <CyberSphere />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

/* ═══ Section Components ═══ */
function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <HeroScene />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero-tag mono">{'// SYSTEM INITIALIZED'}</p>
        </motion.div>

        <motion.h1
          className="hero-title glitch"
          data-text="CYBERPROJECT"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          CYBERPROJECT
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Futuristic React scaffold with Three.js, Motion &amp; Swiper
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="cyber-btn" id="btn-explore">
            EXPLORE
          </button>
          <button className="cyber-btn cyber-btn-outline" id="btn-docs">
            DOCUMENTATION
          </button>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="scroll-arrow" />
        <span className="mono">SCROLL</span>
      </motion.div>
    </section>
  )
}

// Removed FeaturesSection, ShowcaseSection, and CodeSection

function FooterSection() {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-glow" />
      <div className="footer-content">
        <h3 className="mono">CYBERPROJECT</h3>
        <p>React + Vite + Three.js + Motion + Swiper + Tailwind CSS v4</p>
        <div className="footer-line" />
        <p className="mono footer-copy">
          {'// '}INITIALIZED {new Date().getFullYear()} | ALL SYSTEMS OPERATIONAL
        </p>
      </div>
    </footer>
  )
}

/* ═══ Home Page ═══ */
function Home() {
  return (
    <>
      <Hero />
      <GlobalPartners />
      <CourseCatalog />
      <WhyChooseUs />
      <VideoMarquee />
      
      <section className="vertical-marquee-section" style={{ position: 'relative', width: '100%', padding: '4rem 0', background: '#000' }}>
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <p className="section-tag mono" style={{ textAlign: 'center' }}>{'// ALUMNI_SUCCESS'}</p>
          <h2 className="neon-text" style={{ textAlign: 'center' }}>Success Stories</h2>
        </div>
        <VerticalMarquee 
          items={[
            { src: '/success-stories/Abdulla-P-N.avif', name: 'Abdulla P N', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Abhirami-S-R.avif', name: 'Abhirami S R', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Adithyan-A-S.avif', name: 'Adithyan A S', placement: 'Placed at Spider Technosoft Pvt Ltd' },
            { src: '/success-stories/Adithyan-as.avif', name: 'Adithyan A S', placement: 'Placed at Spider Technosoft' },
            { src: '/success-stories/Ajanya-Aji.avif', name: 'Ajanya Aji', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Anaswar-K-Shine.avif', name: 'Anaswar K Shine', placement: 'Placed at Neural Networks' },
            { src: '/success-stories/Archana-k.avif', name: 'Archana K', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Arjun.avif', name: 'Arun', placement: 'Placed at IBM Banglore' },
            { src: '/success-stories/Athira-A-Raj.avif', name: 'Athira A Raj', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Binoy-Varghese.avif', name: 'Binoy Varghese', placement: 'Placed at Reliance Retail' },
            { src: '/success-stories/Devilekshmi-D.avif', name: 'Devilekshmi D', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/FATHIMA-HIBA.avif', name: 'Fathima Hiba C P', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Fathima-Sathar.avif', name: 'Fathima Sathar', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Gouri-L-S.avif', name: 'Gouri L S', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Harris.avif', name: 'Harris', placement: 'Placed at Bright Technologies' },
            { src: '/success-stories/Kailas-Nath.U.avif', name: 'Kailas Nath U', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Muhammed-Jasmal.avif', name: 'Muhammed Jasmal U K', placement: 'Placed at Neural Networks' },
            { src: '/success-stories/Nafeesa-Hidha.avif', name: 'Nafeesa Hidha', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Nivedhya-T-B.avif', name: 'Nivedhya T B', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Rosmy-Antu.avif', name: 'Rosmy Antu', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/SNEHA.C.avif', name: 'Sneha C', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Stiniya-PS.avif', name: 'Stiniya PS', placement: 'Placed at Aabasoft' },
            { src: '/success-stories/Surya.avif', name: 'Surya', placement: 'Placed at IBM Banglore' },
            { src: '/success-stories/SYED-ALI-SHAJAHAN.avif', name: 'Syed Ali Shajahan', placement: 'Placed at Spider Technosoft' },
            { src: '/success-stories/Varun-V-.avif', name: 'Varun V', placement: 'Placed at Spider Technosoft' }
          ]}
        />
      </section>
      <LiquidSoftwareStack />
      <PartnerMenu />
      <ContactSection />
    </>
  )
}

/* ═══ Main App ═══ */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  return (
    <ErrorBoundary>
      <SplashScreen onComplete={() => setIsLoaded(true)} />

      <motion.div
        className="app cyber-grid-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 1 }} 
      >
        <HackerBackground />
        <Navbar />

        <AnimatePresence mode="wait">
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </motion.div>
    </ErrorBoundary>
  )
}
