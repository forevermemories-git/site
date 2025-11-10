# 🔗 Plan de Maillage Interne - Forever Memories

**Objectif** : Créer une structure de liens internes cohérente pour maximiser le SEO et la conversion.

**Principe** : Chaque page doit recevoir et envoyer des liens internes pertinents pour distribuer l'autorité et guider l'utilisateur vers la conversion.

---

## 🏗️ Architecture en Silos

```
┌─────────────────────────────────────────────────────────────┐
│                     PAGE D'ACCUEIL (/)                      │
│                  Autorité maximale                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┬─────────────┐
        │             │             │             │
   ┌────▼────┐   ┌───▼────┐   ┌───▼────┐   ┌───▼────┐
   │  SILO 1 │   │ SILO 2 │   │ SILO 3 │   │ SILO 4 │
   │  TECH   │   │ EVENTS │   │  BLOG  │   │ CONVER │
   └────┬────┘   └───┬────┘   └───┬────┘   └───┬────┘
        │            │            │            │
   /la-starcam   /mariages     /blog      /tarifs
                  /corporate               /contact
                  /anniversaires
                  /galas
```

---

## 📄 SILO 1 : TECHNOLOGIE (Page Pilier : /la-starcam)

### /la-starcam (Page Pilier)

**Liens SORTANTS vers** :
- `/blog` (section "En savoir plus")
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "Découvrez l'histoire du Glambot")
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "Photobooth 360 vs Glambot")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "Les meilleures poses")
- `/mariages` (CTA : "Pour les mariages")
- `/evenements-corporate` (CTA : "Pour les événements corporate")
- `/tarifs` (CTA principal)
- `/contact` (CTA secondaire)

**Liens ENTRANTS depuis** :
- `/` (homepage - lien nav + section)
- Tous les articles de blog (ancre : "Découvrez notre Starcam")
- `/mariages`, `/corporate`, `/anniversaires`, `/galas` (ancre : "En savoir plus sur la technologie")
- `/tarifs` (ancre : "Découvrir la Starcam")

**Total** : 8 liens sortants | ~25 liens entrants attendus

---

## 📄 SILO 2 : ÉVÉNEMENTS (Pages Piliers)

### /mariages

**Liens SORTANTS vers** :
- `/la-starcam` (ancre : "Découvrir la technologie Starcam")
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "Photobooth 360 vs Glambot pour mariages")
- `/blog/animation-mariage-slow-motion-booth-glambot-france` (ancre : "Animations mariage 2025")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "Top 10 poses pour réussir")
- `/blog/experience-tapis-rouge-glambot-celebrites` (ancre : "Expérience tapis rouge")
- `/tarifs` (CTA : "Voir les tarifs mariages")
- `/contact` (CTA : "Demander un devis")
- `/a-propos` (ancre : "Notre équipe")

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation)
- `/la-starcam` (CTA type événement)
- Tous les articles blog mariage (ancre : "Nos prestations mariages")
- `/tarifs` (ancre : "Mariages")

**Total** : 8 liens sortants | ~15 liens entrants attendus

### /evenements-corporate

**Liens SORTANTS vers** :
- `/la-starcam` (ancre : "La technologie Starcam")
- `/blog/location-photobooth-paris-robot-glambot` (ancre : "Location à Paris")
- `/blog/glambot-ile-de-france-technologie-rare-exclusive` (ancre : "Technologie exclusive")
- `/blog` (ancre : "Tous nos conseils corporate")
- `/tarifs` (CTA : "Tarifs corporate")
- `/contact` (CTA : "Devis personnalisé")
- `/a-propos` (ancre : "Références clients")

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation)
- `/la-starcam` (CTA type événement)
- Articles blog corporate (ancre : "Nos prestations corporate")
- `/tarifs` (ancre : "Corporate")

**Total** : 7 liens sortants | ~12 liens entrants attendus

### /anniversaires

**Liens SORTANTS vers** :
- `/la-starcam` (ancre : "Découvrir la Starcam")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "Poses pour réussir")
- `/blog` (ancre : "Inspirations anniversaires")
- `/tarifs` (CTA : "Tarifs anniversaires")
- `/contact` (CTA : "Réserver")

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation)
- `/la-starcam` (CTA type événement)
- `/tarifs` (ancre : "Anniversaires")

**Total** : 5 liens sortants | ~8 liens entrants attendus

### /galas

