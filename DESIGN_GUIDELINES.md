# ForeverMemories - Design Guidelines
## Direction Artistique : "Magenta Raffiné"

Une esthétique épurée et sophistiquée qui met en valeur l'expérience glamour de la Starcam, avec une palette désaturée harmonieuse et une typographie unifiée.

---

## Palette de Couleurs

### Couleurs Principales

| Nom | Hex | Usage |
|-----|-----|-------|
| **Noir Profond** | `#0C0C0E` | Fond principal |
| **Noir Secondaire** | `#121216` | Fond secondaire |
| **Surface Card** | `#18181D` | Cartes, modals |
| **Surface Élevée** | `#1E1E24` | Éléments surélevés |
| **Magenta Raffiné** | `#9B3B8A` | Accent principal, CTAs |
| **Magenta Profond** | `#7A2E6D` | Hover states |
| **Magenta Clair** | `#B85AA6` | Highlights, accents |
| **Rose Poudré** | `#C17BA8` | Accent secondaire |
| **Rose Clair** | `#D4A5C5` | Effets subtils |
| **Crème** | `#F5F3F0` | Texte principal |
| **Crème Atténué** | `#A8A4A0` | Texte secondaire |
| **Crème Tertiaire** | `#6E6A66` | Texte tertiaire |

### Variables CSS Tailwind

```javascript
// tailwind.config.ts
colors: {
  dark: {
    DEFAULT: '#0C0C0E',
    lighter: '#121216',
    card: '#18181D',
    elevated: '#1E1E24',
  },
  primary: {
    DEFAULT: '#9B3B8A',
    dark: '#7A2E6D',
    light: '#B85AA6',
    muted: 'rgba(155, 59, 138, 0.12)',
  },
  rose: {
    DEFAULT: '#C17BA8',
    light: '#D4A5C5',
    muted: 'rgba(193, 123, 168, 0.15)',
  },
  cream: {
    DEFAULT: '#F5F3F0',
    muted: '#A8A4A0',
    dark: '#6E6A66',
  },
}
```

### Gradients Autorisés

```css
/* Gradient principal */
background: linear-gradient(135deg, #9B3B8A 0%, #7A2E6D 100%);

/* Gradient texte */
background: linear-gradient(90deg, #B85AA6 0%, #9B3B8A 100%);
-webkit-background-clip: text;
color: transparent;

/* Gradient fond */
background: linear-gradient(180deg, #0C0C0E 0%, #121216 100%);

/* Glow effect */
box-shadow: 0 0 40px rgba(155, 59, 138, 0.25);
```

### Ce qu'il faut EVITER

