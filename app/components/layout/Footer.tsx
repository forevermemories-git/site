'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { trackConversion } from '@/app/lib/gtag'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '/la-starcam', label: 'La Starcam' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/contact', label: 'Contact' },
  ]

  const eventLinks = [
    { href: '/mariages', label: 'Mariages' },
    { href: '/evenements-corporate', label: 'Événements Corporate' },
    { href: '/anniversaires', label: 'Anniversaires' },
    { href: '/galas', label: 'Soirées de Gala' },
  ]

  const socialLinks = [
    {
      href: 'https://www.instagram.com/forevermemories.off/',
      icon: <Instagram size={22} />,
      label: 'Instagram'
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61583156844468',
      icon: <Facebook size={22} />,
      label: 'Facebook'
    },
    {
      href: 'mailto:hello@forevermemories.fr',
      icon: <Mail size={22} />,
      label: 'Email',
      onClick: () => trackConversion.emailClick()
    }
  ]

  return (
    <footer className="bg-dark-lighter border-t border-white/5">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/White.png"
                alt="ForeverMemories"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-cream-muted mb-6 leading-relaxed">
              Des vidéos slow-motion et accélérées cinématographiques pour immortaliser vos moments d'exception.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  onClick={social.onClick}
                  className="w-11 h-11 rounded-xl bg-dark-card border border-white/5 flex items-center justify-center text-cream-muted hover:text-primary-light hover:border-primary/30 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-muted hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-muted hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="flex items-center gap-3 text-cream-muted hover:text-cream transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-dark-card border border-white/5 flex items-center justify-center text-primary-light group-hover:border-primary/30 transition-all">
                    <Phone size={18} />
                  </div>
                  <span>06 76 81 59 53</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@forevermemories.fr"
                  onClick={() => trackConversion.emailClick()}
                  className="flex items-center gap-3 text-cream-muted hover:text-cream transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-dark-card border border-white/5 flex items-center justify-center text-primary-light group-hover:border-primary/30 transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">hello@forevermemories.fr</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream-muted">
                <div className="w-10 h-10 rounded-xl bg-dark-card border border-white/5 flex items-center justify-center text-primary-light">
                  <MapPin size={18} />
                </div>
                <span>Île-de-France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-muted text-sm">
              © {currentYear} Forever Memories - Agence ÜMAIN. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-cream-muted hover:text-cream transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-cream-muted hover:text-cream transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/cgv"
                className="text-cream-muted hover:text-cream transition-colors"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
