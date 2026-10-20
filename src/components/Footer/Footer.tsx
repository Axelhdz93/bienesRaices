import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import React from 'react'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-4 py-8 bg-black/90 md:py-40 md:px-36' >
      <div className='grid gap-8 grid-cols-2 md:grid-cols-[1fr, 1fr, 1fr, _400px] text-white'>
        {dataFooter.map(({id, links}) => (
            <div key={id} >
                {links.map(({id, name, link}) => (
                    <Link key={id} href={link} className='block mb-5'>
                        {name}
                    </Link>
                ))}
            </div>
        ))}

        <div className='md:text-right'>
            <h4 className='mb-6 text-xl font-semibold' >Axl Dev</h4>
            <p>Calle inventada, 5</p>
            <p>México</p>

            <div className='flex gap-4 mt-5 md:justify-end'>
                <LiaInstagram className='text-3xl cursor-pointer' href='#' />
                <LiaYoutube className='text-3xl cursor-pointer' href='#' />
                <LiaLinkedinIn className='text-3xl cursor-pointer' href='#' />
                <LiaPinterestP className='text-3xl cursor-pointer' href='#' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
