import React from 'react'
import Transition from '../Transition/Transition'
import Image from 'next/image'

const About = () => {
  return (
    <Transition className='grid gap-4 px-4 py-8 md:px-36 md:grid-cols-2'>

      <div className='flex flex-col items-center justify-center max-w-xl mb-7' id='about'>
        <h4 className='text-green-900' >Sobre nosotros</h4>
        <h2 className='my-4 text-3xl font-semibold'>Más de mil viviendas para vender y comprar en México</h2>
        <p className='mb-10 mt-7' >Compra o vende con la mejor comunidad inmobiliaria. Explora oportunidades únicas en todo el país. Encuentra tu próxima propiedad fácil y rápido.</p>
        <button className='px-4 py-3 text-white transition-all duration-200 rounded-lg bg-green-900 hover:bg-black' >Cargar mas</button>
      </div>

      <div className='flex items-center justify-center' >
          <Image src='/assets/house.jpeg' alt='About' width={350} height={450} className='w-auto h-auto ' priority />
      </div>
    </Transition>
  )
}

export default About
