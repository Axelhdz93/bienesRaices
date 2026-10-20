'use client'

import React, { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

const SearchLocation = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative mb-2 md:mb-0 flex items-center gap-4 border rounded-lg px-3 py-2 justify-between cursor-pointer' 
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrLocation />

      <div>
        <p>Localización</p>
        <p className='text-xs'>Selecciona tu localización</p>
      </div>
      {isOpen ? (
        <GrFormUp />
      ) : (
        <GrFormDown />
      ) }

      {isOpen && (
        <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0' >
            <p>México</p>
            <p>Guadalajara</p>
            <p>Monterrey</p>
        </div>  
      )}

    </div>
  )
}

export default SearchLocation
