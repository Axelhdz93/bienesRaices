import Image from 'next/image'
import React from 'react'

const Form = () => {
  return (
    <div className='px-3' >
      <div className='py-4 px-3 rounded-lg shadow-light' >
        <div className='flex flex-col gap-4' >
            <Image src="/assets/comercial.png" alt='Comercial' width={50} height={50} className='border-2 rounded-full border-green-900' />
            <div>
                <p>Alexis Gonzales</p>
                <p className='text-green-900 font-semibold' >Comercial</p>
            </div>
            <div className='my-5' >
                <div>
                    <label className='text-sm text-green-900 '>Nombre</label>
                    <div className='mt-2 ' >
                        <input type="text" name='name' 
                        className='w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm' />
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <label className='text-sm text-green-900'>
                    Teléfono
                </label>
                <div>
                    <input
                        id='phone'
                        name='phone' 
                        type="phone"
                        autoComplete='phone' 
                        className='w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm' 
                    />
                </div>
            </div>
            <div className='mt-2'>
                <label className='text-sm text-green-900'>
                    Descripción
                </label>
                <div className='mt-2'>
                    <textarea 
                        name="description"
                        rows={3}
                        className='w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm'
                        defaultValue={''}
                    />
                </div>

            </div>
        </div>
        <div className='flex justify-between gap-5 my-4'>
            <button className='bg-green-900 px-4 py-2 text-white rounded-lg text-sm'>
                Enviar mensaje
            </button>
            <button className='border border-green-900 text-green-900 px-2 py-2 rounded-lg text-sm'>
                Llamar
            </button>
        </div>
      </div>
    </div>
  )
}

export default Form
