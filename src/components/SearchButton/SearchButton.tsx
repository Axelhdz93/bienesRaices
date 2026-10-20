import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const SearchButton = () => {
  return (
    <div className='gap-4 border rounded-lg px-14 py-2 bg-green-900 flex items-center text-white justify-center cursor-pointer' >
       <RiSearch2Line />
    </div>
  )
}

export default SearchButton