**Liens SORTANTS vers** :
- `/la-starcam` (ancre : "La technologie")
- `/blog/experience-tapis-rouge-glambot-celebrites` (ancre : "Expérience tapis rouge")
- `/blog` (ancre : "Conseils événements de prestige")
- `/tarifs` (CTA : "Tarifs galas")
- `/contact` (CTA : "Demander un devis")

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation)
- `/la-starcam` (CTA type événement)
- `/tarifs` (ancre : "Galas")

**Total** : 5 liens sortants | ~8 liens entrants attendus

---

## 📄 SILO 3 : BLOG (Page Hub : /blog)

### /blog (Page Hub)

**Liens SORTANTS vers** :
- Tous les 8 articles existants (cards cliquables)
- `/la-starcam` (CTA section)
- `/contact` (CTA section)
- `/tarifs` (CTA)

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation)
- `/la-starcam` (ancre : "Lire nos articles")
- Tous les articles entre eux (ancre : "Retour au blog")
- Pages événements (ancre : "Découvrir nos conseils")

**Total** : 11 liens sortants | ~20 liens entrants attendus

---

### Articles de Blog - Règles de Maillage

**Chaque article de blog DOIT contenir** :

#### Liens OBLIGATOIRES (dans le contenu)
1. **1 lien vers page pilier du cluster** (si cluster défini)
2. **3-5 liens vers autres articles** (thématiques proches)
3. **2 liens vers pages conversion** :
   - `/contact` (CTA milieu et fin)
   - `/tarifs` OU page événement pertinente (CTA contextualisé)

#### Liens RECOMMANDÉS
4. **1 lien vers /la-starcam** (mention technologie)
5. **1 lien vers /blog** (ancre : "Découvrir tous nos articles")

**Total par article** : 7-9 liens sortants minimum

---

### Articles Existants - Plan de Maillage

#### Article 1 : Top 10 poses Glambot

**Liens à AJOUTER** :
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "différence avec un photobooth 360")
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "Qu'est-ce qu'un Glambot")
- `/blog/experience-tapis-rouge-glambot-celebrites` (ancre : "tapis rouge des célébrités")
- `/blog/animation-mariage-slow-motion-booth-glambot-france` (ancre : "animation mariage")
- `/mariages` (CTA : "Pour votre mariage")
- `/contact` (CTA × 2 : après intro + en fin)
- `/la-starcam` (ancre : "notre Starcam")

**Total** : 8 liens

#### Article 2 : Photobooth 360 vs Glambot mariage 2025

**Liens à AJOUTER** :
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "définition du Glambot")
- `/blog/360-photo-booth-vs-glambot-5-differences` (ancre : "5 différences détaillées")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "meilleures poses")
- `/blog/animation-mariage-slow-motion-booth-glambot-france` (ancre : "slow motion booth")
- `/mariages` (CTA : "Nos prestations mariages")
- `/tarifs` (CTA : "Voir les tarifs")
- `/contact` (CTA × 2)
- `/la-starcam` (ancre : "technologie Starcam")

**Total** : 9 liens

#### Article 3 : Animation mariage slow motion booth

**Liens à AJOUTER** :
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "comparaison photobooth 360")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "top 10 poses")
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "technologie Glambot")
- `/blog/experience-tapis-rouge-glambot-celebrites` (ancre : "expérience Hollywood")
- `/mariages` (CTA : "Pour votre mariage")
- `/contact` (CTA × 2)
- `/la-starcam` (ancre : "notre Starcam")

**Total** : 8 liens

#### Article 4 : Location photobooth Paris

**Liens à AJOUTER** :
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "photobooth 360 vs Glambot")
- `/blog/glambot-ile-de-france-technologie-rare-exclusive` (ancre : "technologie rare en Île-de-France")
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "qu'est-ce qu'un Glambot")
- `/evenements-corporate` (CTA : "Événements corporate à Paris")
- `/mariages` (CTA : "Mariages à Paris")
- `/contact` (CTA × 2)
- `/tarifs` (ancre : "nos tarifs")

**Total** : 8 liens

#### Article 5 : 360 photo booth vs Glambot 5 différences

**Liens à AJOUTER** :
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "spécifique aux mariages")
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "définition Glambot")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "poses qui marchent")
- `/blog/location-photobooth-paris-robot-glambot` (ancre : "location à Paris")
- `/la-starcam` (ancre : "notre technologie")
- `/contact` (CTA × 2)
- `/tarifs` (CTA : "Comparer les tarifs")

**Total** : 8 liens

#### Article 6 : Qu'est-ce qu'un Glambot

