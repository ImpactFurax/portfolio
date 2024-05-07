import AboutMe from '@/components/shared/AboutMe'
import Projects from '@/components/shared/Projects'
import Section from '@/components/shared/Section'
import Skills from '@/components/shared/Skills'
import React from 'react'

const Home = () => {
  return (
    <>
      <Section title='QUI SUIS-JE ?' subtitle='Mieux me connaître'>
        <AboutMe />
      </Section>
      <Section title='COMPÉTENCES' subtitle='Ce que je maîtrise'>
        <Skills />
      </Section>
      <Section title='MES PROJETS' subtitle='Idées et créations'>
        <Projects />
      </Section>
    </>
  )
}

export default Home