import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function HomeCTA() {
  return (
    <section className="cta-band band-rose" id="cta">
      <div className="wrap">
        <Reveal className="cta-inner">
          <span className="dotblob cta-d1" aria-hidden="true" />
          <span className="dotblob cta-d2" aria-hidden="true" />
          <Image
            className="cta-logo"
            src="/images/fm-logo-white.png"
            alt="ForeverMemories"
            width={44}
            height={44}
          />
          <h2>
            Prêt à faire briller
            <br />
            vos invités ?
          </h2>
          <p>
            Réservez votre date et offrez à vos invités leur moment de star.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-white btn-lg">
              Réserver mon événement
              <ArrowRight size={18} aria-hidden="true" stroke="#8E3F84" />
            </Link>
            <a href="#reel" className="btn btn-outline btn-lg">
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M9 7.5l7 4.5-7 4.5z" fill="#B65EAB" />
                </svg>
              </span>
              Voir nos réalisations
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
