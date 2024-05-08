import Card from '@/components/shared/Card'
import Section from '@/components/shared/Section'
import { projects } from '@/constants'
import React from 'react'

const Projects = () => {
  return (
    <Section title='MES PROJETS' subtitle='Idées et créations'>
      <div className='mt-12'>
        <Card items={projects} />
      </div>
    </Section>
  )
}

export default Projects