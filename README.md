# 🎬 Starcam by ForeverMemories - Website

Site web ultra-moderne pour le service Glambot Starcam de ForeverMemories.

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## 🛠️ Stack Technique

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utility-first avec palette "Golden Glamour"
- **Framer Motion** - Animations fluides et professionnelles
- **Lucide React** - Icônes modernes

## 🎨 Palette de Couleurs "Golden Glamour"

- **Or Classique** (#D4AF37) - Luxe et élégance
- **Or Rose** (#B76E79) - Modernité et glamour
- **Noir Profond** (#0A0A0A) - Sophistication
- **Champagne** (#F7E7CE) - Légèreté
- **Blanc Pur** (#FFFFFF) - Pureté

## 📁 Structure du Projet

```
starcam-website/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Sections de la homepage
│   │   └── ui/              # Composants UI réutilisables
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout racine
│   └── page.tsx             # Page d'accueil
├── lib/
│   └── utils.ts             # Utilitaires (cn pour classes)
├── public/
│   ├── images/              # Images statiques
│   └── videos/              # Vidéos
├── next.config.js           # Configuration Next.js
├── tailwind.config.ts       # Configuration Tailwind
└── tsconfig.json            # Configuration TypeScript
```

## ✨ Fonctionnalités Actuelles

- ✅ Hero Section avec animations Framer Motion
- ✅ Section "Qu'est-ce que le Starcam"
- ✅ Galerie vidéo avec filtres
- ✅ Section "Pourquoi nous choisir" avec statistiques
- ✅ Témoignages clients
- ✅ CTA Section avec contact
- ✅ Header responsive avec navigation mobile
- ✅ Footer complet avec liens et réseaux sociaux
- ✅ Animations au scroll (whileInView)
- ✅ Design responsive mobile-first

## 🎯 Prochaines Étapes

- [ ] Ajouter de vraies vidéos du robot Starcam
- [ ] Intégrer Sanity CMS pour le contenu dynamique
- [ ] Créer la page "Le Starcam" avec modèle 3D (Three.js)
- [ ] Créer le configurateur d'événement interactif
- [ ] Ajouter le système de réservation avec Stripe
- [ ] Intégrer l'API Instagram pour le feed live
- [ ] Optimiser les images avec Cloudinary
- [ ] Ajouter les animations GSAP avancées

## 📝 Scripts Disponibles

```bash
npm run dev      # Démarrer en mode développement
npm run build    # Build pour production
npm run start    # Démarrer en mode production
npm run lint     # Vérifier le code avec ESLint
```

## 🌟 Design System

### Composants UI

- **Button** - 4 variantes (primary, secondary, outline, ghost) et 3 tailles
- Plus de composants à venir (Card, Input, Modal, etc.)

### Animations

- Fade-in avec Framer Motion
- Slide-up au scroll
- Hover effects sur les cards
- Transitions fluides entre les sections

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎬 Pour Commencer le Développement

1. **Installer les dépendances** (déjà fait)
2. **Lancer le serveur**: `npm run dev`
3. **Ouvrir**: http://localhost:3000
4. **Éditer** les fichiers dans `app/` pour voir les changements en temps réel

## 💡 Conseils

- Les composants "use client" utilisent Framer Motion (animations côté client)
- Les sections utilisent `whileInView` pour les animations au scroll
- La palette "Golden Glamour" est définie dans `tailwind.config.ts`
- Utilisez `gradient-text` pour le texte avec gradient or

---

**Créé avec ❤️ pour ForeverMemories**
