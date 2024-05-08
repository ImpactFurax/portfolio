import FormContact from '@/components/shared/FormContact'
import Section from '@/components/shared/Section'
import { reseaux } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <Section title='CONTACT' subtitle="Contactez-moi en cas de questions ou d'opporturnités">
      <div className='flex max-lg:flex-col lg:justify-between mt-12'>
        <div className='flex flex-col gap-6 items-center lg:items-start lg:flex-1'>
          <p className='font-montserrat text-lg xl:text-2xl'>bortjean@yahoo.fr</p>
          <div className="flex gap-4">
            {reseaux.slice(1).map((item, index) => (
              <Link href={item.url} key={index} className="border-black border-2 p-3 rounded-full" target="_blank">
                <item.icon className="size-6 xl:size-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex-1'>
          <FormContact />
        </div>
      </div>
    </Section>
  )
}

export default Contact