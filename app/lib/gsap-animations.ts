import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer le plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Animation fade-up au scroll
export const fadeUpScroll = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Animation parallax
export const parallaxScroll = (element: string | Element, speed: number = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

// Animation scale au scroll
export const scaleUpScroll = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Animation de texte lettre par lettre
export const textRevealScroll = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if (!el) return

  const text = el.textContent || ''
  el.innerHTML = text
    .split('')
    .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('')

  return gsap.from(`${typeof element === 'string' ? element : '.inline-block'} span`, {
    opacity: 0,
    y: 20,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Animation stagger pour listes
export const staggerScroll = (elements: string, delay: number = 0) => {
  return gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Animation de ligne qui se dessine
export const drawLineScroll = (element: string | Element) => {
  return gsap.from(element, {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 1.2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Animation de compteur
export const counterScroll = (element: string | Element, targetValue: number) => {
  const obj = { value: 0 }
  const el = typeof element === 'string' ? document.querySelector(element) : element

  if (!el) return

  return gsap.to(obj, {
    value: targetValue,
    duration: 2,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    onUpdate: () => {
      el.textContent = Math.round(obj.value).toString()
    }
  })
}

// Nettoyage des animations
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}
