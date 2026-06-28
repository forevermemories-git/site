import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function TwoProducts() {
  return (
    <section className="pad band-rose" id="products">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">L&apos;univers ForeverMemories</span>
          <h2>
            Nos deux <span className="em">expériences</span>
          </h2>
          <p>
            ForeverMemories réunit deux façons de prolonger l&apos;émotion de
            votre événement. Une disponible aujourd&apos;hui, une en préparation.
          </p>
        </Reveal>

        <div className="products-grid">
          <Reveal>
            <article className="pillar">
              <div className="pillar-head">
                <span className="ptag live">Produit · Disponible</span>
                <span className="pnum">01</span>
              </div>
              <div className="mockup-slot">
                <span className="mockup-photo-frame">
                  <Image
                    src="/images/products/starcam-glambot.jpg"
                    alt="La Starcam : bras robotisé 5 axes équipé d'une caméra, sur un fond coloré ForeverMemories"
                    fill
                    sizes="(max-width: 880px) 90vw, 540px"
                    className="mockup-photo"
                  />
                </span>
              </div>
              <h3>Starcam</h3>
              <p className="pdesc">
                Le bras robotisé qui filme vos invités en slow-motion, comme sur
                un tapis rouge. Une animation glambot spectaculaire, vidéo livrée
                sur place.
              </p>
              <Link href="/la-starcam" className="plink inline-flex">
                Découvrir la Starcam
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="pillar">
              <div className="pillar-head">
                <span className="ptag live">Produit · Disponible</span>
                <span className="pnum">02</span>
              </div>
              <div className="mockup-slot">
                <span className="mockup-photo-frame">
                  <Image
                    src="/images/products/memory-book.jpg"
                    alt="Le Memory Book : la page invité sur smartphone, livre d'or vidéo et album collaboratif"
                    fill
                    sizes="(max-width: 880px) 90vw, 540px"
                    className="mockup-photo"
                  />
                </span>
              </div>
              <h3>Memory Book</h3>
              <p className="pdesc">
                Le livre d&apos;or vidéo et l&apos;album collaboratif de votre
                événement. Un QR code, et vos invités déposent leurs vidéos et
                photos. Tout se range tout seul.
              </p>
              <Link href="/memory-book" className="plink inline-flex">
                Découvrir le Memory Book
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
