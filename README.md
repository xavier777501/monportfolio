# Portfolio — Xavier Tchalla

Portfolio personnel construit avec React, TypeScript, Tailwind CSS et Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

## Formulaire de contact (sans backend)

Le formulaire utilise [EmailJS](https://www.emailjs.com/) (compte gratuit) pour envoyer
les messages directement depuis le navigateur, sans serveur à héberger.

1. Crée un compte sur emailjs.com
2. Ajoute un "Email Service" (ex: Gmail) et un "Email Template"
3. Copie `.env.example` vers `.env` et renseigne :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redémarre `npm run dev`

Tant que ces variables ne sont pas définies, le bouton "Envoyer" ouvre simplement
le client email avec le message pré-rempli — le site reste donc pleinement
fonctionnel sans aucune configuration.

## Modifier le contenu

Toutes les informations personnelles (nom, bio, liens sociaux, projets, compétences)
sont centralisées dans [`src/data/content.ts`](src/data/content.ts).

## Déploiement

Ce projet est prêt pour [Vercel](https://vercel.com) ou [Netlify](https://netlify.com) :
build command `npm run build`, dossier de sortie `dist`.
