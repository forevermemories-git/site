'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const navLinks = [
    { href: '/la-starcam', label: 'La Starcam' },
    { href: '/tarifs', label: 'Formules' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const eventLinks = [
    { href: '/mariages', label: 'Mariages' },
    { href: '/evenements-corporate', label: 'Corporate' },
    { href: '/anniversaires', label: 'Anniversaires' },
    { href: '/galas', label: 'Galas' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-strong'
          : 'bg-transparent'
      }`}
    >
      <nav className={`container-wide transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/White.png"
              alt="ForeverMemories"
              width={200}
              height={60}
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Dropdown Événements */}
            <li
              className="relative"
              onMouseEnter={() => setIsEventsDropdownOpen(true)}
              onMouseLeave={() => setIsEventsDropdownOpen(false)}
            >
              <button type="button" className="nav-link inline-flex items-center gap-1">
                <span>Événements</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isEventsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isEventsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 py-2 bg-dark-card border border-white/[0.08] rounded-xl shadow-card"
                  >
                    {eventLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-[14px] text-cream/70 hover:text-cream hover:bg-white/[0.04] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+33676815953"
              className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-[15px]"
            >
              <Phone size={16} />
              <span>06 76 81 59 53</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary text-white text-[15px] rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-cream"
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
                className="lg:hidden fixed inset-0 bg-dark/90 backdrop-blur-sm z-[1001]"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-dark-lighter border-l border-white/[0.06] z-[1002] flex flex-col"
              >
                <div className="flex items-center justify-end p-4 border-b border-white/[0.06]">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-cream hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3.5 text-cream text-[16px] font-medium hover:bg-white/[0.04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="px-6 py-3 mt-2">
                    <span className="text-xs font-medium text-cream/40 uppercase tracking-wider">
                      Événements
                    </span>
                  </div>

                  {eventLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3 text-cream/70 text-[15px] hover:text-cream hover:bg-white/[0.04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="p-6 border-t border-white/[0.06]">
                  <a
                    href="tel:+33676815953"
                    className="flex items-center justify-center gap-2 w-full py-3 mb-3 text-cream border border-white/10 rounded-xl hover:bg-white/[0.04] transition-colors"
                  >
                    <Phone size={18} />
                    <span>06 76 81 59 53</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3.5 bg-primary text-white text-center rounded-full font-medium hover:bg-primary-dark transition-colors"
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
