import { Suspense } from "react"
import FloatedSearch from "../FloatedSearch/FloatedSearch"

const Banner = () => {
  return (
    <div className='container relative mx-auto' >
      <div className='pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center'>
        <div className='max-w-3xl text-center text-white' >
            <h1 className='text-5xl font-semibold'>Descubre la vivienda ideal para tu familia </h1>
            <p className='mt-2 text-xl md:mt-8' >Con más de 30 años de experiencia. En NOVATERRIS contamos con los mejores profecionales para lo que necesitas</p>
        </div>
        
        <Suspense fallback={<div>Cargando...</div>}>
          <FloatedSearch />
        </Suspense>

      </div>
    </div>
  )
}

export default Banner
