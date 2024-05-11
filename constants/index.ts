import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { url: '/', label: 'Accueil'},
  { url: '/projects', label: 'Projets'},
  { url: '/contact', label: 'Contact'},
]

export const reseaux = [
  { url: 'https://github.com/ImpactFurax', icon: FaGithub },
  { url: 'https://www.instagram.com/juan__brt/', icon: FaInstagram },
  { url: 'https://www.linkedin.com/in/jean-bort-11b189220/', icon: FaLinkedin },
]

export const skills = [
  { icon: '/assets/icons/javascript.png', label: 'JavaScript' },
  { icon: '/assets/icons/typescript.png', label: 'TypeScript' },
  { icon: '/assets/icons/php.png', label: 'PHP' },
  { icon: '/assets/icons/html.png', label: 'HTML' },
  { icon: '/assets/icons/css.png', label: 'CSS' },
  { icon: '/assets/icons/sass.png', label: 'SASS' },
  { icon: '/assets/icons/react.png', label: 'ReactJS' },
  { icon: '/assets/icons/react.png', label: 'React Native' },
  { icon: '/assets/icons/nextjs.png', label: 'NextJS' },
  { icon: '/assets/icons/node.png', label: 'NodeJS' },
  { icon: '/assets/icons/laravel.png', label: 'Laravel' },
  { icon: '/assets/icons/tailwind.png', label: 'TailwindCSS' },
  { icon: '/assets/icons/mongo.png', label: 'MongoDB' },
  { icon: '/assets/icons/figma.png', label: 'Figma' },
  { icon: '/assets/icons/github1.png', label: 'GitHub' },
]

export const projects = [
  { id: '1', title: 'Discordia', techno: ['NextJs', 'ReactJs', 'TypeScript', 'TailwindCSS', 'Shadcn/UI', 'MongoDB', 'Mongoose'], description: 'Discordia est un site qui permet aux utilisateurs de créer des fils de discussion d\'horreur en utilisant une image de leur choix comme point de départ.', screen: "screen_project1.png", img: 'project1_image1.png', carroussel: ['project1_image1.png', 'project1_image2.png', 'project1_image3.png'], url: 'discordia-project.vercel.app/', finish: true  },
  { id: '2', title: 'RoyalFurne', techno: ['ReactJs','TypeScript', 'TailwindCSS', 'Shadcn/UI', 'Parallax'], description: 'RoyalFurne est un site qui propose un large catalogue de meubles pour toutes les pièces de la maison.', screen: "screen_project2.png", img: 'project2_image1.png', carroussel: ['project2_image1.png', 'project2_image2.png', 'project2_image3.png'], url: 'royalfurne.vercel.app/', finish: true },
  { id: '3', title: 'DragonStory', techno: ['NextJs', 'ReactJs', 'TailwindCSS', 'MongoDB'], description: 'DragonStory est un site dédié à la franchise Dragon Quest, vous pouvez y retrouver toutes les histoires des jeux et des animés ainsi que les différentes soluces des jeux.', screen: "screen_project3.png", img: 'project3_image1.png', carroussel: ['project3_image1.png', 'project3_image2.png', 'project3_image3.png'], url: '', finish: false },
  { id: '4', title: 'CookAndClick', techno: ['React Native', 'TailwindCSS', 'MongoDB', 'Expo'], description: 'CookAndClick offre un large catalogue de recettes de cuisines.', screen: "screen_project4.png", img: 'project4_image1.png', carroussel: ['project4_image1.png'], url: '', finish: false },
] 