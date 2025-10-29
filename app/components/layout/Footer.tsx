'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { trackConversion } from '@/app/lib/gtag'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Forever Memories
            </h3>
            <p className="text-gray-400 mb-6">
              Des vidéos slow-motion et accélérées cinématographiques pour immortaliser vos moments d'exception.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/forevermemories.off/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-primary-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:hello@forevermemories.fr"
                onClick={() => trackConversion.emailClick()}
                className="hover:text-primary-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/la-starcam" className="text-gray-400 hover:text-primary-gold transition-colors">
                  La Starcam
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-primary-gold transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mariages" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Mariages
                </Link>
              </li>
              <li>
                <Link href="/evenements-corporate" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Événements Corporate
                </Link>
              </li>
              <li>
                <Link href="/anniversaires" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Anniversaires
                </Link>
              </li>
              <li>
                <Link href="/galas" className="text-gray-400 hover:text-primary-gold transition-colors">
                  Soirées de Gala
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+33676815953"
                    onClick={() => trackConversion.phoneClick()}
                    className="text-gray-400 hover:text-primary-gold transition-colors"
                  >
                    06 76 81 59 53
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:hello@forevermemories.fr"
                    onClick={() => trackConversion.emailClick()}
                    className="text-gray-400 hover:text-primary-gold transition-colors"
                  >
                    hello@forevermemories.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-gold mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  Pierre-Levée, Seine-et-Marne
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Forever Memories - Agence ÜMAIN. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-primary-gold transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-primary-gold transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-primary-gold transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
