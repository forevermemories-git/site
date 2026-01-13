'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// Composant pour l'animation des mots
function AnimatedWord({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

// Composant pour le compteur animé
function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Bouton magnétique
function MagneticButton({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.15
    const y = (clientY - (top + height / 2)) * 0.15
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(position.x, springConfig)
  const y = useSpring(position.y, springConfig)

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className={variant === 'primary' ? 'btn-primary group' : 'btn-secondary group'}
    >
      {children}
    </motion.a>
  )
}

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef(null)

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const videos = [
    '/videos/video-al-groupe.webm',
    '/videos/video-chezrose-girls.webm',
    '/videos/video-corcorans-groupe.webm',
    '/videos/video-mamakutty-groupe.webm',
    '/videos/video-mp-groupe.webm',
    '/videos/video-sambavam-groupe.webm',
  ]

  // Rotation des vidéos
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [videos.length])

  // Chargement de la nouvelle vidéo
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()
    video.play().catch(() => {})
  }, [currentVideo])

  const stats = [
    { value: 1000, suffix: '+', label: 'Vidéos produites' },
    { value: 100, suffix: '%', label: 'Mémorables' },
    { value: 48, suffix: 'h', label: 'Galerie en ligne' },
  ]

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background avec parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: videoY, scale: videoScale }}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videos[currentVideo]} type="video/webm" />
        </video>
      </motion.div>

      {/* Overlays cinématiques */}
      <div className="absolute inset-0 z-[1]">
        {/* Gradient principal */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/70 to-dark" />

        {/* Vignette effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(12,12,14,0.4) 50%, rgba(12,12,14,0.8) 100%)'
        }} />

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[200px] pointer-events-none z-[2]" />

      {/* Contenu principal avec parallax */}
      <motion.div
        className="relative z-10 container-wide text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Badge animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cream/80 text-sm font-medium mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          L'animation star de vos événements
        </motion.div>

        {/* Titre avec animation mot par mot */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold mb-8 leading-[0.95] tracking-[-0.03em]">
          <div className="overflow-hidden">
            <AnimatedWord delay={0.3}>L'expérience</AnimatedWord>
          </div>
          <div className="overflow-hidden my-2">
            <motion.span
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block gradient-text-full"
            >
              Glambot
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <AnimatedWord delay={0.7}>ultime</AnimatedWord>
          </div>
        </h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl lg:text-2xl text-cream/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Des vidéos slow-motion cinématographiques qui
          <br className="hidden md:block" />
          immortalisent vos moments les plus précieux
        </motion.p>

        {/* CTAs avec effet magnétique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <MagneticButton href="/contact" variant="primary">
            Réserver mon événement
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton href="/la-starcam" variant="secondary">
            <Play size={18} />
            Découvrir la Starcam
          </MagneticButton>
        </motion.div>

        {/* Stats avec compteurs animés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-10 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-1 tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2 + index * 0.3} />
                </div>
                <div className="text-xs md:text-sm text-cream/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator élégant */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
