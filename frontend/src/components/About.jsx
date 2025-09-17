import React from 'react'
import { ABOUT } from '../benson-langford-assets-main/constants'

const About = () => {
  return (
    <section id='about' className='px-4 sm:px-6 py-8 sm:py-10'>
      
      <h2 className='my-8 text-center text-3xl lg:text-5xl font-bold hover:text-lime-600'>
        About Me  
      </h2>
      
      <div className='flex items-center justify-center sm:mx-4 sm:my-4'>
        <p className='mb-8 max-w-2xl sm:max-w-4xl text-lg sm:text-2xl lg:text-4xl text-center'>
          {ABOUT}
        </p>
      </div>

    </section>
  )
}

export default About
