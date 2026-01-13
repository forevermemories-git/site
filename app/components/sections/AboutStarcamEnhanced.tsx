'use client'

import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Video, Sparkles, Award, Zap, Instagram, ArrowRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Composant vidéo avec effet 3D tilt
function TiltVideo({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-4 bg-primary/30 rounded-3xl blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Video container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors duration-300">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Play indicator */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
          </div>
        </motion.div>

        {/* Index number */}
        <div className="absolute bottom-4 left-4 text-6xl font-bold text-white/10">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  )
}

// Feature card avec hover effect
function FeatureCard({ icon, title, description, index }: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 group-hover:border-primary/20 transition-all duration-300 flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-cream">{title}</h3>
        <p className="text-cream/50 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function AboutStarcamEnhanced() {
  const sectionRef = useRef(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const reels = [
    '/videos/reels/al-wedding.webm',
    '/videos/reels/chezrose.webm',
    '/videos/reels/corcorans.webm',
    '/videos/reels/ma-wedding.webm',
  ]

  const features = [
    {
      icon: <Video size={24} />,
      title: 'Qualité Full HD',
      description: 'Rendu cinématographique professionnel'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Slow-motion',
      description: 'Capture chaque mouvement dramatique'
    },
    {
      icon: <Award size={24} />,
      title: 'Robot pro',
      description: 'Technologie des plus grands événements'
    },
    {
      icon: <Zap size={24} />,
      title: 'Livraison 48h',
      description: 'Vos vidéos + galerie en ligne'
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-dark overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-[120px]" />
      </motion.div>

      {/* Grid pattern subtil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10">
        {/* Header section */}
        <div className="container-wide mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Technologie</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
            >
              <span className="text-cream">La </span>
              <span className="gradient-text-full">Starcam</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-cream/50 leading-relaxed"
            >
              Un robot vidéo de précision qui capture des moments spectaculaires
              avec des vidéos slow-motion d'une qualité cinématographique.
            </motion.p>
          </div>
        </div>

        {/* Features - Horizontal scroll on mobile, grid on desktop */}
        <div className="container-wide mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>

        {/* Video Showcase - Full width horizontal scroll */}
        <div className="mb-20">
          <div className="container-wide mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cream">
                En <span className="gradient-text">action</span>
              </h3>
              <a
                href="https://www.instagram.com/forevermemories.off/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-cream/50 hover:text-primary transition-colors group"
              >
                <Instagram size={18} />
                <span>Voir plus</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Desktop: Grid avec tilt effect */}
          <div className="hidden md:block container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
              {reels.map((reel, index) => (
                <TiltVideo key={index} src={reel} index={index} />
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal scroll gallery */}
          <div className="md:hidden">
            <div
              ref={videoContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4"
            >
              {reels.map((reel, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10">
                    <video
                      src={reel}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-4xl font-bold text-white/20">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark-card to-rose/10" />
            <div className="absolute inset-0 backdrop-blur-xl" />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cream mb-2">
                  Envie d'en voir plus ?
                </h3>
                <p className="text-cream/50">
                  Découvrez nos dernières créations sur Instagram
                </p>
              </div>

              <a
                href="https://www.instagram.com/forevermemories.off/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-cream transition-colors"
              >
                <Instagram size={20} />
                @forevermemories.off
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