- Fond blanc comme couleur dominante
- Magenta saturé (#FF00FF ou similaire)
- Mélange de couleurs non harmonieuses
- Gradient agressif sur fond blanc

---

## Typographie

### Police Unique : DM Sans

| Usage | Poids | Taille |
|-------|-------|--------|
| **Titres H1** | 700 (Bold) | 3.5rem - 4.5rem |
| **Titres H2** | 600 (Semibold) | 2.5rem - 3rem |
| **Titres H3** | 600 (Semibold) | 1.5rem - 1.875rem |
| **Corps** | 400 (Regular) | 1rem |
| **Labels** | 500 (Medium) | 0.875rem - 1rem |
| **Small** | 400 | 0.875rem |

### Configuration Next.js

```typescript
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})
```

### Classes Tailwind

```css
/* Tailles display prédéfinies */
.text-display-xl { font-size: 4.5rem; line-height: 1.1; }
.text-display-lg { font-size: 3.5rem; line-height: 1.15; }
.text-display-md { font-size: 2.5rem; line-height: 1.2; }
.text-display-sm { font-size: 1.875rem; line-height: 1.3; }
```

---

## Composants UI

### Boutons

**Primaire (CTA principal)**
```jsx
<button className="btn-primary">
  Réserver mon événement
  <ArrowRight size={20} />
</button>
```

```css
.btn-primary {
  @apply px-7 py-3.5 bg-primary text-white rounded-full font-medium
         shadow-glow hover:bg-primary-dark hover:shadow-glow-lg
         transition-all duration-200
         inline-flex items-center justify-center gap-2;
}
```

**Secondaire**
```css
.btn-secondary {
  @apply px-7 py-3.5 bg-transparent text-cream rounded-full font-medium
         border border-cream/20 hover:border-primary hover:text-primary
         transition-all duration-200
         inline-flex items-center justify-center gap-2;
}
```

**Ghost**
```css
.btn-ghost {
  @apply px-5 py-2.5 bg-transparent text-cream-muted rounded-full font-medium
         hover:text-cream hover:bg-white/5
         transition-all duration-200
         inline-flex items-center justify-center gap-2;
}
```

### Cartes

```jsx
<div className="card p-8">
  {/* contenu */}
</div>
```

```css
.card {
  @apply bg-dark-card border border-white/[0.06] rounded-2xl
         transition-all duration-300;
}

.card:hover {
  @apply border-primary/20;
}
```

### Badges

```css
.badge {
  @apply inline-flex items-center gap-2 px-4 py-2 rounded-full
         bg-primary-muted text-primary-light border border-primary/20
         text-sm font-medium;
}
```

### Gradient Text

```jsx
<span className="gradient-text">Glambot</span>
```

```css
.gradient-text {
  @apply bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent;
}
```

---

## Layout & Spacing

### Conteneurs

```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 md:px-8;
}

.container-wide {
  @apply max-w-[1400px] mx-auto px-4 md:px-8;
}
```

### Sections

```css
.section-padding {
  @apply py-20 px-4 md:py-28 md:px-8;
}
```

### Séparateurs

```css
.separator {
  @apply h-px bg-gradient-to-r from-transparent via-white/10 to-transparent;
}

.separator-primary {
  @apply h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent;
}
```

---

## Animations

### Principes

1. **Subtilité** - Animations fluides, pas de bounce
2. **Cohérence** - Même timing partout
3. **Performance** - Préférer transform et opacity
4. **Accessibilité** - Respecter prefers-reduced-motion

### Keyframes

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
```

### Durées Standards

| Type | Durée | Easing |
|------|-------|--------|
| Hover | 0.2s | ease-out |
| Apparition | 0.6s | ease-out |
| Scroll reveal | 0.8s | cubic-bezier(0.4, 0, 0.2, 1) |

---

## Effets Visuels

### Glow Effects

```css
box-shadow: 0 0 40px rgba(155, 59, 138, 0.25);  /* shadow-glow */
box-shadow: 0 0 60px rgba(155, 59, 138, 0.35);  /* shadow-glow-lg */
```

### Backdrop Blur

```css
.backdrop-blur-strong {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.glass {
  @apply bg-dark/80 backdrop-blur-strong border border-white/[0.06];
}
```

### Background Glow

```jsx
{/* Glow décoratif */}
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]
                pointer-events-none" />
```

---

## Header & Navigation

### Structure

```jsx
<header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
  ${isScrolled ? 'bg-dark/95 backdrop-blur-strong border-b border-white/[0.06]' : 'bg-transparent'}`}>
```

### Liens Navigation

```jsx
<Link className="text-cream/70 text-[15px] font-medium hover:text-cream transition-colors">
  {label}
</Link>
```

### Dropdown

```jsx
<motion.div className="absolute top-full left-0 mt-2 w-48 py-2
                       bg-dark-card border border-white/[0.08] rounded-xl shadow-card">
  {/* items */}
</motion.div>
```

---

## Responsive

### Breakpoints

- Mobile: < 768px (md)
- Tablet: 768px - 1024px (lg)
- Desktop: > 1024px

### Adaptations

```
Titres H1: text-5xl sm:text-6xl md:text-7xl lg:text-display-xl
Sections: py-20 md:py-28
Container padding: px-4 md:px-8
```

---

## Accessibilite

- Contraste texte cream sur dark : > 15:1
- Contraste primary-light sur dark : > 4.5:1 (WCAG AA)
- Focus visible : outline-2 outline-primary outline-offset-2
- Touch targets : min-height 44px, min-width 44px
- prefers-reduced-motion respecté

---

## Checklist Design

Avant de valider une page :

- [ ] Fond sombre dominant (#0C0C0E)
- [ ] Palette monochrome magenta (pas de gold)
- [ ] Une seule police (DM Sans)
- [ ] Animations subtiles et fluides
- [ ] Contraste suffisant
- [ ] Cohérence avec cette direction artistique
- [ ] Mobile responsive
- [ ] Accessibilité validée
