'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail } from 'lucide-react'
import { trackConversion } from '@/app/lib/gtag'

const linkCls =
  'text-[15px] text-[#6C6172] transition-colors hover:text-[#B65EAB]'
const socialCls =
  'flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5B2A55] shadow-[0_6px_18px_rgba(91,42,85,0.08)] transition-transform hover:-translate-y-0.5'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t border-black/[0.08] bg-[#FFFBF5]"
      style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-[18px] py-14 min-[560px]:px-6 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2.5"
              aria-label="ForeverMemories, accueil"
            >
              <Image
                src="/images/fm-logo-black.png"
                alt="ForeverMemories"
                width={480}
                height={480}
                className="h-9 w-auto"
              />
              <span className="font-display text-[20px] tracking-tight text-[#2A2230]">
                <b className="font-extrabold">Forever</b>Memories
              </span>
            </Link>
            <p className="max-w-[300px] text-[15px] text-[#6C6172]">
              ForeverMemories capture vos événements autrement. La Starcam et le
              Memory Book, pour des souvenirs qui durent.
            </p>
          </div>

          {/* Produits */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#2A2230]">
              Produits
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/la-starcam" className={linkCls}>Starcam</Link></li>
              <li><Link href="/memory-book" className={linkCls}>Memory Book</Link></li>
              <li><Link href="/#reel" className={linkCls}>Réalisations</Link></li>
              <li><Link href="/tarifs" className={linkCls}>Tarifs</Link></li>
            </ul>
          </div>

          {/* Événements */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#2A2230]">
              Événements
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/mariages" className={linkCls}>Mariages</Link></li>
              <li><Link href="/evenements-corporate" className={linkCls}>Corporate</Link></li>
              <li><Link href="/anniversaires" className={linkCls}>Anniversaires</Link></li>
              <li><Link href="/galas" className={linkCls}>Galas &amp; Prestige</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#2A2230]">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className={linkCls}>Réserver mon événement</Link></li>
              <li>
                <a
                  href="mailto:hello@forevermemories.fr"
                  onClick={() => trackConversion.emailClick()}
                  className={linkCls}
                >
                  hello@forevermemories.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className={linkCls}
                >
                  06 76 81 59 53
                </a>
              </li>
              <li className="text-[15px] text-[#6C6172]">Île-de-France</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-11 flex flex-col items-center justify-between gap-4 border-t border-black/[0.08] pt-6 md:flex-row">
          <p className="text-[14px] text-[#6C6172]">
            © {currentYear} Forever Memories - Agence ÜMAIN. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex flex-wrap justify-center gap-4 text-[13px]">
              <Link href="/mentions-legales" className="text-[#6C6172] transition-colors hover:text-[#B65EAB]">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="text-[#6C6172] transition-colors hover:text-[#B65EAB]">Confidentialité</Link>
              <Link href="/cgv" className="text-[#6C6172] transition-colors hover:text-[#B65EAB]">CGV</Link>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/forevermemories.off/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialCls}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583156844468"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialCls}
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:hello@forevermemories.fr"
                onClick={() => trackConversion.emailClick()}
                aria-label="Email"
                className={socialCls}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
