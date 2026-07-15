# SEM School — Site web

Site vitrine de **SEM School**, école privée sénégalaise située à Malika (Dakar),
accueillant les élèves du **préscolaire jusqu'au lycée** (séries L et S).

> Établissement agréé — Récépissé N° 00906/IA/SG/BEP/IG du 28 avril 2026,
> Ministère de l'Éducation Nationale, Inspection d'Académie de Pikine Guédiawaye / Yeumbeul Nord.

## Stack

- **[Astro](https://astro.build)** — site statique, aucun framework JS.
- Le seul élément interactif (FAQ) utilise `<details>` natif ; le menu mobile
  est un toggle CSS pur. Pas de JavaScript côté client.
- **Design system** fourni par Claude Design, intégré tel quel
  (tokens, couleurs navy/or, polices Playfair Display + Montserrat).

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de dev — http://localhost:4321
npm run build    # build de production → dist/
npm run preview  # prévisualiser le build
```

Prérequis : Node.js 18+ (développé avec Node 22).

## Pages

| Page              | Route                 | Contenu                                                        |
| ----------------- | --------------------- | ------------------------------------------------------------- |
| Accueil           | `/`                   | Hero, objectif, atouts, aperçu des niveaux, calendrier        |
| L'école           | `/ecole`              | Mot de la direction, mission & valeurs, agrément officiel     |
| Nos niveaux       | `/niveaux`            | Cursus complet préscolaire → Terminale                        |
| Admissions        | `/admissions`         | Classes ouvertes 2026-2027, test, pièces, frais, FAQ          |
| Cours de vacances | `/cours-de-vacances`  | Annonce et détails des cours de vacances                      |
| Contact           | `/contact`            | Téléphone, WhatsApp, email, adresse (informations seulement)  |

## Structure

```
src/
  data/site.ts          ← TOUT le contenu du site (textes, dates, tarifs, contacts)
  components/            ← composants UI convertis du design system
    Button, Badge, Card, Alert, Accordion, Icon, ContactMethod, Header, Footer
  layouts/Base.astro     ← <head> SEO + en-tête + pied de page
  pages/                 ← une page .astro par route
  styles/
    tokens.css           ← tokens du design system (couleurs, typo, espacements)
    global.css           ← reset léger + utilitaires de mise en page
public/logo/             ← logos officiels (SVG)
design-system/           ← handoff du design system (référence, non publié)
```

**Pour modifier un texte, une date ou un tarif : éditez [`src/data/site.ts`](src/data/site.ts).**

## Contenu provisoire à valider

Certains contenus sont des **placeholders provisoires**, clairement marqués dans le
code (`PROVISOIRE`) et à l'écran, en attente de validation par la direction :

- Mot de la direction (à valider et signer)
- Frais de scolarité (valeurs indicatives, par cycle)
- Détails des cours de vacances (niveaux, matières, horaires, tarif)
- Liste complète des pièces à fournir
- Horaires d'ouverture
- Descriptions pédagogiques des cycles

## Marque & contenu

Français officiel, registre administratif, **aucun emoji**. Les mentions
officielles (récépissé, ministère, devise nationale « Un Peuple – Un But – Une Foi »)
sont préservées telles quelles. Aucune photographie n'est utilisée tant que des
visuels réels n'ont pas été fournis.

Les polices (Playfair Display, Montserrat) et les icônes (style Lucide) sont des
**substitutions** documentées dans le design system, à remplacer si des ressources
de marque réelles deviennent disponibles.
