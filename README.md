# A` la Brestoise — CMS Markdown + Publication via Vercel

Ce dépôt contient le site Vite + React. Un flux de publication simple a été ajouté : écriture d’un article dans une page admin (/admin/new), puis publication via une fonction serverless sur Vercel qui commit dans GitHub. Le site se redéploie et indexe automatiquement l’article.

## 1) Lancer en local

```sh
npm i
npm run dev
```

## 2) Connexion Vercel (déploiement auto)

1. Crée un compte Vercel → Add New Project → Importer ce repo GitHub
2. Dans Project → Settings → Environment Variables, ajoute :
   - `GITHUB_TOKEN` (scope dépôt)
   - `GITHUB_OWNER` (ton user/org GitHub)
   - `GITHUB_REPO` (nom du dépôt)
   - `GITHUB_BRANCH` = `main`
   - `ADMIN_PASSWORD` (mot de passe fort)
   - `VERCEL_DEPLOY_HOOK_URL` (optionnel, pour redéploiement immédiat)

Tu peux te baser sur le fichier `env.example` pour la liste des variables.

## 3) SEO et génération du sitemap

- Le build génère `public/sitemap.xml` via `scripts/generate-sitemap.mjs` en scannant `content/posts/*.md`
- `public/robots.txt` pointe vers `https://YOUR-DOMAIN.example/sitemap.xml`
- Pense à remplacer le domaine dans `index.html` (lien canonical) et dans le sitemap (remplace l’URL dans le script si besoin).

Scripts NPM :

```json
{
  "dev": "vite",
  "build": "vite build && node scripts/generate-sitemap.mjs",
  "preview": "vite preview"
}
```

## 4) Modèle de contenu

- Les articles sont des fichiers Markdown dans `content/posts/` avec frontmatter YAML :

```yaml
---
title: "TITRE FR"
slug: "slug-fr"
date: "2025-11-04"
summary: "Résumé court en français (≤ 160 caractères)."
tags: ["beaute", "soin", "peau"]
heroImage: "/images/2025/11/hero.jpg"
---

Corps en Markdown (FR)
```

## 5) Publier un article (no‑code)

1. Va sur `/admin/new`
2. Remplis : Titre, Résumé, Tags, Corps (Markdown), Date (optionnelle), Image (optionnelle), Mot de passe admin
3. Clique « Publier »
4. La fonction `/api/publish` :
   - Vérifie `ADMIN_PASSWORD`
   - Commit l’image (si fournie) sous `public/images/YYYY/MM/`
   - Crée `content/posts/<slug>.md` (frontmatter + body)
   - Déclenche un redeploy Vercel (si `VERCEL_DEPLOY_HOOK_URL` défini)
5. Après déploiement, l’article est dispo sous `/articles` et `/articles/<slug>`

Astuce : l’upload envoie l’image en base64 (JSON) pour éviter le multipart côté fonction.

## 6) Branding & langue

- Nom : A`la Brestoise (remplace partout les mentions de « Nom du site »)
- Baseline : « Articles élégants, fiables et faciles à lire. »
- `<html lang="fr">`, `<title>`, `<meta description>`, canonical dans `index.html`

## 7) Acceptation

- Aucune régression de style/maquette
- `/admin/new` publie et déclenche l’apparition de l’article après déploiement
- `robots.txt` et `sitemap.xml` présents avec domaine placeholder