**Liens à AJOUTER** :
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "comparaison photobooth")
- `/blog/360-photo-booth-vs-glambot-5-differences` (ancre : "5 différences")
- `/blog/experience-tapis-rouge-glambot-celebrites` (ancre : "Glambot des Oscars")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "meilleures poses")
- `/blog/glambot-ile-de-france-technologie-rare-exclusive` (ancre : "Glambot en France")
- `/la-starcam` (CTA : "Notre Starcam")
- `/contact` (CTA × 2)

**Total** : 8 liens

#### Article 7 : Expérience tapis rouge

**Liens à AJOUTER** :
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "Glambot des Oscars")
- `/blog/top-10-poses-glambot-reussir-video-slow-motion` (ancre : "poses de stars")
- `/blog/animation-mariage-slow-motion-booth-glambot-france` (ancre : "animation mariage")
- `/blog/glambot-ile-de-france-technologie-rare-exclusive` (ancre : "expérience exclusive")
- `/mariages` (CTA : "Pour votre mariage")
- `/galas` (CTA : "Pour vos galas")
- `/contact` (CTA × 2)

**Total** : 8 liens

#### Article 8 : Glambot Île-de-France rare et exclusif

**Liens à AJOUTER** :
- `/blog/qu-est-ce-qu-un-glambot-photobooth-oscars` (ancre : "qu'est-ce qu'un Glambot")
- `/blog/location-photobooth-paris-robot-glambot` (ancre : "location à Paris")
- `/blog/photobooth-360-vs-glambot-mariage-2025` (ancre : "vs photobooth 360")
- `/blog/experience-tapis-rouge-glambot-celebrites` (ancre : "tapis rouge")
- `/la-starcam` (ancre : "notre Starcam unique")
- `/contact` (CTA × 2 : "Réserver", "Vérifier disponibilité")
- `/tarifs` (CTA)

**Total** : 8 liens

---

## 📄 SILO 4 : CONVERSION (Pages Finales)

### /tarifs

**Liens SORTANTS vers** :
- `/mariages` (ancre : "Découvrir nos prestations mariages")
- `/evenements-corporate` (ancre : "Prestations corporate")
- `/anniversaires` (ancre : "Prestations anniversaires")
- `/galas` (ancre : "Prestations galas")
- `/la-starcam` (ancre : "En savoir plus sur la technologie")
- `/blog` (ancre : "Lire nos conseils")
- `/contact` (CTA principal × 3)

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation + CTA)
- `/la-starcam` (CTA)
- Toutes les pages événements (CTA)
- Tous les articles de blog (CTA)

**Total** : 7 liens sortants | ~30 liens entrants attendus

### /contact

**Liens SORTANTS vers** :
- `/mariages` (ancre : "Nos prestations mariages")
- `/evenements-corporate` (ancre : "Événements corporate")
- `/tarifs` (ancre : "Voir nos tarifs")
- `/la-starcam` (ancre : "Découvrir la technologie")

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation + CTA)
- `/la-starcam` (CTA × 2-3)
- Toutes les pages événements (CTA × 2-3 par page)
- Tous les articles de blog (CTA × 2-3 par article)
- `/tarifs` (CTA × 3)

**Total** : 4 liens sortants | **~50 liens entrants attendus** (page conversion principale)

### /a-propos

**Liens SORTANTS vers** :
- `/la-starcam` (ancre : "Notre technologie")
- `/mariages` (ancre : "Prestations mariages")
- `/evenements-corporate` (ancre : "Prestations corporate")
- `/contact` (CTA : "Contactez-nous")

**Liens ENTRANTS depuis** :
- `/` (homepage - navigation)
- Pages événements (ancre : "À propos de nous")

**Total** : 4 liens sortants | ~6 liens entrants

---

## 🎯 Stratégie de Distribution d'Autorité

### Pages avec le plus d'autorité (à lier en priorité)

1. **Homepage** `/` → Lie vers toutes les pages principales
2. **/contact** → Reçoit le plus de liens (conversion)
3. **/la-starcam** → Hub technologie, liens vers blog
4. **/blog** → Hub contenu, distribue vers articles

### Pages à booster (recevoir plus de liens)

1. **Pages événements** (/mariages, /corporate, /anniversaires, /galas)
   - Ajouter 2-3 liens depuis chaque article blog pertinent
   - Mentionner dans la navigation
   - Lier entre elles (cross-selling)

2. **Articles blog récents**
   - Lier depuis articles plus anciens (section "Lire aussi")
   - Mentionner dans /blog (badge "Nouveauté")

---

## ✅ Checklist Maillage Interne par Page

