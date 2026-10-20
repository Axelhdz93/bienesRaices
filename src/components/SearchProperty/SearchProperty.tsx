'use client'

import React, { useState } from 'react'
import { GrFormDown, GrFormUp, GrHome } from 'react-icons/gr'

const SearchProperty = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative mb-2 md:mb-0 flex items-center gap-4 border rounded-lg px-3 py-2 justify-between cursor-pointer' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <GrHome />
    
          <div>
            <p>Propiedad</p>
            <p className='text-xs'>Selecciona el tipo de propiedad</p>
          </div>
          {isOpen ? (
            <GrFormUp />
          ) : (
            <GrFormDown />
          ) }
    
          {isOpen && (
            <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0' >
                <p>Casa</p>
                <p>Chalet</p>
                <p>Piso</p>
            </div>  
          )}
    
        </div>
  )
}

export default SearchProperty
