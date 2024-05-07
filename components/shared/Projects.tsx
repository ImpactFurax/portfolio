import React from 'react'
import Card from './Card'
import { projects } from '@/constants'

const Projects = () => {
  return (
    <div className='mt-12'>
      <Card items={projects} />
    </div>
  )
}

export default Projects