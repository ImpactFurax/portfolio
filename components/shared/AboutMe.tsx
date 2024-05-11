import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className='mt-12 flex items-center justify-center'>
      <div className='flex flex-[2] flex-col items-center xl:items-start gap-6'>
        <div className='relative size-48'>
          <Image
            src="/assets/images/profile-picture.png"
            alt="Profile Picture"
            fill
            className='object-cover rounded-full'
          />
        </div>
        <h3 className='font-bold text-3xl xl:text-4xl'>Bonjour ! Je suis Jean,<br />
          Développeur Web FullStack
        </h3>
        <p className='font-light md:text-lg lg:text-xl 2xl:text-2xl max-w-[600px]'>Passionné par la création de projets, de la conception à la réalisation du code.<br />
          Que ce soit du côté Frontend ou Backend, j'aime donner vie à des idées à partir de zéro.
        </p>
        <div className='flex max-lg:flex-col w-full gap-2 max-w-[400px]'>
          <Link href="/contact">
            <Button className='bg-black hover:bg-gray-800 font-semibold xl:text-xl w-full'>Me contacter</Button>
          </Link>
          <Link href="/assets/download/CV-BortJean.pdf" download target='_blank' rel="noopener noreferrer">
            <Button className='bg-transparent border border-black text-black xl:text-xl font-semibold w-full'>
              Télécharger mon CV <Image src="/assets/icons/download.svg" alt='Télécharger' width={28} height={28} className='ml-2' />
            </Button>
          </Link>
        </div>
        <span className='flex items-center gap-4 xl:text-xl'>Ouvert à toutes opportunités <Image src="/assets/icons/checked.png" alt='check' width={30} height={30} /></span>
      </div>
      <Image
        src="/assets/images/accueil.png"
        alt='Image accueil'
        width={600}
        height={480}
        className='object-cover hidden xl:flex'
      />
    </div>
  )
}

export default AboutMe