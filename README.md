# UFO.recordz

Site du collectif et label indépendant UFO.recordz, basé à Paris.

Le site présente le collectif, ses sorties musicales, ses événements,
sa charte et ses informations de contact.

**Site :** [www.uforecordz.fr](https://www.uforecordz.fr)

## Technologies

- React 19 et TypeScript
- Vite 8
- Tailwind CSS 4
- React Router
- Supabase : PostgreSQL et Edge Functions
- API SoundCloud
- Vercel pour l’hébergement

## Fonctionnalités

- Présentation du collectif et du label
- Dernières sorties musicales chargées depuis Supabase
- Événements à venir et passés avec programmation et liens externes
- Bandeau des artistes ayant participé aux événements
- Charte de bonne conduite consultable et téléchargeable
- Pages de contact et navigation responsive

## Installation locale

### Prérequis

Les versions déclarées dans `package.json` sont :

- Node.js 24.x
- pnpm 12.4.1

### Installer le projet

```bash
git clone https://github.com/Fantiflex/UFO.recordz.git
cd UFO.recordz
pnpm install
```

### Configurer Supabase

Créer un fichier `.env.local` à la racine du projet :

```dotenv
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=votre-cle-publique
```

Utiliser la clé publique du projet Supabase.
Les clés secrètes et la clé `service_role` ne doivent pas être placées
dans les variables `VITE_*`, qui sont accessibles dans le navigateur.

Le fichier `.env.local` est ignoré par Git.

### Démarrer le site

```bash
pnpm run dev
```

Ouvrir l’adresse indiquée par Vite dans le terminal.

## Commandes

| Commande | Utilité |
|---|---|
| `pnpm run dev` | Démarrer le serveur de développement |
| `pnpm run build` | Générer le site dans `dist/` |
| `pnpm run preview` | Prévisualiser le dernier build |
| `pnpm exec tsc --noEmit` | Vérifier les types TypeScript |
| `pnpm run format` | Exécuter le formateur du projet |

Le build Vite et la vérification TypeScript sont deux commandes distinctes.

## Organisation du projet

| Emplacement | Contenu |
|---|---|
| `src/pages/` | Pages du site |
| `src/components/layout/` | Navigation et pied de page |
| `src/components/sections/` | Sections et cartes du site |
| `src/components/ui/` | Éléments d’interface réutilisables |
| `src/data/navigation.ts` | Configuration de navigation |
| `src/data/supabaseEvents.ts` | Requête et transformation des événements |
| `src/hooks/useEvents.ts` | Chargement des événements et états associés |
| `src/lib/supabase.ts` | Client Supabase du navigateur |
| `src/imports/` | Logos et pochettes importés par le code |
| `src/data/images/` | Photographies du collectif |
| `public/` | Fichiers accessibles directement par URL |
| `supabase/functions/sync-soundcloud/` | Fonction de synchronisation SoundCloud |
| `vercel.json` | Configuration du routage sur Vercel |

## Pages

| URL | Page |
|---|---|
| `/` | Accueil |
| `/ufo-recordz` | Le collectif |
| `/events` | Événements |
| `/label` | Le label |
| `/valeurs` | Valeurs et charte |
| `/contact` | Contact |

## Données Supabase

Le site utilise les tables suivantes :

| Table | Rôle |
|---|---|
| `events` | Informations des événements |
| `events_artists` | Programmation associée à chaque événement |
| `artists_events` | Artistes affichés dans le bandeau |
| `releases` | Métadonnées des sorties musicales |

`events_artists.event_id` référence `events.id`.

Les événements utilisent notamment les colonnes `Name`, `Date`, `Venue`,
`Horaires`, `link_shotgun` et `link_instagram`.
La programmation utilise les colonnes `"artist 1"` à `"artist 8"`.

Les événements datés sont répartis entre événements à venir et passés
selon la date du jour à Paris. Les événements sans date ne sont pas
affichés dans ces deux listes.

Le schéma des tables et les règles d’accès doivent être configurés
dans Supabase. Ce dépôt ne contient pas actuellement les migrations
SQL permettant de recréer ces tables.

Les règles RLS doivent autoriser la lecture publique des données
nécessaires au site.

Les modifications de données sont récupérées lors d’un nouveau
chargement de la page, sans nécessiter un nouveau déploiement du site.

## Synchronisation SoundCloud

La fonction `sync-soundcloud` récupère les métadonnées des morceaux
depuis l’API SoundCloud et les enregistre dans la table `releases`.

Elle utilise les secrets serveur suivants :

- `SOUNDCLOUD_CLIENT_ID`
- `SOUNDCLOUD_CLIENT_SECRET`

Ces secrets se configurent dans Supabase et ne doivent pas être
ajoutés au dépôt ou au frontend.

La fonction se déploie séparément du site Vercel.
Son éventuelle planification est à configurer dans Supabase.

## Déploiement Vercel

Configuration attendue :

- Framework : Vite
- Commande de build : `pnpm run build`
- Dossier de sortie : `dist`
- Variables : `VITE_SUPABASE_URL` et `VITE_SUPABASE_PUBLISHABLE_KEY`

Les variables Vite sont intégrées au moment du build.
Après leur modification dans Vercel, lancer un nouveau déploiement.

`vercel.json` redirige les routes vers `index.html` pour permettre
l’ouverture directe des pages gérées par React Router.

## Vérification avant intégration

```bash
pnpm exec tsc --noEmit
pnpm run build
pnpm run preview
```

Vérifier la navigation, le chargement des données et les liens externes.

Les dossiers `node_modules/` et `dist/`, les fichiers `.env` et les
métadonnées `.DS_Store` ne doivent pas être versionnés.