'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

// Bouton magnétique — motion values uniquement (pas de re-render par frame)
function MagneticButton({
  children,
  href,
  variant = 'primary',
}: {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={variant === 'primary' ? 'btn-primary group text-[15px]' : 'btn-secondary group text-[15px]'}
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
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallaxe douce sur la vidéo, le contenu remonte et s'estompe au scroll
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

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
    const handleEnded = () => setCurrentVideo((prev) => (prev + 1) % videos.length)
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

  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Vidéo de fond + parallaxe */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY, scale: videoScale }}>
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

      {/* Overlays cinématiques — fond sombre garanti pour la lisibilité */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/45 to-dark/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 12%, transparent 40%, rgba(12,12,14,0.55) 100%)',
          }}
        />
      </div>

      {/* Grain — élément fixe pointer-events-none */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Contenu — ancré en bas à gauche (composition asymétrique) */}
      <motion.div
        className="relative z-10 container-wide pb-16 md:pb-20 lg:pb-24"
        style={reduce ? undefined : { y: contentY, opacity }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow (unique sur la page) */}
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="overline text-primary-light/90 mb-6"
          >
            La Starcam
          </motion.span>

          {/* Titre — 2 lignes, magenta chirurgical */}
          <h1 className="font-display font-bold text-[clamp(3rem,11vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-cream">
            <span className="block overflow-hidden">
              <motion.span
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease }}
                className="block"
              >
                Chaque invité
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.38, ease }}
                className="block"
              >
                devient une{' '}
                <span className="gradient-text-full italic inline-block pr-[0.1em]">star.</span>
              </motion.span>
            </span>
          </h1>

          {/* Sous-titre + CTAs sur une ligne de base éditoriale */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base md:text-lg text-cream/65 leading-relaxed">
              Le bras robotisé qui filme vos invités en slow-motion, comme sur
              un tapis rouge. Vidéo sur place, galerie en ligne sous 48h.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <MagneticButton href="/contact" variant="primary">
                Réserver mon événement
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton href="/la-starcam" variant="secondary">
                <Play size={16} />
                Voir la Starcam
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
