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
  { id: '1', title: 'Discordia', techno: ['NextJs', 'ReactJs', 'TailwindCSS', 'Shadcn/UI', 'MongoDB'], description: 'Discordia est un site qui permet aux utilisateurs de créer des fils de discussion d\'horreur en utilisant une image de leur choix comme point de départ.', screen: { bg: '#222222', icon: 'icon-project1.png'}, img: 'project1_image1.png', carroussel: ['project1_image1.png', 'project1_image2.png', 'project1_image3.png'], url: 'discordia-project.vercel.app/' },
  { id: '2', title: 'RoyalFurne', techno: ['NextJs', 'ReactJs', 'TailwindCSS', 'Shadcn/UI', 'MongoDB'], description: 'Discordia est un site qui permet aux utilisateurs de créer des fils de discussion d\'horreur en utilisant une image de leur choix comme point de départ.', screen: { bg: '#222222', icon: 'icon-project1.png'}, img: 'project2_image1.png', carroussel: ['project1_image1.png', 'project1_image2.png'], url: 'royalfurne.vercel.app/' },
  { id: '3', title: 'DragonStory', techno: ['NextJs', 'ReactJs', 'TailwindCSS', 'Shadcn/UI', 'MongoDB'], description: 'Discordia est un site qui permet aux utilisateurs de créer des fils de discussion d\'horreur en utilisant une image de leur choix comme point de départ.', screen: { bg: '#222222', icon: 'icon-project1.png'}, img: 'project3_image1.png', carroussel: ['project1_image1.png'], url: '' },
  { id: '4', title: 'CookAndClick', techno: ['NextJs', 'ReactJs', 'TailwindCSS', 'Shadcn/UI', 'MongoDB'], description: 'Discordia est un site qui permet aux utilisateurs de créer des fils de discussion d\'horreur en utilisant une image de leur choix comme point de départ.', screen: { bg: '#222222', icon: 'icon-project1.png'}, img: 'project4_image1.png', carroussel: ['project1_image1.png', 'project1_image2.png', 'project1_image3.png'], url: '' },
] 