### Pour chaque ARTICLE DE BLOG
- [ ] 1 lien vers page pilier du cluster (si existe)
- [ ] 3-5 liens vers autres articles (thématiques proches)
- [ ] 2 liens vers `/contact` (après intro + fin)
- [ ] 1 lien vers `/tarifs` OU page événement
- [ ] 1 lien vers `/la-starcam`
- [ ] Ancres descriptives (pas "cliquez ici")
- [ ] Liens en dofollow
- [ ] Ouvrent dans même onglet (navigation interne)

**Total minimum** : 7-9 liens sortants

### Pour chaque PAGE ÉVÉNEMENT
- [ ] 1 lien vers `/la-starcam`
- [ ] 2-3 liens vers articles blog pertinents
- [ ] 2-3 CTAs vers `/contact`
- [ ] 1 CTA vers `/tarifs`
- [ ] 1 lien vers `/a-propos`

**Total minimum** : 7-9 liens sortants

### Pour PAGE PILIER (/la-starcam)
- [ ] 3-4 liens vers articles blog techniques
- [ ] 4 liens vers pages événements
- [ ] 2-3 CTAs vers `/tarifs`
- [ ] 1-2 CTAs vers `/contact`

**Total minimum** : 10-13 liens sortants

---

## 📊 Métriques de Maillage à Suivre

### Outils
- **Google Search Console** : Pages les plus liées (dans "Liens")
- **Screaming Frog** (gratuit jusqu'à 500 URLs) : Audit complet des liens
- **Google Analytics** : Flux de navigation

### KPIs Maillage Interne

| Métrique | Objectif | Comment mesurer |
|----------|----------|-----------------|
| Liens internes moyens/page | 7-10 | Screaming Frog |
| Pages orphelines | 0 | Search Console |
| Profondeur de clic max | < 3 clics depuis home | Screaming Frog |
| Pages/session | > 2 | Google Analytics |
| Taux de rebond blog | < 60% | Google Analytics |

---

## 🚀 Plan d'Action Immédiat

### Semaine 1 : Articles Existants
- [ ] Ajouter 7-8 liens internes à chaque article existant (8 articles)
- [ ] Vérifier que tous les liens fonctionnent
- [ ] Optimiser les ancres (descriptives, avec mots-clés)

### Semaine 2 : Pages Événements
- [ ] Ajouter 3-4 liens blog à `/mariages`
- [ ] Ajouter 2-3 liens blog à `/evenements-corporate`
- [ ] Ajouter 2 liens blog à `/anniversaires`
- [ ] Ajouter 2 liens blog à `/galas`

### Semaine 3 : Page Pilier
- [ ] Optimiser `/la-starcam` avec 10+ liens vers blog et événements
- [ ] Vérifier `/blog` liste bien tous les articles

### Semaine 4 : Nouveaux Articles
- [ ] Appliquer la stratégie de maillage dès la publication
- [ ] Mettre à jour les anciens articles pour lier vers les nouveaux

---

## 🎨 Exemples d'Ancres Optimisées

### ❌ Ancres Génériques (à éviter)
- "cliquez ici"
- "en savoir plus"
- "découvrir"
- "lire la suite"

### ✅ Ancres Optimisées (SEO-friendly)

**Liens vers articles blog** :
- "différence entre photobooth 360 et Glambot"
- "top 10 des meilleures poses Glambot"
- "qu'est-ce qu'un Glambot exactement"
- "expérience tapis rouge pour votre mariage"
- "technologie Glambot rare en Île-de-France"

**Liens vers pages événements** :
- "nos prestations Starcam pour mariages"
- "Glambot pour événements corporate à Paris"
- "animation Glambot pour anniversaires"

**Liens vers pages conversion** :
- "demander un devis personnalisé" (vers /contact)
- "consulter nos tarifs Glambot" (vers /tarifs)
- "réserver votre date" (vers /contact)

---

## 📈 Évolution du Maillage (6 mois)

| Période | Articles total | Liens internes estimés | Pages/session objectif |
|---------|---------------|------------------------|------------------------|
| **Aujourd'hui** | 8 | ~50 | 1.5 |
| **Mois 1** | 17 | ~150 | 1.8 |
| **Mois 2** | 25 | ~250 | 2.0 |
| **Mois 3** | 30 | ~350 | 2.2 |
| **Mois 6** | 40 | ~500 | 2.5+ |

**Objectif final** : Réseau de 40 articles avec ~500 liens internes = Autorité thématique maximale

---

**🎯 Prochaine étape** : Commencer par optimiser les 8 articles existants avec les liens recommandés ci-dessus.

**Dernière mise à jour** : 10 novembre 2025
