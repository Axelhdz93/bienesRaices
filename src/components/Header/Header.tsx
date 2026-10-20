'use client'

import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import Navbar from '../Navbar/Navbar'
import { BsTelephone } from 'react-icons/bs'

const Header = () => {

    const [openMobileMenu, setopenMobileMenu] = useState(false)

  return (
    <div className='container mx-auto my-5'>
      
      <div className='flex items-center justify-between px-5 md:px-0' >

        <Link href="/" >
            <h1 className='font-medium' > NovaTerris </h1>
        </Link>

        <CiMenuFries className='block text-2xl md:hidden' onClick={() => setopenMobileMenu(!openMobileMenu) } />

        <Suspense fallback={<div>Cargando...</div>}>
          <Navbar openMobileMenu = {openMobileMenu} />
        </Suspense>

        <div className='flex items-center gap-2 md:gap-5' >

            <Link href='tel: 6594997654' className='flex items-center gap-4 cursor-pointer' >
                <BsTelephone />
                <span className='hidden md:block' >+52 659 499 7654 </span>
            </Link>

            <Link href='/login' className='px-3 py-2 text-white rounded-lg bg-green-900 hover:bg-black' >
                Login
            </Link>

        </div>

      </div>

    </div>
  )
}

export default Header
