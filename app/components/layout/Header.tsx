'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Site-wide light navbar (whole site is now the "Confetti" light theme).
// 4 links + Réserver, matching the validated mockup structure, but pointing
// to the real key pages for SEO internal-linking + cross-page navigation.
const siteNav = [
  { href: '/la-starcam', label: 'La Starcam' },
  { href: '/memory-book', label: 'Memory Book' },
  { href: '/#reel', label: 'Réalisations' },
  { href: '/tarifs', label: 'Tarifs' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll suivi via framer-motion (pas de window.addEventListener)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 40
    setIsScrolled((prev) => (prev === next ? prev : next))
  })

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#FFFBF5]/85 backdrop-blur-strong border-b border-black/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
        className={`mx-auto w-full max-w-[1200px] px-[18px] transition-all duration-300 min-[560px]:px-6 ${isScrolled ? 'py-2.5' : 'py-4'}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5" aria-label="ForeverMemories, accueil">
            <Image
              src="/images/fm-logo-black.png"
              alt="ForeverMemories"
              width={480}
              height={480}
              className="h-9 w-auto"
              priority
            />
            <span className="font-display text-[20px] tracking-tight text-[#2A2230]">
              <b className="font-extrabold">Forever</b>Memories
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-[30px] lg:flex">
            {siteNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center text-[15px] font-medium leading-none text-[#6C6172] transition-colors hover:text-[#B65EAB]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-[22px] py-[11px] text-[15px] font-semibold leading-none text-white transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--fm-grad)' }}
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#2A2230] lg:hidden"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-[1001] bg-[#2A2230]/30 backdrop-blur-sm lg:hidden"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed bottom-0 right-0 top-0 z-[1002] flex w-[80%] max-w-sm flex-col border-l border-black/[0.06] bg-[#FFFBF5] lg:hidden"
              >
                <div className="flex items-center justify-end border-b border-black/[0.06] p-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg p-2 text-[#2A2230] transition-colors hover:bg-black/[0.04]"
                    aria-label="Fermer le menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  {siteNav.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3.5 text-[16px] font-medium text-[#2A2230] transition-colors hover:bg-black/[0.04]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-black/[0.06] p-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full rounded-full py-3.5 text-center font-semibold text-white"
                    style={{ background: 'var(--fm-grad)' }}
                  >
                    Réserver mon événement
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
