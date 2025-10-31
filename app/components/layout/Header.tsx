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

  // Bloquer le scroll de la page quand le menu mobile est ouvert
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
    { href: '/tarifs', label: 'Tarifs' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className={`container-custom transition-all duration-300 ${isScrolled ? 'py-2 md:py-4' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Black.png"
              alt="ForeverMemories"
              width={375}
              height={112}
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14 md:h-24' : 'h-20 md:h-24'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors hover:text-primary text-dark"
              >
                {link.label}
              </Link>
            ))}

            {/* Menu déroulant Événements */}
            <div
              className="relative"
              onMouseEnter={() => setIsEventsDropdownOpen(true)}
              onMouseLeave={() => setIsEventsDropdownOpen(false)}
            >
              <button className="font-medium transition-colors hover:text-primary text-dark flex items-center gap-1">
                Événements
                <ChevronDown size={16} className={`transition-transform ${isEventsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isEventsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {eventLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 text-dark hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+33676815953" className="flex items-center space-x-2 transition-colors text-primary hover:text-primary-dark">
              <Phone size={20} />
              <span className="font-semibold">06 76 81 59 53</span>
            </a>
            <Link href="/contact" className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-dark" />
            ) : (
              <Menu size={28} className="text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Sidebar avec overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay sombre */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[1001]"
              />

              {/* Menu latéral */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-[1002] flex flex-col"
              >
                {/* Header du menu avec X */}
                <div className="flex items-center justify-end p-4 border-b border-gray-100">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Fermer le menu"
                  >
                    <X size={28} className="text-dark" />
                  </button>
                </div>

                {/* Navigation - zone scrollable */}
                <div className="flex-1 overflow-y-auto pt-2">
                  <div className="flex flex-col pb-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="font-semibold text-lg text-dark hover:bg-primary/5 hover:text-primary transition-colors py-4 px-6 border-b border-gray-100 block"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}

                    {/* Section Événements */}
                    <div className="px-6 py-3 text-sm font-semibold text-gray-500 border-b border-gray-100">
                      NOS ÉVÉNEMENTS
                    </div>

                    {eventLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + navLinks.length) * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="font-medium text-dark hover:bg-primary/5 hover:text-primary transition-colors py-3 px-6 border-b border-gray-100 last:border-b-0 block"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Section - sticky en bas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex-shrink-0 p-6 bg-gradient-to-t from-gray-50 to-transparent border-t border-gray-100"
                >
                  <a
                    href="tel:+33676815953"
                    className="flex items-center justify-center space-x-2 text-primary hover:text-primary-dark transition-colors mb-4 py-3 bg-white rounded-xl border-2 border-primary/20"
                  >
                    <Phone size={20} />
                    <span className="font-semibold">06 76 81 59 53</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full px-6 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl text-center block"
                  >
                    Réserver mon événement
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
