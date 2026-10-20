'use client'

export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic'
import Error404 from "@/components/Error404/Error404"
import Footer from "@/components/Footer/Footer"
import { dataProperties } from "@/components/Properties/Properties.data"
import Property from "@/components/Property/Property"
import Transition from "@/components/Transition/Transition"
import { useParams } from "next/navigation"

// ✅ Forzamos a que el Header y sus componentes hijos (Navbar) se rendericen 100% en el cliente
const HeaderSinSSR = dynamicImport(
  () => import('@/components/Header/Header'),
  { ssr: false }
)

const Page = () => {
  const router = useParams()
  const propertyId = router.page
  const filteredPage = dataProperties.find(
    property => property.id === Number(propertyId)
  )

  return (
    <Transition>
      <HeaderSinSSR />

      {filteredPage ? (
        <Property house={filteredPage} />
      ) : (
        <Error404 />
      )}

      <Footer />
    </Transition>
  )
}

export default Page
