import React from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../benson-langford-assets-main/constants'

const Contact = () => {
  return (
    <section id='CONTACT' className=''>
        <div className='mx-auto max-w-6xl '>
            <p className='my-8 text-center text-3xl lg:text-5xl font-bold '>
                    Contacts
            </p>
            <p className='p-4 text-center text-3xl tracking-tighter'>
                {CONTACT.text}
            </p>
            <div className='mt-20'>
            <p className='my-4 text-center tet-2xl font-medium text-lime-300
            lg:pt-6 lg:text-4xl'>
                tanishqdhingra58@gmail.com
            </p>
            <p className='my-4 text-center tet-2xl font-medium text-lime-300
            lg:pt-6 lg:text-4xl'>
                9548308328
            </p>
            </div>
        </div>
        <div className='mt-20 flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link , index)=>(
                <a href={link.href} key={index} target='_blank' rel='noopener
                noreferrer'>
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="text-center text-sm sm:text-base text-white  mt-8">
  © {new Date().getFullYear()} All rights reserved. Written and made by Tanishq Dhingra.
</p>

    </section>
  )
}

export default Contact
