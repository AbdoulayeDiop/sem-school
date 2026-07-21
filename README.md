# SEM School — Site web

Site vitrine de **SEM School**, école privée sénégalaise située à Malika (Dakar),
accueillant les élèves du **préscolaire jusqu'au lycée** (séries L et S).

> Établissement agréé — Récépissé N° 00906/IA/SG/BEP/IG du 28 avril 2026,
> Ministère de l'Éducation Nationale, Inspection d'Académie de Pikine Guédiawaye / Yeumbeul Nord.

## Stack

- **[Astro](https://astro.build)** — site statique, quasi aucun JavaScript.
  Seul le menu mobile (toggle via checkbox CSS + fermeture par un mini-script)
  utilise du JS côté client.
- **Design system** fourni par Claude Design, intégré tel quel
  (tokens, couleurs navy/or). Polices : **Times New Roman** (serif d'affichage)
  + **Montserrat** (corps de texte).

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de dev — http://localhost:4321
npm run build    # build de production → dist/
npm run preview  # prévisualiser le build
```

Prérequis : Node.js 18+ (développé avec Node 22).

## Déploiement (Docker)

Le site est empaqueté en image Docker **multi-stage** : build Astro avec Node,
puis service des fichiers statiques par **nginx** (voir [`Dockerfile`](Dockerfile)
et [`nginx.conf`](nginx.conf)).

### Construire l'image

```bash
docker build -t sem-school .
```

### Lancer en local (test rapide)

Publie le port du conteneur sur l'hôte :

```bash
docker run -d --name sem-school -p 8080:80 sem-school
# → http://localhost:8080
```

### Lancer derrière le reverse proxy (réseau externe `main-network`)

Le réseau `main-network` héberge un **reverse proxy nginx**. Le conteneur s'y
attache et **n'expose aucun port sur l'hôte** : c'est le proxy qui reçoit le
trafic externe et le route vers le conteneur (résolu par son nom sur le réseau).

```bash
# Créer le réseau s'il n'existe pas déjà (sinon ignorer cette ligne)
docker network create main-network

# Lancer le conteneur sur le réseau du proxy
docker run -d \
  --name sem-school \
  --network main-network \
  --restart unless-stopped \
  sem-school
```

Côté reverse proxy nginx, router vers le conteneur par son nom (port 80) :

```nginx
location / {
    proxy_pass http://sem-school:80;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

### Mettre à jour le déploiement

```bash
docker build -t sem-school .
docker rm -f sem-school
docker run -d --name sem-school --network main-network --restart unless-stopped sem-school
```

> Le conteneur écoute en interne sur le port **80**. Un `HEALTHCHECK` intégré
> vérifie que la page d'accueil répond.

## Structure du site

**Site une seule page** (design 1B « Éditorial chaleureux » de Claude Design),
avec une navigation par ancres :

| Section            | Ancre        | Contenu                                                    |
| ------------------ | ------------ | ---------------------------------------------------------- |
| Hero               | `/`          | Accroche, stats, photo façade, devise                      |
| Notre école        | `#ecole`     | Bande d'atouts (effectifs, cantine, infirmerie, informatique) + galerie |
| Niveaux            | `#niveaux`   | Parcours maternelle → terminale (4 cycles)                 |
| Calendrier         | —            | Timeline des dates d'inscription 2026-2027                 |
| Tarifs             | `#tarifs`    | 4 cartes de frais de scolarité                             |
| Contact            | `#contact`   | Carte OpenStreetMap + coordonnées + CTA                    |

## Structure des fichiers

```
src/
  data/site.ts          ← TOUT le contenu du site (textes, dates, tarifs, contacts)
  components/            ← composants UI convertis du design system
    Button, Badge, Icon, ImageSlot, Header, Footer
    (Card, Alert, Accordion, ContactMethod — présents mais inutilisés en 1B)
  layouts/Base.astro     ← <head> SEO + topbar + pied de page
  pages/index.astro      ← la page unique (design 1B)
  styles/
    tokens.css           ← tokens du design system (couleurs, typo, espacements)
    global.css           ← reset léger, fond crème --surface-warm, utilitaires
public/logo/             ← logos officiels (SVG)
design-system/           ← handoff du design system (référence, non publié)
design-v2/               ← maquette 1A/1B (référence, non publié)
```

**Pour modifier un texte, une date ou un tarif : éditez [`src/data/site.ts`](src/data/site.ts).**

## Images

Les photos réelles sont dans `public/galerie/` en **WebP optimisé** (≤1600 px) :
`facade.webp` (hero), `classe-1/2/3.webp`, `exterieur.webp`, `escalier.webp`.
Les originaux haute résolution sont sauvegardés dans `_photos-originals/`
(gitignoré, non déployé). Pour ajouter/remplacer une photo : générer une
version WebP optimisée dans `public/galerie/` puis mettre à jour le chemin dans
[`src/pages/index.astro`](src/pages/index.astro) (tableau `galerie` / hero).

`ImageSlot` affiche la photo si `src` est fourni, sinon un placeholder labellisé.

## Contenu provisoire à valider

Éléments **placeholders** en attente de la direction :

- **Portrait du fondateur** — emplacement labellisé (pas de photo fournie)
- **Texte du « Mot du fondateur »** — brouillon provisoire à valider (le nom, Sémou Diop, est confirmé)
- **Frais de scolarité** — valeurs indicatives, à confirmer
- **Emplacement exact sur la carte** — actuellement centré approximativement sur Malika

## Marque & contenu

Français officiel, registre administratif, **aucun emoji**. Les mentions
officielles (récépissé, ministère, devise nationale « Un Peuple – Un But – Une Foi »)
sont préservées telles quelles. Aucune photographie n'est utilisée tant que des
visuels réels n'ont pas été fournis.

Les polices (Playfair Display, Montserrat) et les icônes (style Lucide) sont des
**substitutions** documentées dans le design system, à remplacer si des ressources
de marque réelles deviennent disponibles.
