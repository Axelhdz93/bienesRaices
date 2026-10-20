import React from 'react'
import Transition from '../Transition/Transition'
import { FaRegPaperPlane } from 'react-icons/fa'

const JoinCommunity = () => {
  return (
    <Transition className='grid items-center px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 bg-green-900' >
        <h3 className='max-w-lg text-4xl font-semibold text-white' >Únete a nuestra comunidad para enterarte de todo</h3>

        <div className='mx-auto mt-5 md:mx-auto' >  
            <button className='flex items-center justify-between py-5 text-white transition-all duration-100  bg-black rounded-lg px-7 w-fit hover:bg-black' >
                <FaRegPaperPlane />
                <span className='ml-3 ' >Únete a la comunidad</span>
            </button>
        </div>

    </Transition>
  )
}

export default JoinCommunity
