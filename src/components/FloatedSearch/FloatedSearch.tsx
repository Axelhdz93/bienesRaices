import React, { Suspense } from 'react'
import Transition from '../Transition/Transition'
import SearchLocation from '../SearchLocation/SearchLocation'
import SearchProperty from '../SearchProperty/SearchProperty'
import SearchPriceRange from '../SearchPriceRange/SearchPriceRange'
import SearchButton from '../SearchButton/SearchButton'

const FloatedSearch = () => {
  return (
    <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto" >
        <div className='flex flex-col justify-between gap-4 px-3 py-4 bg-white rounded-md md:flex-row backdrop-blur shadow-light' >
          
          <Suspense fallback={<div>Cargando...</div>}>
            <SearchLocation />
            <SearchProperty />
            <SearchPriceRange />
          </Suspense>
            <SearchButton />
        </div>
    </Transition>
  )
}

export default FloatedSearch
