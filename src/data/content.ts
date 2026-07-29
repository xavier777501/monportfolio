// Toutes les informations personnelles du portfolio sont centralisées ici.
// Modifie ces valeurs pour mettre à jour le site sans toucher aux composants.

export const profile = {
  fullName: 'Tchalla Bolade François Xavier',
  displayName: 'Xavier Tchalla',
  role: 'Développeur Backend & API',
  roleTags: ['Python', 'FastAPI', 'React.js', 'PostgreSQL'],
  location: 'Bénin',
  email: 'xaviertchalla@gmail.com',
  bio: "Développeur passionné, spécialisé dans la conception d'API robustes et de backends performants avec Python et FastAPI. Je construis aussi des interfaces modernes et réactives avec React.js. Basé au Bénin, j'aime transformer des idées en produits complets, du serveur jusqu'à l'interface finale.",
  yearsExperience: 2,
}

export const socials = {
  linkedin: 'https://www.linkedin.com/in/tchalla-xavier-60543a285',
  facebook: 'https://www.facebook.com/profile.php?id=61586792904889',
  github: 'https://github.com/xavier777501',
  whatsapp: 'https://wa.me/22944513322',
  email: `mailto:${profile.email}`,
}

export const skills = [
  { name: 'Python', category: 'Backend', level: 90 },
  { name: 'FastAPI', category: 'Backend', level: 90 },
  { name: 'MySQL', category: 'Base de données', level: 85 },
  { name: 'PostgreSQL', category: 'Base de données', level: 85 },
  { name: 'React.js', category: 'Frontend', level: 80 },
  { name: 'TypeScript', category: 'Frontend', level: 75 },
  { name: 'CI/CD', category: 'DevOps', level: 75 },
  { name: 'Git & GitHub', category: 'DevOps', level: 85 },
] as const

export type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  code: string
  live: string
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Voizin',
    subtitle: 'Marketplace de proximité entre voisins',
    description:
      "Application qui connecte acheteurs et vendeurs à proximité, sous le slogan « Ton voisin a ce que tu cherches ». Les acheteurs trouvent rapidement le meilleur vendeur près de chez eux, et les vendeurs sont découverts par des clients locaux et reçoivent des alertes automatiques dès qu'un produit qu'ils proposent est recherché.",
    tags: ['React', 'TypeScript', 'Marketplace', 'Géolocalisation'],
    code: 'https://github.com/xavier777501/voizin',
    live: 'https://voizin-rho.vercel.app',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Edolelo',
    subtitle: 'Marketplace clients ↔ travailleurs',
    description:
      "Plateforme de mise en relation entre clients et travailleurs/professionnels indépendants. Les utilisateurs publient des besoins et trouvent des prestataires qualifiés, avec profils, recherche et prise de contact simplifiée — pensée pour dynamiser le travail indépendant local.",
    tags: ['React', 'TypeScript', 'API REST', 'Marketplace'],
    code: 'https://github.com/xavier777501/marketplace-client-travailleurs',
    live: 'https://edolelo.vercel.app/',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'ImmoPub',
    subtitle: 'Annonces immobilières au Bénin',
    description:
      "Plateforme d'annonces immobilières permettant de publier et consulter des offres de vente ou de location au Bénin. Pensée pour les acheteurs, vendeurs et locataires, avec une interface claire pour parcourir les biens disponibles.",
    tags: ['React', 'TypeScript', 'Immobilier'],
    code: 'https://github.com/xavier777501/immopub',
    live: 'https://immopub.vercel.app/',
    accent: 'from-cyan-500 to-blue-500',
  },
]
